// Genera iconos PWA (192/512 + maskable) sin dependencias externas.
import zlib from 'node:zlib';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'icons');

const BG = [23, 56, 42];       // #17382a
const SUN = [230, 167, 68];    // #e6a744
const MTN_BACK = [111, 91, 120]; // #6f5b78
const MTN_FRONT = [39, 76, 58];  // #274c3a
const TRUNK = [244, 234, 217];   // #f4ead9

function makeIcon(size, scale) {
  const buf = Buffer.alloc(size * size * 4);
  // fondo
  for (let i = 0; i < size * size; i++) {
    const o = i * 4;
    buf[o] = BG[0]; buf[o + 1] = BG[1]; buf[o + 2] = BG[2]; buf[o + 3] = 255;
  }
  const off = (size * (1 - scale)) / 2;
  const ext = size * scale;
  const px = (nx, ny) => [off + nx * ext, off + ny * ext];

  const fillTriangle = (a, b, c, color) => {
    const [ax, ay] = px(a[0], a[1]);
    const [bx, by] = px(b[0], b[1]);
    const [cx2, cy2] = px(c[0], c[1]);
    const minX = Math.max(0, Math.floor(Math.min(ax, bx, cx2)));
    const maxX = Math.min(size - 1, Math.ceil(Math.max(ax, bx, cx2)));
    const minY = Math.max(0, Math.floor(Math.min(ay, by, cy2)));
    const maxY = Math.min(size - 1, Math.ceil(Math.max(ay, by, cy2)));
    const area = (bx - ax) * (cy2 - ay) - (by - ay) * (cx2 - ax);
    const sign = area < 0 ? -1 : 1;
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const w0 = ((bx - ax) * (y + 0.5 - ay) - (by - ay) * (x + 0.5 - ax)) * sign;
        const w1 = ((cx2 - bx) * (y + 0.5 - by) - (cy2 - by) * (x + 0.5 - bx)) * sign;
        const w2 = ((ax - cx2) * (y + 0.5 - cy2) - (ay - cy2) * (x + 0.5 - cx2)) * sign;
        if (w0 >= 0 && w1 >= 0 && w2 >= 0) {
          const o = (y * size + x) * 4;
          buf[o] = color[0]; buf[o + 1] = color[1]; buf[o + 2] = color[2]; buf[o + 3] = 255;
        }
      }
    }
  };

  const fillCircle = (centerN, rN, color) => {
    const [ccx, ccy] = px(centerN[0], centerN[1]);
    const r = rN * ext;
    const minX = Math.max(0, Math.floor(ccx - r));
    const maxX = Math.min(size - 1, Math.ceil(ccx + r));
    const minY = Math.max(0, Math.floor(ccy - r));
    const maxY = Math.min(size - 1, Math.ceil(ccy + r));
    const r2 = r * r;
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const dx = x + 0.5 - ccx;
        const dy = y + 0.5 - ccy;
        if (dx * dx + dy * dy <= r2) {
          const o = (y * size + x) * 4;
          buf[o] = color[0]; buf[o + 1] = color[1]; buf[o + 2] = color[2]; buf[o + 3] = 255;
        }
      }
    }
  };

  // Montañas (detrás) y sol (encima).
  fillTriangle([0.04, 0.84], [0.46, 0.52], [0.98, 0.84], MTN_BACK);
  fillTriangle([0.22, 0.88], [0.56, 0.60], [0.98, 0.88], MTN_FRONT);
  // Pequeño acento claro (árbol/centro).
  fillTriangle([0.47, 0.86], [0.55, 0.66], [0.63, 0.86], TRUNK);
  fillCircle([0.73, 0.27], 0.12, SUN);

  return buf;
}

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return (~c) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function encodePNG(size, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // color type RGBA
  ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0; // filter none
    rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

const targets = [
  ['icon-192.png', 192, 0.92],
  ['icon-512.png', 512, 0.92],
  ['icon-192-maskable.png', 192, 0.66],
  ['icon-512-maskable.png', 512, 0.66],
];

for (const [name, size, scale] of targets) {
  const png = encodePNG(size, makeIcon(size, scale));
  writeFileSync(join(OUT, name), png);
  console.log(`wrote ${name} (${png.length} bytes)`);
}

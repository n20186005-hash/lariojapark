// Pronóstico Open-Meteo para el punto del parque; consejos orientativos.

export type WmoInfo = { label: string; icon: string; rain: boolean };

export const WMO: Record<number, WmoInfo> = {
  0: { label: 'Despejado', icon: '☀️', rain: false },
  1: { label: 'Mayormente despejado', icon: '🌤️', rain: false },
  2: { label: 'Parcialmente nublado', icon: '⛅', rain: false },
  3: { label: 'Nublado', icon: '☁️', rain: false },
  45: { label: 'Niebla', icon: '🌫️', rain: false },
  48: { label: 'Niebla con escarcha', icon: '🌫️', rain: false },
  51: { label: 'Llovizna ligera', icon: '🌦️', rain: true },
  53: { label: 'Llovizna', icon: '🌦️', rain: true },
  55: { label: 'Llovizna intensa', icon: '🌧️', rain: true },
  56: { label: 'Llovizna helada', icon: '🌧️', rain: true },
  57: { label: 'Llovizna helada intensa', icon: '🌧️', rain: true },
  61: { label: 'Lluvia leve', icon: '🌧️', rain: true },
  63: { label: 'Lluvia', icon: '🌧️', rain: true },
  65: { label: 'Lluvia intensa', icon: '⛈️', rain: true },
  66: { label: 'Lluvia helada', icon: '🌧️', rain: true },
  67: { label: 'Lluvia helada intensa', icon: '🌧️', rain: true },
  71: { label: 'Nieve leve', icon: '🌨️', rain: true },
  73: { label: 'Nieve', icon: '🌨️', rain: true },
  75: { label: 'Nieve intensa', icon: '🌨️', rain: true },
  77: { label: 'Granizo', icon: '🌨️', rain: true },
  80: { label: 'Chubascos', icon: '🌦️', rain: true },
  81: { label: 'Chubascos', icon: '🌧️', rain: true },
  82: { label: 'Chubascos intensos', icon: '⛈️', rain: true },
  85: { label: 'Chubascos de nieve', icon: '🌨️', rain: true },
  86: { label: 'Chubascos de nieve', icon: '🌨️', rain: true },
  95: { label: 'Tormenta', icon: '⛈️', rain: true },
  96: { label: 'Tormenta con granizo', icon: '⛈️', rain: true },
  99: { label: 'Tormenta con granizo', icon: '⛈️', rain: true },
};

export const wmo = (c: number): WmoInfo => WMO[c] ?? { label: 'Cielo variado', icon: '🌡️', rain: false };

// Velocidad del viento (km/h) -> escala de Beaufort (nivel aproximado).
export function beaufort(kmh: number): number {
  const upper = [0.3, 1.5, 3.3, 5.4, 7.9, 10.7, 13.8, 17.1, 20.7, 24.4, 28.4, 32.6];
  let level = 0;
  for (const u of upper) if (kmh / 3.6 > u) level++;
  return level;
}

export const TZ = 'America/Argentina/La_Rioja';
const dayFmt = new Intl.DateTimeFormat('es-AR', { weekday: 'short', timeZone: TZ });

export function buildWeatherUrl(): string {
  return (
    'https://api.open-meteo.com/v1/forecast' +
    '?latitude=-29.439496&longitude=-66.898749' +
    '&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m' +
    '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max' +
    '&timezone=America%2FArgentina%2FLa_Rioja&forecast_days=7'
  );
}

export function buildNow(w: any): string {
  const c = w?.current ?? {};
  const d = w?.daily ?? {};
  const code = Number(c.weather_code);
  const info = wmo(code);
  const probNow = Number(c.precipitation_probability ?? 0);
  const probDay = Number(d.precipitation_probability_max?.[0] ?? 0);
  const prob = Math.max(probNow, probDay);
  const temp = c.temperature_2m != null ? Math.round(c.temperature_2m) : '—';
  const feels = c.apparent_temperature != null ? Math.round(c.apparent_temperature) : '—';
  const hum = c.relative_humidity_2m != null ? Math.round(c.relative_humidity_2m) : '—';
  const wind = c.wind_speed_10m != null ? Math.round(c.wind_speed_10m) : '—';
  const uv = d.uv_index_max?.[0] != null ? Math.round(d.uv_index_max[0]) : '—';
  return `
    <div class="wx-now">
      <div class="wx-now-main">
        <span class="wx-icon" aria-hidden="true">${info.icon}</span>
        <div>
          <div class="wx-temp">${temp}°</div>
          <div class="wx-cond">${info.label}</div>
        </div>
      </div>
      <ul class="wx-meta">
        <li><span>Sensación</span><strong>${feels}°</strong></li>
        <li><span>Humedad</span><strong>${hum}%</strong></li>
        <li><span>Viento</span><strong>${wind} km/h</strong></li>
        <li><span>Prob. lluvia del día</span><strong>${prob}%</strong></li>
        <li><span>UV máximo del día</span><strong>${uv}</strong></li>
      </ul>
    </div>`;
}

export function buildDays(w: any): string {
  const d = w?.daily;
  if (!d?.time?.length) return '';
  const out: string[] = [];
  for (let i = 0; i < d.time.length; i++) {
    const date = new Date(d.time[i] + 'T12:00:00-03:00');
    const name = i === 0 ? 'Hoy' : dayFmt.format(date).replace(/^\w/, (s) => s.toUpperCase());
    const code = Number(d.weather_code?.[i] ?? 0);
    const info = wmo(code);
    const min = d.temperature_2m_min?.[i] != null ? Math.round(d.temperature_2m_min[i]) : '—';
    const max = d.temperature_2m_max?.[i] != null ? Math.round(d.temperature_2m_max[i]) : '—';
    const prob = d.precipitation_probability_max?.[i] != null ? Math.round(d.precipitation_probability_max[i]) : 0;
    out.push(`
      <div class="wx-day">
        <span class="wx-day-name">${name}</span>
        <span class="wx-day-icon" aria-hidden="true">${info.icon}</span>
        <span class="wx-day-temp">${min}° / ${max}°</span>
        <span class="wx-day-cond">${info.label}</span>
        <span class="wx-day-rain ${prob >= 40 ? 'is-rain' : ''}">Lluvia ${prob}%</span>
      </div>`);
  }
  return `<div class="wx-days">${out.join('')}</div>`;
}

// Motor de consejos: convierte los datos en recomendaciones accionables.
// No muestra lo que no aplica (la lluvia solo aparece si hay riesgo de lluvia).
export function buildAdvice(w: any): string {
  const c = w?.current ?? {};
  const d = w?.daily ?? {};
  const codeNow = Number(c.weather_code);
  const info = wmo(codeNow);
  const tempNow = c.temperature_2m != null ? Math.round(c.temperature_2m) : NaN;
  const uvNow = c.uv_index != null ? c.uv_index : (d.uv_index_max?.[0] ?? 0);
  const windKmh = c.wind_speed_10m != null ? c.wind_speed_10m : 0;
  const level = beaufort(windKmh);
  const tMax = d.temperature_2m_max?.[0] != null ? Math.round(d.temperature_2m_max[0]) : NaN;
  const tMin = d.temperature_2m_min?.[0] != null ? Math.round(d.temperature_2m_min[0]) : NaN;
  const prob = Math.max(
    Number(c.precipitation_probability ?? 0),
    Number(d.precipitation_probability_max?.[0] ?? 0)
  );
  const uvMax = d.uv_index_max?.[0] != null ? d.uv_index_max[0] : uvNow;

  const outfit: string[] = [];
  const plan: string[] = [];
  const items: string[] = [];
  const risk: string[] = [];

  const light = [51, 53, 55, 56, 57];
  const heavy = [61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82];
  const storm = [95, 96, 99];

  if (prob >= 60 || info.rain) {
    outfit.push('Llevá ropa y calzado que resistan mojarse.');
    plan.push('Si llueve, acortá el recorrido expuesto y comprobá dónde hay un lugar seguro habilitado.');
    items.push('Paraguas o poncho.');
  }
  if (light.includes(codeNow)) {
    plan.push('Lluvia leve: el césped y los senderos pueden estar resbaladizos, caminá con cuidado.');
    items.push('Paraguas plegable.');
  }
  if (heavy.includes(codeNow)) {
    risk.push('Lluvia intensa: evitá zonas bajas y recorridos expuestos; seguí los avisos locales.');
    items.push('Poncho (mejor que paraguas largo si hay viento).');
  }
  if (storm.includes(codeNow)) {
    risk.push('Tormenta eléctrica: alejate del agua y de los árboles; buscá un edificio cerrado o refugio seguro.');
    plan.push('Posponé el paseo expuesto y consultá las indicaciones del personal; el pronóstico no confirma cierres.');
  }
  if (level >= 7) {
    risk.push('Viento fuerte: alejate de carteles, ramas y estructuras; cuidado con objetos que se desprendan.');
  } else if (level >= 5) {
    plan.push('Con viento, sujetá tus pertenencias y revisá las condiciones del recorrido.');
    items.push('Mejor una gorra ajustada que un sombrero.');
  }
  if (tempNow >= 32 || tMax >= 32) {
    outfit.push('Ropa ligera y transpirable.');
    plan.push('Evitá el sol fuerte entre las 12 y las 16 h; buscá sombra y descansá.');
    items.push('Protector solar y mucha agua.');
  }
  if (uvMax >= 6 || uvNow >= 6) {
    items.push('Protector solar, lentes de sol y gorra: el sol es intenso.');
    plan.push('El sol riojano es fuerte: reponé agua seguido.');
  } else if (uvMax >= 5 || uvNow >= 5) {
    items.push('Protector solar y gorra.');
  }
  if (!isNaN(tMax) && tMax <= 10) {
    outfit.push('Hace frío: abrigate bien.');
    items.push('Campera de abrigo.');
  }
  if (!isNaN(tMax) && !isNaN(tMin) && tMax - tMin > 8) {
    outfit.push('Gran diferencia térmica entre el día y la noche: llevá una prenda para abrigarte al atardecer.');
  }
  if ([0, 1].includes(codeNow)) {
    plan.push('Cielo despejado: ajustá el recorrido al calor, al viento y al resto de las condiciones.');
    items.push('No olvides el protector solar.');
  } else if (codeNow === 3) {
    plan.push('Cielo nublado: revisá igualmente la temperatura, la lluvia y el viento antes de caminar.');
  }

  const dedupe = (a: string[]) => Array.from(new Set(a));
  const out = dedupe(outfit);
  const pl = dedupe(plan);
  const it = dedupe(items);

  const block = (title: string, arr: string[], cls: string) =>
    arr.length
      ? `<div class="wx-advice-block ${cls}"><h4>${title}</h4><ul>${arr.map((x) => `<li>${x}</li>`).join('')}</ul></div>`
      : '';

  let html = '';
  if (risk.length) {
    html += `<div class="wx-risk">${risk.map((x) => `<p>⚠️ ${x}</p>`).join('')}</div>`;
  }
  const grid = block('Vestimenta', out, 'wx-outfit') + block('Plan de visita', pl, 'wx-plan') + block('Qué llevar', it, 'wx-items');
  if (grid) {
    html += `<div class="wx-advice-grid">${grid}</div>`;
  } else if (!risk.length) {
    html += '<p class="wx-ok">Estas variables no generan consejos adicionales; verificá los avisos locales antes de salir.</p>';
  }
  return html;
}

export function validateWeather(w: any): void {
 const c=w?.current,d=w?.daily,finite=(v:unknown)=>typeof v==='number'&&Number.isFinite(v);
 if(!c||!d||!['temperature_2m','apparent_temperature','relative_humidity_2m','wind_speed_10m','weather_code'].every(k=>finite(c[k]))||!WMO[c.weather_code])throw new Error('Current weather unavailable');
 if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(c.time??''))throw new Error('Missing weather time');
 const stamp=Date.parse(c.time+'-03:00');if(!Number.isFinite(stamp)||Math.abs(Date.now()-stamp)>6*3600000)throw new Error('Outdated weather');
 if(!Array.isArray(d.time)||d.time.length<1||d.time.length>7||!d.time.every((v:unknown)=>typeof v==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v)&&Number.isFinite(Date.parse(v))))throw new Error('Invalid forecast dates');
 for(const k of ['weather_code','temperature_2m_min','temperature_2m_max','precipitation_probability_max','uv_index_max'])if(!Array.isArray(d[k])||d[k].length!==d.time.length||!d[k].every(finite))throw new Error('Incomplete forecast');
 if(c.relative_humidity_2m<0||c.relative_humidity_2m>100||c.wind_speed_10m<0||d.precipitation_probability_max.some((n:number)=>n<0||n>100)||d.weather_code.some((n:number)=>!WMO[n]))throw new Error('Invalid weather value');
}
export function weatherTime(w: any): string {
 return new Intl.DateTimeFormat('es-AR',{timeZone:TZ,day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date(w.current.time+'-03:00'));
}

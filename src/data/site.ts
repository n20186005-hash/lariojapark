// Fuente única de verdad para el nombre SEO del sitio y los datos fácticos
// del atractivo. El formato del nombre SEO es:
//   NOMBRE_DEL_ATRACTO + CIUDAD + "Guía de turismo"
// Ej.: "Parque de la Ciudad La Rioja — Guía de turismo"

export const SITE_NAME = 'Parque de la Ciudad La Rioja — Guía de turismo';

export function withSiteName(suffix: string): string {
  return `${suffix} | ${SITE_NAME}`;
}

export const SITE_DOMAIN = 'lariojapark.com';

// Valoración de terceros (Google Maps). Es una referencia, no una evaluación propia.
export const RATING = {
  value: 4.7,
  reviews: '14.548',
  asOf: '1 de noviembre de 2026',
  mapsShare: 'https://maps.app.goo.gl/Cd5Ax2rgCJBqPPqo9',
} as const;

// Fuentes oficiales consultadas (fecha de la última verificación de la guía).
export const LAST_CHECK = '1 de noviembre de 2026';

export const OFFICIAL_SOURCES = {
  turismo: 'https://turismo.larioja.gob.ar/',
  parque: 'https://turismo.larioja.gob.ar/actividades/parque-de-la-ciudad-y-superdomo/',
  piles: 'https://turismo.larioja.gob.ar/actividades/natatorio-parque-de-la-ciudad/',
  mirador: 'https://turismo.larioja.gob.ar/imperdibles/la-rioja-argentina-un-tesoro-de-historia-aventura-y-naturaleza/',
  bus: 'https://www.lariojaciudad.com.ar/',
  municipio: 'https://municipiolarioja.gob.ar/',
} as const;

// Datos estables del atractivo (no cambian entre visitas).
export const ATTRACTION = {
  fullName: 'Parque de la Ciudad',
  city: 'La Rioja',
  province: 'La Rioja',
  country: 'Argentina',
  countryCode: 'AR',
  postalCode: 'F5300',
  streetAddress: 'Avenida Circunvalación S/N',
  lat: -29.439496,
  lng: -66.898749,
  mapsShare: 'https://maps.app.goo.gl/Cd5Ax2rgCJBqPPqo9',
  govtTourism: 'https://turismo.larioja.gob.ar/',
  // El portal provincial describe un predio de más de 50 hectáreas con estos componentes.
  areaHa: 50,
} as const;

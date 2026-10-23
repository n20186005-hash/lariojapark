// Fuente única de verdad para el nombre SEO del sitio y los datos fácticos
// del atractivo. El formato del nombre SEO es:
//   NOMBRE_DEL_ATRACTO + CIUDAD + "Guía de turismo"
// Ej.: "Parque de la Ciudad La Rioja — Guía de turismo"

export const SITE_NAME = 'Parque de la Ciudad La Rioja — Guía de turismo';

export function withSiteName(suffix: string): string {
  return `${suffix} | ${SITE_NAME}`;
}

export const SITE_DOMAIN = 'lariojapark.com';

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
} as const;

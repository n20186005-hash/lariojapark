// Registro de páginas temáticas independientes del Parque de la Ciudad de La Rioja.
// Cada entrada es una fuente de contenido verificable; las páginas no repiten la
// home y responden a una intención de búsqueda distinta.

export type TopicGroup =
  | 'visita'
  | 'parque'
  | 'planes'
  | 'comer'
  | 'alrededores'
  | 'itinerarios';

export type TopicPriority = 'A' | 'B' | 'C';

export interface TopicFact {
  term: string;
  detail: string;
}

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  lead: string;
  facts: TopicFact[];
  sections: TopicSection[];
  faqs: TopicFaq[];
}

export interface Topic {
  slug: string; // ruta sin barras: 'visita/horarios'
  group: TopicGroup;
  priority: TopicPriority;
  updated: string;
  related: string[];
  content: TopicContent;
}

export const GROUP_LABELS: Record<
  TopicGroup,
  { label: string; eyebrow: string }
> = {
  visita: { label: 'Visita y acceso', eyebrow: 'Cómo llegar y condiciones' },
  parque: { label: 'Dentro del parque', eyebrow: 'Qué hay en el predio' },
  planes: { label: 'Planes y temporadas', eyebrow: 'Según quién va y la época' },
  comer: { label: 'Comer y beber', eyebrow: 'Alrededores y centro' },
  alrededores: { label: 'Alrededores', eyebrow: 'Otros paseos en La Rioja' },
  itinerarios: { label: 'Itinerarios', eyebrow: 'Recorridos sugeridos' },
};

export const TOPICS: Topic[] = [
  // ===================== A · VISITA =====================
  {
    slug: 'visita/horarios',
    group: 'visita',
    priority: 'A',
    updated: '1 de noviembre de 2026',
    related: ['visita/entrada-precios', 'visita/mapa-accesos', 'parque/piletas-natatorio', 'parque/superdomo'],
    content: {
      metaTitle: 'Horarios del Parque de la Ciudad La Rioja: espacio verde y sectores',
      metaDescription:
        'Diferencia el horario del espacio verde del de las piletas, el Superdomo y los eventos. Consultá las condiciones por sector antes de ir.',
      kicker: 'Antes de salir',
      h1: 'Horarios del Parque de la Ciudad: el parque y cada sector',
      lead:
        'El horario de un espacio abierto no confirma el de una pileta, una visita guiada o un espectáculo. Esta página separa lo que Turismo de La Rioja describe como acceso libre del parque de lo que tiene reglas y horarios propios.',
      facts: [
        { term: 'Espacio verde', detail: 'Turismo provincial informa acceso libre y gratuito al aire libre.' },
        { term: 'Piletas', detail: 'Funcionan por temporada y con condiciones propias.' },
        { term: 'Superdomo', detail: 'Eventos y recorridos se consultan por separado.' },
        { term: 'Última verificación', detail: 'Ficha de Google Maps consultada el 23/10/2026; fuentes el 01/11/2026.' },
      ],
      sections: [
        {
          heading: 'El parque al aire libre',
          paragraphs: [
            'La presentación provincial ubica al Parque de la Ciudad como un espacio verde de más de 50 hectáreas con lago artificial, ciclovías, áreas de picnic y juegos. La ficha de Google Maps mostraba apertura las 24 horas al consultar el 23 de octubre de 2026: es una referencia del espacio general, no una garantía de acceso a cada sector ni a las instalaciones.',
            'Para una primera visita, supongamos que el predio se recorre en horario diurno y que cualquier instalación (baños, carteles, refugio) puede no estar habilitada de noche. Seguí los avisos y cierres del predio.',
          ],
        },
        {
          heading: 'Sectores con condiciones propias',
          bullets: [
            'Piletas: propuesta de temporada de verano. La ficha provincial del natatorio publica horarios y condiciones propios; verificá la temporada habilitada antes de ir a nadar.',
            'Superdomo: sede de actividades deportivas y culturales. Los eventos, recorridos y visitas guiadas se consultan por separado y no extienden el horario del parque al edificio.',
            'Eventos y ferias: pueden modificar la circulación y los accesos. Comprobá la agenda de tu fecha.',
          ],
        },
        {
          heading: 'Qué hacer si necesitás un horario exacto',
          paragraphs: [
            'No publicamos un cuadro de horarios fijo porque las condiciones cambian por sector y por fecha. Para una actividad concreta (natatorio o evento del Superdomo), confirmá la apertura, el horario y la puerta con la fuente indicada antes de viajar.',
          ],
          callout:
            'Separá siempre el paseo al aire libre de la actividad que necesitás reservar o confirmar. El pronóstico y esta guía no establecen cierres.',
        },
      ],
      faqs: [
        { q: '¿El parque está abierto las 24 horas?', a: 'La ficha de Google Maps mostraba apertura las 24 horas al consultar el 23/10/2026. Es una referencia del espacio general, no una garantía de acceso a cada sector. Piletas, servicios y Superdomo tienen condiciones propias.' },
        { q: '¿El horario del parque sirve para las piletas?', a: 'No. El natatorio es una propuesta de temporada de verano y publica horarios y reglas propias. Confirmá la temporada habilitada y el horario antes de organizar la visita para nadar.' },
        { q: '¿A qué hora cierra el Superdomo?', a: 'El Superdomo tiene su propia agenda de actividades y eventos. No asumas que cierra con el parque; consultá la propuesta vigente y el acceso para tu fecha.' },
      ],
    },
  },
  {
    slug: 'visita/entrada-precios',
    group: 'visita',
    priority: 'A',
    updated: '1 de noviembre de 2026',
    related: ['visita/horarios', 'parque/piletas-natatorio', 'parque/superdomo', 'visita/servicios-accesibilidad'],
    content: {
      metaTitle: 'Entrada al Parque de la Ciudad La Rioja: lo gratuito y lo que se paga aparte',
      metaDescription:
        'Turismo provincial informa acceso libre y gratuito al parque. Piletas, eventos y servicios tienen reglas y posibles cargos separados.',
      kicker: 'Costo de la visita',
      h1: 'Entrada y precios: el parque es gratuito, otros sectores no',
      lead:
        'La condición de acceso libre al aire libre no se extiende automáticamente a piletas, eventos o servicios. Esta página separa lo que Turismo de La Rioja describe como gratuito de lo que conviene confirmar por separado.',
      facts: [
        { term: 'Espacio verde', detail: 'Acceso libre y gratuito según Turismo provincial.' },
        { term: 'Piletas', detail: 'Temporada de verano; tarifa propia, confirmar.' },
        { term: 'Eventos', detail: 'Pueden tener entrada o cargo según la propuesta.' },
        { term: 'Estacionamiento', detail: 'Depende del sector y de los eventos; consultar.' },
      ],
      sections: [
        {
          heading: 'Lo que es gratuito',
          paragraphs: [
            'Turismo provincial presenta al Parque de la Ciudad como un espacio de acceso libre y gratuito al aire libre. Eso cubre el paseo por los sectores habilitados: césped, senderos, ciclovías, miradores y áreas de descanso, dentro de lo que cada puerta permita.',
          ],
        },
        {
          heading: 'Lo que se paga o confirma aparte',
          bullets: [
            'Piletas del natatorio: propuesta de verano con reglas y tarifa propias. La ficha provincial del natatorio es la fuente a consultar para el valor actual.',
            'Eventos y espectáculos en el Superdomo o el predio: pueden tener entrada o cargo según la propuesta y la fecha.',
            'Estacionamiento: no hemos verificado un valor fijo; en eventos la circulación y los espacios pueden cambiar.',
          ],
        },
        {
          heading: 'Cómo evitar sorpresas',
          paragraphs: [
            'No tratamos el parque como un producto con un precio único porque las condiciones difieren por sector. Para una actividad concreta, confirmá el costo actual con el responsable antes de viajar; las fechas de las fuentes están en esta página.',
          ],
          callout: 'El acceso libre al aire libre no garantiza que cada instalación esté abierta ni que sea sin cargo.',
        },
      ],
      faqs: [
        { q: '¿Cuánto cuesta entrar al parque?', a: 'Turismo provincial informa acceso libre y gratuito al espacio verde al aire libre. No cobramos ni publicamos un valor de entrada general porque lo confirma la autoridad turística, no esta guía.' },
        { q: '¿Las piletas son gratis?', a: 'No necesariamente. El natatorio es de temporada y publica condiciones y tarifa propias. Verificá la temporada habilitada y el precio en la ficha provincial antes de ir.' },
        { q: '¿El estacionamiento tiene costo?', a: 'No hemos verificado un valor fijo de estacionamiento; puede depender del sector y de los eventos. Consultalo para tu fecha y tu puerta de ingreso.' },
      ],
    },
  },
  {
    slug: 'visita/como-llegar',
    group: 'visita',
    priority: 'A',
    updated: '1 de noviembre de 2026',
    related: ['visita/colectivo-tns', 'visita/estacionamiento', 'visita/mapa-accesos', 'planes/sin-auto'],
    content: {
      metaTitle: 'Cómo llegar al Parque de la Ciudad La Rioja: auto, taxi y transporte',
      metaDescription:
        'El parque queda en Avenida Circunvalación S/N. Guía de auto, taxi, remis y transporte público, con la puerta útil según el sector.',
      kicker: 'Dirección y mapa',
      h1: 'Cómo llegar al Parque de la Ciudad',
      lead:
        'El parque está en La Rioja Capital, sobre Avenida Circunvalación S/N. La puerta útil depende del sector que vayas a usar y de los eventos del día, así que conviene ubicar el acceso antes de salir.',
      facts: [
        { term: 'Dirección', detail: 'Avenida Circunvalación S/N, F5300 La Rioja.' },
        { term: 'Accesos', detail: 'Circunvalación y Ruta Provincial 75 (según Turismo).' },
        { term: 'Coordenadas', detail: '-29.439496, -66.898749 (punto de referencia).' },
        { term: 'Desde el centro', detail: 'Corto trayecto en auto, taxi o colectivo.' },
      ],
      sections: [
        {
          heading: 'En auto o moto',
          paragraphs: [
            'Calculá el trayecto desde tu origen real. Turismo provincial sitúa el acceso en Circunvalación y Ruta Provincial 75. Seguí la señalización y los accesos autorizados, y preguntá dónde se permite estacionar antes de dejar el vehículo.',
          ],
        },
        {
          heading: 'Taxi o remis',
          paragraphs: [
            'Indicá el parque y, si podés, el sector que vas a usar (mirador, piletas o Superdomo). Confirmá la puerta, la tarifa y el punto de regreso con el conductor; no usamos un tiempo de viaje fijo porque depende del tránsito y de la puerta.',
          ],
        },
        {
          heading: 'Transporte público',
          paragraphs: [
            'Consultá recorridos, paradas y frecuencias vigentes con el operador antes de viajar. Un circuito turístico que pasa por el parque no garantiza un servicio regular de ida y vuelta con horario conocido.',
          ],
        },
        {
          heading: 'Mapa de referencia',
          paragraphs: [
            'El punto del mapa identifica el parque, pero no confirma una entrada habilitada. Usalo como referencia y confirmá el acceso habilitado para tu actividad.',
          ],
          callout: 'El punto del mapa no es una puerta garantizada. Confirmá el acceso según el sector y los eventos del día.',
        },
      ],
      faqs: [
        { q: '¿Dónde queda el Parque de la Ciudad?', a: 'En La Rioja Capital, Argentina, sobre Avenida Circunvalación S/N. Turismo provincial ubica el acceso por Circunvalación y Ruta Provincial 75.' },
        { q: '¿Puedo ir en transporte público?', a: 'Sí, pero confirmá recorridos, paradas y frecuencias vigentes con el operador. Un recorrido turístico no reemplaza un servicio regular de ida y vuelta.' },
        { q: '¿El punto de Google Maps es la entrada?', a: 'No. El punto identifica el parque; no confirma una puerta habilitada. Confirmá el acceso para tu sector antes de viajar.' },
      ],
    },
  },
  {
    slug: 'visita/colectivo-tns',
    group: 'visita',
    priority: 'A',
    updated: '1 de noviembre de 2026',
    related: ['visita/como-llegar', 'planes/sin-auto', 'parque/superdomo', 'visita/estacionamiento'],
    content: {
      metaTitle: 'Colectivo al Parque de la Ciudad La Rioja: líneas TNS y parada Superdomo',
      metaDescription:
        'Guía de transporte público al parque con la parada Superdomo. Confirmá recorridos y frecuencias vigentes con el operador antes de viajar.',
      kicker: 'Transporte público',
      h1: 'Colectivo al Parque de la Ciudad: líneas y parada',
      lead:
        'El parque es alcanzable en transporte público y una de las referencias conocidas es la parada Superdomo. Como las frecuencias y recorridos cambian, conviene confirmar la información vigente con el operador antes de viajar.',
      facts: [
        { term: 'Parada de referencia', detail: 'Estación/parada Superdomo en los recorridos que la incluyen.' },
        { term: 'Operador', detail: 'Red TNS de La Rioja; confirmar líneas vigentes.' },
        { term: 'Ida y vuelta', detail: 'Verificar frecuencia de regreso, no solo de venida.' },
        { term: 'Fuente', detail: 'Aviso de recorridos (ej. Moovit) y operador local.' },
      ],
      sections: [
        {
          heading: 'Por qué confirmar con el operador',
          paragraphs: [
            'La información de recorridos y paradas se actualiza y puede variar por horario, por obra o por evento. Una guía externa de transporte (como Moovit) muestra la parada Superdomo como referencia, pero el dato definitivo es el del operador TNS para tu día.',
          ],
        },
        {
          heading: 'Cómo planear la ida y la vuelta',
          bullets: [
            'Buscá el recorrido que deje cerca de la puerta que vas a usar (no todas las puertas quedan igual de cerca de la parada).',
            'Anotá la frecuencia de regreso, no solo la de venida: el parque queda algo alejado del centro y de noche el servicio puede ser menor.',
            'Si venís por una actividad del Superdomo, sumá el horario del evento al de los colectivos para no quedar sin opción de vuelta.',
          ],
        },
        {
          heading: 'Desde la parada al parque',
          paragraphs: [
            'La parada Superdomo es una referencia útil, pero el predio es extenso: el acceso que necesitás puede quedar a varias cuadras. Tené el punto del mapa a mano y confirmá el acceso habilitado.',
          ],
          callout: 'No uses un recorrido como garantía de vuelta automática: verificá la frecuencia de regreso para tu fecha.',
        },
      ],
      faqs: [
        { q: '¿Qué colectivo pasa por el Parque de la Ciudad?', a: 'La referencia conocida es la parada Superdomo dentro de la red TNS. Las líneas vigentes y las paradas exactas debés confirmarlas con el operador antes de viajar.' },
        { q: '¿El colectivo deja en la entrada?', a: 'El parque es extenso; la parada puede quedar a varias cuadras del acceso que necesitás. Confirmá la puerta habilitada y el recorrido más cercano.' },
        { q: '¿Hay colectivo de regreso de noche?', a: 'Depende del horario y del día. Verificá la frecuencia de vuelta con el operador; si venís a un evento, sumalo al horario del colectivo.' },
      ],
    },
  },
  {
    slug: 'visita/estacionamiento',
    group: 'visita',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['visita/como-llegar', 'visita/mapa-accesos', 'parque/eventos-ferias', 'visita/servicios-accesibilidad'],
    content: {
      metaTitle: 'Estacionamiento en el Parque de la Ciudad La Rioja: dónde dejar el auto',
      metaDescription:
        'El parque es extenso y el estacionamiento depende del sector y de los eventos. Consejos para dejar el auto y volver sin perder la referencia.',
      kicker: 'En vehículo',
      h1: 'Estacionamiento en el Parque de la Ciudad',
      lead:
        'No hemos verificado un esquema fijo de estacionamiento ni un valor garantizado. Por eso esta página se enfoca en cómo ubicar dónde dejar el auto según la puerta que uses y en qué cambia cuando hay eventos.',
      facts: [
        { term: 'Valor', detail: 'No verificado; puede variar por sector y evento.' },
        { term: 'Puerta', detail: 'Elegí el acceso según lo que vayas a hacer.' },
        { term: 'Eventos', detail: 'Pueden modificar circulación y espacios.' },
        { term: 'Recomendación', detail: 'Marcá el punto de regreso en el mapa.' },
      ],
      sections: [
        {
          heading: 'Elegí el acceso según tu plan',
          paragraphs: [
            'El predio es grande y las puertas no quedan equidistantes de todo. Si vas a las piletas, al Superdomo o al mirador, conviene identificar la puerta más cercana antes de salir para estacionar cerca y no cruzar el parque bajo el sol.',
          ],
        },
        {
          heading: 'En día de evento o feria',
          bullets: [
            'La circulación y los espacios de estacionamiento pueden cambiar; llegá con tiempo.',
            'Preguntá dónde se permite estacionar y evitá recorridos o banquinas expuestas.',
            'Considerá dejar el auto un poco más lejos y caminar, si el acceso cercano se satura.',
          ],
        },
        {
          heading: 'No perder la referencia',
          paragraphs: [
            'Marca el punto donde dejaste el vehículo en el mapa y anotá la puerta. El parque se parece en varios tramos y es fácil confundir el regreso, sobre todo si entraste por una calle que no conocés.',
          ],
          callout: 'No asumimos un estacionamiento habilitado ni gratuito: confirmalo para tu fecha y tu puerta.',
        },
      ],
      faqs: [
        { q: '¿Hay estacionamiento en el parque?', a: 'El parque es extenso y suele tener espacios para dejar el auto, pero no verificamos un esquema ni un valor fijo. Elegí la puerta según tu plan y confirmá dónde se permite estacionar.' },
        { q: '¿El estacionamiento es gratis?', a: 'No hemos verificado un valor garantizado; puede depender del sector y de los eventos. Consultalo para tu fecha.' },
        { q: '¿Dónde estaciono para un evento?', a: 'Los eventos pueden modificar la circulación. Llegá con tiempo, preguntá dónde se permite estacionar y marcá el punto de regreso en el mapa.' },
      ],
    },
  },
  {
    slug: 'visita/mapa-accesos',
    group: 'visita',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['visita/como-llegar', 'visita/estacionamiento', 'parque/que-hacer', 'parque/mirador-del-lago'],
    content: {
      metaTitle: 'Mapa del Parque de la Ciudad La Rioja: entradas y sectores',
      metaDescription:
        'Punto de referencia, sectores habilitados y cómo orientarte en el predio. El mapa no confirma una entrada habilitada.',
      kicker: 'Orientación',
      h1: 'Mapa y accesos del Parque de la Ciudad',
      lead:
        'El parque es un predio de más de 50 hectáreas con lago, senderos y sectores. Esta página ayuda a ubicar el punto de referencia y a entender que el mapa no garantiza una entrada habilitada.',
      facts: [
        { term: 'Punto', detail: '-29.439496, -66.898749 (referencia).' },
        { term: 'Accesos', detail: 'Circunvalación y RP 75 (según Turismo).' },
        { term: 'Sectores', detail: 'Lago, ciclovías, picnic, juegos, piletas, Superdomo.' },
        { term: 'Advertencia', detail: 'El mapa no confirma puerta habilitada.' },
      ],
      sections: [
        {
          heading: 'El punto de referencia',
          paragraphs: [
            'El mapa de abajo marca la ubicación general del parque. Usalo para planear el viaje y compartir la referencia, pero no como confirmación de que ahí hay una entrada abierta en tu fecha.',
          ],
        },
        {
          heading: 'Sectores a tener en cuenta',
          bullets: [
            'Lago artificial y mirador: la provincia destaca el atardecer desde el mirador.',
            'Piletas: sector de temporada, con acceso y reglas propias.',
            'Superdomo: edificio de actividades, con entrada y agenda separadas.',
            'Ciclovías, picnic y juegos: distribuidos en el predio habilitado.',
          ],
        },
        {
          heading: 'Cómo no perderte',
          paragraphs: [
            'Antes de entrar, fijate qué sector querés y por qué puerta queda más cerca. El predio es grande y varias calles lo rodean; elegir bien la puerta acorta la caminata y evita cruzar bajo el sol.',
          ],
          callout: 'El punto del mapa identifica el parque, no una entrada garantizada. Confirmá el acceso habilitado.',
        },
      ],
      faqs: [
        { q: '¿Dónde está el parque en el mapa?', a: 'En Avenida Circunvalación S/N, con punto de referencia en -29.439496, -66.898749. Turismo provincial ubica el acceso por Circunvalación y Ruta Provincial 75.' },
        { q: '¿El mapa muestra la entrada?', a: 'No. El punto identifica el parque, pero no confirma una puerta habilitada. Confirmá el acceso para tu sector y tu fecha.' },
        { q: '¿Cómo sé qué puerta usar?', a: 'Elegí la puerta según el sector que vayas a visitar (mirador, piletas o Superdomo) y marcala en el mapa antes de entrar.' },
      ],
    },
  },
  {
    slug: 'visita/servicios-accesibilidad',
    group: 'visita',
    priority: 'C',
    updated: '1 de noviembre de 2026',
    related: ['planes/con-bebes', 'planes/adultos-mayores', 'parque/juegos-infantiles', 'visita/entrada-precios'],
    content: {
      metaTitle: 'Baños y accesibilidad en el Parque de la Ciudad La Rioja',
      metaDescription:
        'Qué sabemos de baños y recorridos accesibles. No verificamos una ruta accesible continua ni disponibilidad garantizada.',
      kicker: 'Servicios',
      h1: 'Baños y accesibilidad en el parque',
      lead:
        'La disponibilidad de baños, estacionamiento y accesos sin escalones puede depender del sector y de su apertura. Si necesitás asistencia o un recorrido accesible, conviene confirmarlo antes.',
      facts: [
        { term: 'Baños', detail: 'Disponibilidad según sector y apertura.' },
        { term: 'Accesibilidad', detail: 'No verificada como ruta continua.' },
        { term: 'Asistencia', detail: 'Confirmar con el sector que visitás.' },
        { term: 'Recomendación', detail: 'Consultar antes de viajar.' },
      ],
      sections: [
        {
          heading: 'Lo que puede variar',
          paragraphs: [
            'Una descripción general del parque no garantiza cada recorrido. Los baños, la sombra y los accesos sin escalones suelen concentrarse en las áreas más habilitadas, y pueden no estar disponibles en todo el predio ni en todos los horarios.',
          ],
        },
        {
          heading: 'Si viajás con niños pequeños o movilidad reducida',
          bullets: [
            'Confirmá dónde hay baño accesible y recorrido sin escalones para el sector que vas a usar.',
            'Preguntá por asistencia o lugar reservado si lo necesitás.',
            'No asumas que todo el predio es transitable en silla de ruedas: el parque es extenso y con desniveles.',
          ],
        },
        {
          heading: 'Nuestra verificación',
          paragraphs: [
            'No hemos comprobado una ruta accesible continua ni una disponibilidad garantizada de estacionamiento y baños. Por eso no prometemos estos servicios: recomendamos confirmarlos para tu fecha y tu puerta.',
          ],
          callout: 'No verificamos una ruta accesible continua. Confirmá baños y accesos para el sector que visitás.',
        },
      ],
      faqs: [
        { q: '¿Hay baños en el parque?', a: 'Puede haberlos en las áreas más habilitadas, pero su disponibilidad depende del sector y de la apertura. Confirmalo para tu visita.' },
        { q: '¿El parque es accesible en silla de ruedas?', a: 'No verificamos una ruta accesible continua. El predio es extenso y con desniveles; confirmá los accesos sin escalones del sector que vayas a usar.' },
        { q: '¿Hay estacionamiento para discapacitados?', a: 'No hemos verificado lugares garantizados. Preguntalo para tu fecha y tu puerta de ingreso.' },
      ],
    },
  },
  {
    slug: 'parque/que-hacer',
    group: 'parque',
    priority: 'A',
    updated: '1 de noviembre de 2026',
    related: ['parque/mirador-del-lago', 'parque/piletas-natatorio', 'parque/superdomo', 'parque/juegos-infantiles'],
    content: {
      metaTitle: 'Qué hacer en el Parque de la Ciudad La Rioja: lago, ciclovías y más',
      metaDescription:
        'Opciones dentro del parque: lago y mirador, ciclovías, picnic, juegos y Superdomo. Elegí sectores habilitados y confirmá la agenda.',
      kicker: 'Dentro del predio',
      h1: 'Qué hacer en el Parque de la Ciudad',
      lead:
        'La información turística provincial reúne espacio verde, lago artificial, ciclovías, áreas de picnic, juegos y el Superdomo. Esta página organiza esas opciones para una primera visita, sin prometer servicios abiertos.',
      facts: [
        { term: 'Lago', detail: 'Espejo de agua con mirador; no es zona de baño.' },
        { term: 'Ciclovías', detail: 'Recorridos dentro del predio.' },
        { term: 'Picnic', detail: 'Áreas de descanso; retirar residuos.' },
        { term: 'Superdomo', detail: 'Actividades deportivas y culturales.' },
      ],
      sections: [
        {
          heading: 'Un paseo urbano con opciones',
          paragraphs: [
            'Para una primera visita, elegí un recorrido corto entre sectores habilitados, una pausa y el regreso por un acceso que puedas reconocer. Es una sugerencia de organización, no un circuito señalizado ni una promesa de servicios abiertos.',
          ],
        },
        {
          heading: 'Opciones según el ritmo',
          bullets: [
            'Caminar o andar en bicicleta por las ciclovías y senderos habilitados.',
            'Mirar el lago y el atardecer desde el mirador (la provincia lo destaca).',
            'Compartir un picnic o un mate en las áreas de descanso, retirando lo que llevás.',
            'Llevar a los chicos a los juegos habilitados, supervisándolos cerca del agua.',
            'Consultar la agenda del Superdomo para una visita guiada o un evento.',
          ],
        },
        {
          heading: 'Orden de prioridades',
          paragraphs: [
            'Si venís por una actividad concreta (natatorio o evento), confirmala primero y después sumá el paseo si las condiciones lo permiten. El clima riojano es fuerte: ajustá el recorrido al calor y al viento.',
          ],
          callout: 'Separá el paseo al aire libre de la actividad que necesitás reservar o confirmar.',
        },
      ],
      faqs: [
        { q: '¿Qué se puede hacer en el parque?', a: 'La información provincial menciona paseos, lago artificial, ciclovías, áreas de picnic, juegos y el Superdomo. Elegí sectores habilitados y comprobá la agenda si buscás una feria o actividad organizada.' },
        { q: '¿Se puede bañar en el lago?', a: 'No uses el lago ni otros espacios de agua como zona de baño. El baño habilitado es el del natatorio de temporada; confirmá su apertura y reglas.' },
        { q: '¿Cuánto tiempo lleva recorrerlo?', a: 'Depende de qué sectores uses. Una vuelta corta puede ser de cerca de una hora como orientación; ajustala a la movilidad del grupo y al clima.' },
      ],
    },
  },
  {
    slug: 'parque/mirador-del-lago',
    group: 'parque',
    priority: 'A',
    updated: '1 de noviembre de 2026',
    related: ['parque/que-hacer', 'planes/fotografia-atardecer', 'parque/mapa-accesos', 'planes/verano-calor'],
    content: {
      metaTitle: 'Mirador del lago en el Parque de la Ciudad La Rioja: atardecer y fotos',
      metaDescription:
        'El portal provincial destaca el mirador para el atardecer. Cómo llegar, mejor momento y qué confirmar antes de subir o quedarse hasta tarde.',
      kicker: 'Lago y mirador',
      h1: 'Mirador del lago del Parque de la Ciudad',
      lead:
        'El portal turístico provincial destaca el mirador del parque para mirar el atardecer hacia las sierras. Es uno de los puntos más mencionados del predio, pero conviene confirmar el recorrido habilitado y el regreso.',
      facts: [
        { term: 'Qué es', detail: 'Mirador sobre el lago artificial.' },
        { term: 'Mejor momento', detail: 'Atardecer, según Turismo provincial.' },
        { term: 'Acceso', detail: 'Recorrido habilitado; confirmar.' },
        { term: 'Regreso', detail: 'Visibilidad y transporte.' },
      ],
      sections: [
        {
          heading: 'Por qué es conocido',
          paragraphs: [
            'La provincia presenta al mirador como un lugar para el atardecer, con las sierras de fondo. Por eso es una parada frecuente dentro del parque y una de las fotos más buscadas por quienes lo visitan.',
          ],
        },
        {
          heading: 'Cómo llegar y volver',
          bullets: [
            'Ubicá el acceso más cercano al mirador antes de entrar, para no cruzar todo el predio con el sol bajo.',
            'Comprobá el recorrido habilitado: no asumimos iluminación continua ni transporte disponible a cualquier hora.',
            'Si vas a quedar hasta tarde, definí el punto de regreso y el medio de transporte antes de subir.',
          ],
        },
        {
          heading: 'Antes de subir',
          paragraphs: [
            'El mirador comparte el predio con el resto del parque, así que su acceso depende de qué puertas estén habilitadas ese día. Confirmá y, si el clima cierra, priorizá el regreso seguro.',
          ],
          callout: 'No asumimos iluminación continua ni transporte disponible a cualquier hora para el regreso.',
        },
      ],
      faqs: [
        { q: '¿Dónde está el mirador del parque?', a: 'Sobre el lago artificial, dentro del predio de más de 50 hectáreas. Ubicalo en el mapa y confirmá el recorrido habilitado antes de entrar.' },
        { q: '¿Cuál es el mejor horario?', a: 'El portal provincial destaca el atardecer. Comprobá la visibilidad y el regreso; no asumimos iluminación ni transporte a cualquier hora.' },
        { q: '¿El mirador y el Superdomo comparten acceso?', a: 'No conviene asumirlo. Consultá los sectores habilitados y la puerta indicada para tu visita o evento.' },
      ],
    },
  },
  {
    slug: 'parque/piletas-natatorio',
    group: 'parque',
    priority: 'A',
    updated: '1 de noviembre de 2026',
    related: ['visita/entrada-precios', 'visita/horarios', 'planes/verano-calor', 'parque/que-hacer'],
    content: {
      metaTitle: 'Piletas del Parque de la Ciudad La Rioja: temporada, reglas y costo',
      metaDescription:
        'El natatorio es de temporada de verano. Fuentes provinciales difieren en horarios; confirmá apertura, precio y reglas antes de viajar.',
      kicker: 'Natatorio de temporada',
      h1: 'Piletas del Parque de la Ciudad',
      lead:
        'Las piletas son una propuesta de temporada de verano, distinta del acceso libre al parque. Las fuentes provinciales muestran información no del todo coincidente, por eso marcamos las fechas y recomendamos confirmar.',
      facts: [
        { term: 'Temporada', detail: 'Verano; verificar apertura.' },
        { term: 'Fuente 1', detail: 'Ficha del natatorio: días y horarios propios.' },
        { term: 'Fuente 2', detail: 'Otra ficha: diciembre a marzo, diario.' },
        { term: 'Reglas', detail: 'Traje de baño; sin alcohol.' },
      ],
      sections: [
        {
          heading: 'Información no coincidente',
          paragraphs: [
            'Una página provincial del natatorio lista días y horarios propios, mientras otra describe la apertura de diciembre a marzo todos los días. Esas fuentes no coinciden en el detalle, así que no publicamos un horario único: anotamos las fechas y recomendamos confirmar con la fuente vigente antes de viajar para nadar.',
          ],
        },
        {
          heading: 'Reglas que sí se mencionan',
          bullets: [
            'La ficha provincial del natatorio exige traje de baño.',
            'Prohíbe consumir alcohol en el sector.',
            'No uses el lago ni otros espacios de agua como zona de baño.',
          ],
        },
        {
          heading: 'Cómo confirmar',
          paragraphs: [
            'Para tu fecha, verificá la temporada habilitada, el precio actual y las reglas de ingreso con la fuente provincial (ficha del natatorio) o con el responsable del sector. La descripción del verano no equivale a confirmación de que funciona hoy.',
          ],
          callout: 'Las fuentes provinciales difieren en horarios del natatorio; confirmá apertura y precio antes de viajar.',
        },
      ],
      faqs: [
        { q: '¿Las piletas funcionan todo el año?', a: 'Son de temporada de verano. Una ficha provincial publica horarios propios y otra describe diciembre a marzo diario; no coinciden. Verificá la temporada habilitada antes de viajar.' },
        { q: '¿Cuánto cuestan las piletas?', a: 'El natatorio publica condiciones y tarifa propias. Confirmá el valor actual en la ficha provincial o con el sector antes de ir.' },
        { q: '¿Se puede entrar al lago?', a: 'No uses el lago ni otros espacios de agua como zona de baño. El baño habilitado es el del natatorio de temporada, con sus reglas.' },
      ],
    },
  },
  {
    slug: 'parque/superdomo',
    group: 'parque',
    priority: 'A',
    updated: '1 de noviembre de 2026',
    related: ['parque/que-hacer', 'visita/horarios', 'comer/cena-superdomo', 'visita/colectivo-tns'],
    content: {
      metaTitle: 'Superdomo La Rioja: qué es, visitas y eventos en el parque',
      metaDescription:
        'El Superdomo es parte del conjunto del parque con actividad deportiva y cultural propia. Su acceso y agenda se consultan por separado.',
      kicker: 'Dentro del parque',
      h1: 'Superdomo de La Rioja',
      lead:
        'El Superdomo forma parte del conjunto del Parque de la Ciudad y tiene su propia actividad deportiva y cultural. Por eso su horario y su entrada no se extienden del horario del parque.',
      facts: [
        { term: 'Qué es', detail: 'Edificio de actividades deportivas y culturales.' },
        { term: 'Acceso', detail: 'Entrada y agenda separadas del parque.' },
        { term: 'Eventos', detail: 'Feria, espectáculo o visita guiada según fecha.' },
        { term: 'Parada', detail: 'Referencia de transporte público cercana.' },
      ],
      sections: [
        {
          heading: 'Parte del parque, pero con agenda propia',
          paragraphs: [
            'Turismo provincial publica una propuesta de visitas guiadas al Superdomo. Eso significa que el edificio se recorre en sus propios términos y no como una esquina más del paseo libre.',
          ],
        },
        {
          heading: 'Cómo visitarlo',
          bullets: [
            'Consultá la propuesta vigente y el acceso para tu fecha antes de ir.',
            'Si vas a un evento, confirmá horario, entrada y puerta; el parque puede tener circulación modificada.',
            'En transporte público, la parada Superdomo es una referencia útil, pero el acceso que necesitás puede quedar a un tramo.',
          ],
        },
        {
          heading: 'No confundir accesos',
          paragraphs: [
            'El Superdomo y el mirador no comparten necesariamente la misma puerta. Confirmá el sector habilitado para tu visita y marcá el punto de regreso.',
          ],
          callout: 'El horario y la entrada del Superdomo se consultan por separado; no se extienden del parque.',
        },
      ],
      faqs: [
        { q: '¿Qué es el Superdomo?', a: 'Un edificio dentro del Parque de la Ciudad con actividad deportiva y cultural propia. Turismo provincial publica visitas guiadas; comprobá su vigencia para tu fecha.' },
        { q: '¿El Superdomo tiene el mismo horario que el parque?', a: 'No. Su horario y entrada se consultan por separado y no se extienden del horario del parque al aire libre.' },
        { q: '¿Se puede ir al Superdomo en colectivo?', a: 'La parada Superdomo es una referencia conocida en la red TNS, pero confirmá la línea vigente y que el acceso que necesitás queda cerca.' },
      ],
    },
  },
  {
    slug: 'parque/eventos-ferias',
    group: 'parque',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['parque/superdomo', 'visita/estacionamiento', 'comer/ferias-gastronomicas', 'parque/que-hacer'],
    content: {
      metaTitle: 'Eventos y ferias en el Parque de la Ciudad La Rioja',
      metaDescription:
        'Los eventos pueden modificar la circulación y los accesos. Cómo consultar la agenda vigente y preparar la visita.',
      kicker: 'Agenda del predio',
      h1: 'Eventos y ferias en el Parque de la Ciudad',
      lead:
        'El parque y el Superdomo son escenario de actividades. Cuando hay un evento, la circulación y los accesos pueden cambiar, por eso conviene consultar la agenda antes de viajar.',
      facts: [
        { term: 'Impacto', detail: 'Puede modificar circulación y accesos.' },
        { term: 'Fuente', detail: 'Agenda oficial y avisos del día.' },
        { term: 'Fechas', detail: 'No publicamos cartel fijo.' },
        { term: 'Consejo', detail: 'Llegar con tiempo y marcar el regreso.' },
      ],
      sections: [
        {
          heading: 'Por qué consultar la agenda',
          paragraphs: [
            'No mantenemos un cartel de eventos propio porque las fechas cambian y no las confirmamos nosotros. La agenda oficial y los avisos del día son la fuente a revisar para saber si hay una feria, un espectáculo o una visita guiada.',
          ],
        },
        {
          heading: 'Si vas a un evento',
          bullets: [
            'Confirmá horario, entrada y puerta del evento antes de salir.',
            'Llegá con tiempo: el estacionamiento y la circulación pueden estar modificados.',
            'Sumá el horario del evento al de tu transporte de vuelta.',
          ],
        },
        {
          heading: 'Si vas a pasear',
          paragraphs: [
            'En día de evento, elegí sectores que no queden atravesados por la actividad y marcá el punto de regreso. El clima riojano es fuerte, así que una pausa con sombra ayuda.',
          ],
          callout: 'Los eventos pueden modificar la circulación; consultá la agenda y llegá con tiempo.',
        },
      ],
      faqs: [
        { q: '¿Hay eventos en el parque hoy?', a: 'No publicamos un cartel propio de fechas. Consultá la agenda oficial y los avisos del día para tu fecha; un evento puede modificar la circulación y los accesos.' },
        { q: '¿Dónde se hacen las ferias?', a: 'Depende del evento y de la habilitación del día. Confirmá el sector y la puerta antes de viajar; el predio es extenso.' },
        { q: '¿El evento cambia el estacionamiento?', a: 'Puede modificar la circulación y los espacios. Llegá con tiempo y preguntá dónde se permite estacionar.' },
      ],
    },
  },
  {
    slug: 'parque/ciclovias',
    group: 'parque',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['parque/que-hacer', 'parque/caminatas', 'planes/running', 'visita/mapa-accesos'],
    content: {
      metaTitle: 'Ciclovías del Parque de la Ciudad La Rioja: dónde andar en bici',
      metaDescription:
        'El parque tiene ciclovías dentro del predio. Consejos de recorrido, precauciones y cómo combinarlas con la caminata.',
      kicker: 'En bicicleta',
      h1: 'Ciclovías del Parque de la Ciudad',
      lead:
        'La presentación provincial incluye ciclovías como parte del parque. Son una forma de recorrer el predio sin el esfuerzo de la caminata, pero conviene conocer los límites y precauciones.',
      facts: [
        { term: 'Dónde', detail: 'Recorridos dentro del predio habilitado.' },
        { term: 'Uso', detail: 'Paseo y ejercicio.' },
        { term: 'Precaución', detail: 'Compartir con peatones y sol.' },
        { term: 'Límite', detail: 'No es ruta de larga distancia señalizada.' },
      ],
      sections: [
        {
          heading: 'Cómo aprovecharlas',
          paragraphs: [
            'Las ciclovías permiten recorrer el predio a otro ritmo y sumarlas a una caminata corta. No las presentamos como una ruta de larga distancia señalizada ni como una prueba de servicios abiertos.',
          ],
        },
        {
          heading: 'Precauciones',
          bullets: [
            'Andá a velocidad moderada y compartí el espacio con peatones y chicos.',
            'Llevá agua y protección solar: el sol riojano es fuerte y el recorrido puede no tener sombra continua.',
            'No dejes la bicicleta sin vigilancia ni en lugares que bloqueen el paso.',
          ],
        },
        {
          heading: 'Bici y transporte',
          paragraphs: [
            'Si venís en colectivo o auto, confirmá si podés ingresar la bicicleta o dónde dejarla. No asumimos un punto de guarda habilitado.',
          ],
          callout: 'Las ciclovías son para el predio habilitado; ajustalas al calor y compartí el espacio con peatones.',
        },
      ],
      faqs: [
        { q: '¿Se puede andar en bici en el parque?', a: 'Sí, la provincia incluye ciclovías en el predio. Andá a velocidad moderada y compartí el espacio con peatones; no es una ruta señalizada de larga distancia.' },
        { q: '¿Hay alquiler de bicicletas?', a: 'No confirmamos un servicio de alquiler habilitado en el parque. Si lo hubiera, dependería del día y del operador; mejor confirmarlo en el lugar.' },
        { q: '¿Las ciclovías tienen sombra?', a: 'No asumimos sombra continua. Llevá agua y protección solar y ajustá el recorrido al calor.' },
      ],
    },
  },
  {
    slug: 'parque/caminatas',
    group: 'parque',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['parque/ciclovias', 'planes/running', 'parque/que-hacer', 'planes/adultos-mayores'],
    content: {
      metaTitle: 'Caminar en el Parque de la Ciudad La Rioja: rutas cortas y largas',
      metaDescription:
        'Sugerencias de caminata dentro del predio: recorrido corto, pausas y regreso. Ajustá la duración al clima y a la movilidad.',
      kicker: 'A pie',
      h1: 'Caminatas en el Parque de la Ciudad',
      lead:
        'El parque es grande y permite caminatas de distintos niveles. Esta página propone cómo organizar la vuelta sin prometer un circuito señalizado.',
      facts: [
        { term: 'Recorrido corto', detail: 'Cerca de 1 hora como orientación.' },
        { term: 'Recorrido largo', detail: 'Depende del predio habilitado.' },
        { term: 'Pausas', detail: 'Sombra y agua.' },
        { term: 'Regreso', detail: 'Marca la puerta usada.' },
      ],
      sections: [
        {
          heading: 'Una caminata corta',
          paragraphs: [
            'Reservá alrededor de una hora como orientación personal: un sector habilitado, una pausa y el regreso por una puerta que reconozcas. Ajustá la duración a la movilidad del grupo y al clima.',
          ],
        },
        {
          heading: 'Una caminata más larga',
          bullets: [
            'Podés recorrer varios sectores si están habilitados y el día acompaña.',
            'Hacé pausas frecuentes y llevá agua; el calor riojano sube rápido.',
            'Elegí la puerta de ida y de vuelta cerca de lo que querés ver para no repetir tramos bajo el sol.',
          ],
        },
        {
          heading: 'Seguridad y clima',
          paragraphs: [
            'No caminamos expuestos si hay tormenta ni con calor extremo sin sombra. El pronóstico de esta guía es información de modelo, no un aviso oficial; seguí los avisos locales.',
          ],
          callout: 'Ajustá la caminata al calor, al viento y a la movilidad; no es un circuito señalizado.',
        },
      ],
      faqs: [
        { q: '¿Cuánto se tarda en recorrer el parque?', a: 'Una vuelta corta puede ser de cerca de una hora como orientación. Ajustala a qué sectores uses, a la movilidad y al clima.' },
        { q: '¿Hay un sendero señalizado?', a: 'No presentamos un circuito señalizado ni una promesa de servicios abiertos. Elegí sectores habilitados y marcá el punto de regreso.' },
        { q: '¿Se puede correr?', a: 'Sí, dentro del predio habilitado y a tu ritmo. Ver páginas de ciclovías y running para precauciones.' },
      ],
    },
  },
  {
    slug: 'parque/picnic-mate',
    group: 'parque',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['parque/que-hacer', 'planes/con-ninos', 'planes/verano-calor', 'parque/juegos-infantiles'],
    content: {
      metaTitle: 'Picnic y mate en el Parque de la Ciudad La Rioja: dónde y qué llevar',
      metaDescription:
        'El parque tiene áreas de descanso para compartir un mate. Consejos de limpieza, sombra y agua potable.',
      kicker: 'Descanso',
      h1: 'Picnic y mate en el Parque de la Ciudad',
      lead:
        'Las áreas de descanso invitan a compartir un mate o un picnic. Esta página ayuda a elegir el lugar y a cuidar el predio, sin prometer servicios fijos.',
      facts: [
        { term: 'Áreas', detail: 'Espacios de descanso en el predio.' },
        { term: 'Agua', detail: 'No asumimos bebederos garantizados.' },
        { term: 'Sombra', detail: 'Buscá sectores con árboles.' },
        { term: 'Residuos', detail: 'Retirá lo que llevás.' },
      ],
      sections: [
        {
          heading: 'Cómo armar el picnic',
          paragraphs: [
            'Elegí un sector habilitado y con algo de sombra, sobre todo en verano. Llevá tu propia basura y retirala al salir: el cuidado del predio depende de cada visitante.',
          ],
        },
        {
          heading: 'Qué llevar',
          bullets: [
            'Agua suficiente para el grupo; el sol riojano es fuerte.',
            'Reposera o matilla, y protector solar.',
            'Bolsas para separar y retirar los residuos.',
            'Mate, termo y agua; cuidá que no moleste a quienes descansan cerca.',
          ],
        },
        {
          heading: 'Agua potable',
          paragraphs: [
            'No asumimos bebederos habilitados en todo el predio. Llevá el agua que necesitás y no dependas de encontrar un punto de recarga.',
          ],
          callout: 'No asumimos bebederos garantizados: llevá el agua del grupo y retirá tus residuos.',
        },
      ],
      faqs: [
        { q: '¿Se puede hacer picnic en el parque?', a: 'Sí, en las áreas de descanso habilitadas. Llevá tu basura y retirala al salir; no dependas de bebederos garantizados.' },
        { q: '¿Hay agua potable?', a: 'No asumimos bebederos habilitados en todo el predio. Llevá el agua del grupo, sobre todo con calor.' },
        { q: '¿Se puede hacer asado?', a: 'No confirmamos parrillas ni zonas habilitadas para fuego. Mejor no asumirlo y consultarlo en el lugar para cuidar el predio.' },
      ],
    },
  },
  {
    slug: 'parque/juegos-infantiles',
    group: 'parque',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['planes/con-ninos', 'planes/con-bebes', 'parque/picnic-mate', 'parque/que-hacer'],
    content: {
      metaTitle: 'Juegos infantiles en el Parque de la Ciudad La Rioja',
      metaDescription:
        'El parque tiene juegos para niños. Supervisión cerca del agua, sombra y descansos según el clima.',
      kicker: 'Para chicos',
      h1: 'Juegos infantiles del Parque de la Ciudad',
      lead:
        'La presentación provincial menciona juegos como parte del parque. Esta página aporta lo que conviene considerar si vas con niños, sin prometer instalaciones abiertas.',
      facts: [
        { term: 'Juegos', detail: 'Sectores habilitados para chicos.' },
        { term: 'Supervisión', detail: 'Cerca del agua y del tránsito.' },
        { term: 'Sombra', detail: 'Buscar y hacer pausas.' },
        { term: 'Edades', detail: 'Según el juego y el sector.' },
      ],
      sections: [
        {
          heading: 'Ir con chicos',
          paragraphs: [
            'Los juegos son un buen motivo para visitar, pero conviene ubicar los sectores habilitados y elegir el acceso más cercano para no caminar demasiado con los más chicos.',
          ],
        },
        {
          heading: 'Precauciones',
          bullets: [
            'Supervisá a los chicos cerca del lago y de la circulación vehicular o de bicicletas.',
            'Buscá sombra y hacé pausas con agua; el calor riojano es fuerte.',
            'No asumimos baño habilitado en el lago: el baño de temporada es el del natatorio.',
          ],
        },
        {
          heading: 'Qué llevar',
          paragraphs: [
            'Reponé agua, protector solar y un cambio si van a las piletas. Marcá el punto de regreso para no perder la referencia en un predio extenso.',
          ],
          callout: 'Supervisá a los chicos cerca del agua y del tránsito; no asumás baño habilitado en el lago.',
        },
      ],
      faqs: [
        { q: '¿Hay juegos para niños en el parque?', a: 'La provincia menciona juegos dentro del predio. Ubicalos en los sectores habilitados y elegí la puerta más cercana.' },
        { q: '¿Es seguro llevar bebés?', a: 'Consultá la página de visita con cochecito para sectores accesibles y sombra. No asumimos una ruta continua sin desniveles.' },
        { q: '¿Se puede bañar a los chicos en el lago?', a: 'No. El lago no es zona de baño; el baño habilitado es el natatorio de temporada, con reglas propias.' },
      ],
    },
  },
  // ===================== B · PLANES =====================
  {
    slug: 'planes/con-ninos',
    group: 'planes',
    priority: 'A',
    updated: '1 de noviembre de 2026',
    related: ['parque/juegos-infantiles', 'planes/con-bebes', 'parque/picnic-mate', 'planes/verano-calor'],
    content: {
      metaTitle: 'Parque de la Ciudad con niños: juegos, descansos y seguridad',
      metaDescription:
        'Visita en familia: juegos habilitados, baños, punto de encuentro y precaución cerca del agua. Ajustá el plan al calor.',
      kicker: 'En familia',
      h1: 'Visitar el Parque de la Ciudad con niños',
      lead:
        'El parque tiene juegos, espacio para correr y áreas de descanso, lo que lo hace apto para una salida en familia. Esta página aporta cómo organizarla sin prometer servicios fijos.',
      facts: [
        { term: 'Juegos', detail: 'Sectores habilitados para chicos.' },
        { term: 'Agua', detail: 'Supervisión cerca del lago y piletas.' },
        { term: 'Descanso', detail: 'Sombra y pausas con agua.' },
        { term: 'Encuentro', detail: 'Definí un punto de referencia.' },
      ],
      sections: [
        {
          heading: 'Organizar la salida',
          paragraphs: [
            'Elegí juegos habilitados, descansos y un punto de encuentro claro. Supervisá a los chicos cerca del agua y de la circulación; el predio es grande y fácil de confundir.',
          ],
        },
        {
          heading: 'Seguridad cerca del agua',
          bullets: [
            'No uses el lago como zona de baño; el baño habilitado es el natatorio de temporada.',
            'Si van a las piletas, confirmá apertura y reglas (traje de baño, sin alcohol).',
            'Mantené a los chicos a la vista cerca de cualquier espejo de agua.',
          ],
        },
        {
          heading: 'Ajustar al clima',
          paragraphs: [
            'El calor riojano es fuerte. Buscá sombra, repartí agua y hacé pausas. Si el día cierra con tormenta, priorizá el regreso seguro.',
          ],
          callout: 'Definí un punto de encuentro y supervisá a los chicos cerca del agua y del tránsito.',
        },
      ],
      faqs: [
        { q: '¿El parque es para ir con chicos?', a: 'Sí: tiene juegos, espacio para correr y áreas de descanso. Elegí los sectores habilitados y definí un punto de encuentro.' },
        { q: '¿Se puede bañar a los chicos en el lago?', a: 'No. El lago no es zona de baño; el baño habilitado es el natatorio de temporada, con reglas propias.' },
        { q: '¿Hay sombra para descansar?', a: 'No asumimos sombra continua. Buscá los sectores con árboles y hacé pausas con agua, sobre todo en verano.' },
      ],
    },
  },
  {
    slug: 'planes/con-bebes',
    group: 'planes',
    priority: 'C',
    updated: '1 de noviembre de 2026',
    related: ['planes/con-ninos', 'visita/servicios-accesibilidad', 'parque/juegos-infantiles', 'planes/adultos-mayores'],
    content: {
      metaTitle: 'Visitar el Parque de la Ciudad con cochecito: sombra y accesos',
      metaDescription:
        'Consejos para ir con bebés: sectores accesibles, sombra y baños. No verificamos una ruta continua sin desniveles.',
      kicker: 'Bebés y cochecito',
      h1: 'Visitar el Parque de la Ciudad con cochecito',
      lead:
        'Ir con un bebé en cochecito es posible, pero conviene elegir bien los sectores. No verificamos una ruta accesible continua, por eso recomendamos confirmar.',
      facts: [
        { term: 'Accesos', detail: 'Sin escalones, según sector.' },
        { term: 'Sombra', detail: 'Buscar para el bebé.' },
        { term: 'Baños', detail: 'Confirmar disponibilidad.' },
        { term: 'Verificación', detail: 'No ruta continua comprobada.' },
      ],
      sections: [
        {
          heading: 'Elegir el sector',
          paragraphs: [
            'El parque es extenso y con desniveles. No asumimos que todo el predio es transitable en cochecito; conviene confirmar los accesos sin escalones del sector que vayas a usar.',
          ],
        },
        {
          heading: 'Con el bebé',
          bullets: [
            'Buscá sombra para el cochecito y pausas con agua para vos.',
            'Confirmá dónde hay baño accesible en el sector habilitado.',
            'Llevá lo necesario y no dependas de encontrar un puesto abierto.',
          ],
        },
        {
          heading: 'Nuestra verificación',
          paragraphs: [
            'No hemos comprobado una ruta accesible continua ni disponibilidad garantizada de baños. Por eso no prometemos estos servicios: recomendamos confirmarlos para tu fecha.',
          ],
          callout: 'No verificamos una ruta accesible continua; confirmá accesos sin escalones para tu sector.',
        },
      ],
      faqs: [
        { q: '¿Se puede ir con cochecito?', a: 'Sí en los sectores accesibles, pero no verificamos una ruta continua sin desniveles. Confirmá los accesos sin escalones del sector que uses.' },
        { q: '¿Hay baño para cambiar al bebé?', a: 'No asumimos disponibilidad garantizada. Confirmá baños accesibles en el sector habilitado para tu visita.' },
        { q: '¿Hay sombra?', a: 'No asumimos sombra continua. Buscá los tramos con árboles y hacé pausas con agua.' },
      ],
    },
  },
  {
    slug: 'planes/adultos-mayores',
    group: 'planes',
    priority: 'C',
    updated: '1 de noviembre de 2026',
    related: ['visita/servicios-accesibilidad', 'parque/caminatas', 'planes/con-bebes', 'planes/sin-auto'],
    content: {
      metaTitle: 'Paseo tranquilo en el Parque de la Ciudad La Rioja para adultos mayores',
      metaDescription:
        'Un recorrido corto, con descansos y transporte cerca. No verificamos una ruta accesible continua.',
      kicker: 'Calma y descanso',
      h1: 'Un paseo tranquilo en el Parque de la Ciudad',
      lead:
        'El parque sirve para un paseo corto al aire libre, con descansos y sombra. Esta página apunta a quienes prefieren menos esfuerzo y un regreso cómodo.',
      facts: [
        { term: 'Recorrido', detail: 'Corto y con pausas.' },
        { term: 'Descanso', detail: 'Sombra y bancos.' },
        { term: 'Transporte', detail: 'Cerca de la puerta usada.' },
        { term: 'Accesos', detail: 'Confirmar sin escalones.' },
      ],
      sections: [
        {
          heading: 'Menos esfuerzo, más descanso',
          paragraphs: [
            'Elegí un sector habilitado cerca de la puerta que uses, hacé el recorrido a tu ritmo y aprovechá las áreas de descanso. No es una caminata de exigencia.',
          ],
        },
        {
          heading: 'Volver sin complicaciones',
          bullets: [
            'Confirmá los accesos sin escalones del sector, si los necesitás.',
            'Dejá el transporte o el auto cerca de la puerta para no caminar de más al volver.',
            'Llevá agua y protector solar; el sol riojano es fuerte.',
          ],
        },
        {
          heading: 'Antes de salir',
          paragraphs: [
            'No verificamos una ruta accesible continua ni baños garantizados. Confirmalos para tu fecha y tu puerta.',
          ],
          callout: 'No verificamos ruta accesible continua; confirmá accesos y baños para tu sector.',
        },
      ],
      faqs: [
        { q: '¿Es apto para adultos mayores?', a: 'Sí como paseo corto y con descansos. Elegí sectores cerca de la puerta y confirmá accesos sin escalones si los necesitás.' },
        { q: '¿Hay bancos para descansar?', a: 'No asumimos bancas garantizadas en todo el predio; usá las áreas de descanso habilitadas y llevá agua.' },
        { q: '¿Cómo vuelvo sin caminar mucho?', a: 'Dejá el transporte o el auto cerca de la puerta que uses y marca el punto de regreso.' },
      ],
    },
  },
  {
    slug: 'planes/fotografia-atardecer',
    group: 'planes',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['parque/mirador-del-lago', 'parque/que-hacer', 'parque/mapa-accesos', 'planes/verano-calor'],
    content: {
      metaTitle: 'Atardecer y fotos en el Parque de la Ciudad La Rioja: mirador y luz',
      metaDescription:
        'El mirador es conocido por el atardecer. Mejor hora, dirección de luz y cómo volver sin quedar a oscuras.',
      kicker: 'Fotografía',
      h1: 'Fotografía y atardecer en el Parque de la Ciudad',
      lead:
        'El portal provincial destaca el mirador para el atardecer, con las sierras de fondo. Esta página suma consejos de luz y de regreso para quienes van a fotografiar.',
      facts: [
        { term: 'Lugar', detail: 'Mirador sobre el lago.' },
        { term: 'Hora', detail: 'Atardecer, según Turismo.' },
        { term: 'Luz', detail: 'Sierras de fondo.' },
        { term: 'Regreso', detail: 'Visibilidad y transporte.' },
      ],
      sections: [
        {
          heading: 'Cuándo y dónde',
          paragraphs: [
            'El atardecer desde el mirador es la toma más buscada. Llegá con tiempo para ubicarte y comprobá el recorrido habilitado antes de subir.',
          ],
        },
        {
          heading: 'Consejos de luz y seguridad',
          bullets: [
            'La luz cálida dura poco: ubicá el encuadre antes de que baje el sol.',
            'Las sierras quedan de fondo hacia el oeste desde el mirador.',
            'No asumimos iluminación continua ni transporte disponible a cualquier hora; definí el regreso.',
          ],
        },
        {
          heading: 'Antes de quedar tarde',
          paragraphs: [
            'Si el clima cierra o el sol se va, priorizá el regreso seguro. El mapa del parque ayuda a no perder la puerta.',
          ],
          callout: 'No asumimos iluminación continua ni transporte a cualquier hora para el regreso.',
        },
      ],
      faqs: [
        { q: '¿Dónde sacar las mejores fotos?', a: 'El mirador sobre el lago, con las sierras de fondo, es el punto más conocido. Llegá con tiempo y confirmá el recorrido habilitado.' },
        { q: '¿A qué hora es el mejor atardecer?', a: 'El portal provincial destaca el atardecer. Comprobá la hora local de tu fecha y la visibilidad; no asumamos luz garantizada.' },
        { q: '¿Se puede quedar hasta tarde?', a: 'No asumimos iluminación ni transporte a cualquier hora. Definí el regreso antes de subir al mirador.' },
      ],
    },
  },
  {
    slug: 'planes/verano-calor',
    group: 'planes',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['parque/piletas-natatorio', 'planes/fotografia-atardecer', 'planes/con-ninos', 'parque/que-hacer'],
    content: {
      metaTitle: 'Parque de la Ciudad en verano: calor, piletas y seguridad',
      metaDescription:
        'Cómo visitar en verano: piletas de temporada, sol fuerte y precauciones. Confirmá la apertura del natatorio.',
      kicker: 'Temporada de calor',
      h1: 'Visitar el Parque de la Ciudad en verano',
      lead:
        'El verano suma las piletas de temporada, pero también el sol fuerte de La Rioja. Esta página separa la oportunidad del calor de las precauciones.',
      facts: [
        { term: 'Piletas', detail: 'Temporada de verano; confirmar.' },
        { term: 'Sol', detail: 'Intenso; protector y agua.' },
        { term: 'Horario', detail: 'Preferir mañana y tarde.' },
        { term: 'Sombra', detail: 'No continua en todo el predio.' },
      ],
      sections: [
        {
          heading: 'El atractivo del verano',
          paragraphs: [
            'Las piletas son la propuesta estacional del parque. Como las fuentes provinciales difieren en horarios, confirmá la temporada habilitada y el precio antes de ir a nadar.',
          ],
        },
        {
          heading: 'Cuidarse del calor',
          bullets: [
            'Llevá agua, protector solar y gorra; el sol riojano es fuerte.',
            'Evitá el sol fuerte entre las 12 y las 16 h y buscá sombra.',
            'Si hace mucho calor, preferí mañana temprano o tarde.',
          ],
        },
        {
          heading: 'Antes de ir a las piletas',
          paragraphs: [
            'Verificá apertura, reglas (traje de baño, sin alcohol) y precio en la fuente provincial. La descripción del verano no equivale a confirmación de que funciona hoy.',
          ],
          callout: 'El calor es fuerte: agua, sombra y horario adecuado; confirma el natatorio antes de viajar.',
        },
      ],
      faqs: [
        { q: '¿En verano hay piletas?', a: 'Sí, el natatorio es de temporada. Las fuentes provinciales difieren en horarios; confirmá la apertura y el precio antes de viajar.' },
        { q: '¿Qué hora es mejor por el calor?', a: 'Mañana temprano o tarde; evitá el sol fuerte entre 12 y 16 h y buscá sombra.' },
        { q: '¿Se puede entrar al lago a refrescarse?', a: 'No uses el lago como zona de baño. El baño habilitado es el natatorio de temporada.' },
      ],
    },
  },
  {
    slug: 'planes/invierno-viento',
    group: 'planes',
    priority: 'C',
    updated: '1 de noviembre de 2026',
    related: ['planes/verano-calor', 'parque/caminatas', 'visita/horarios', 'planes/adultos-mayores'],
    content: {
      metaTitle: 'Parque de la Ciudad en invierno: viento, frío y horarios',
      metaDescription:
        'El invierno riojano trae frío y viento. Cómo ajustar el recorrido y la ropa, y qué confirmar antes de salir.',
      kicker: 'Temporada fría',
      h1: 'Visitar el Parque de la Ciudad en invierno',
      lead:
        'En invierno baja la temperatura y aparece el viento, pero el parque sigue siendo un paseo al aire libre. Esta página ayuda a ajustar el plan.',
      facts: [
        { term: 'Clima', detail: 'Frío y viento según el día.' },
        { term: 'Ropa', detail: 'Abrigo para el atardecer.' },
        { term: 'Piletas', detail: 'Fuera de temporada.' },
        { term: 'Horario', detail: 'Diurno; confirmar sectores.' },
      ],
      sections: [
        {
          heading: 'Qué cambia',
          paragraphs: [
            'Las piletas no están en temporada en invierno, así que la visita se centra en el paseo, el lago y los sectores habilitados. El frío y el viento marcan el ritmo.',
          ],
        },
        {
          heading: 'Cómo prepararse',
          bullets: [
            'Abrigate, sobre todo para el atardecer, cuando la temperatura baja.',
            'El viento puede ser molesto en sectores abiertos; buscá resguardo si molesta.',
            'Hacé el recorrido en horario diurno y confirmá qué sectores están habilitados.',
          ],
        },
        {
          heading: 'Antes de salir',
          paragraphs: [
            'El pronóstico de esta guía es información de modelo, no un aviso oficial. Revisá el clima real y los avisos locales antes de caminar.',
          ],
          callout: 'En invierno, abrigo para el atardecer y recorrido diurno; el viento puede molestar en sectores abiertos.',
        },
      ],
      faqs: [
        { q: '¿Se puede ir en invierno?', a: 'Sí, como paseo diurno al aire libre. Las piletas no están en temporada; ajustá la ropa al frío y al viento.' },
        { q: '¿Hace mucho viento?', a: 'Depende del día. El viento puede molestar en sectores abiertos; buscá resguardo y revisá el pronóstico antes de salir.' },
        { q: '¿Hay piletas en invierno?', a: 'No; el natatorio es de temporada de verano. Confirmá la apertura cuando vuelva la temporada.' },
      ],
    },
  },
  {
    slug: 'planes/running',
    group: 'planes',
    priority: 'C',
    updated: '1 de noviembre de 2026',
    related: ['parque/caminatas', 'parque/ciclovias', 'planes/verano-calor', 'visita/mapa-accesos'],
    content: {
      metaTitle: 'Correr en el Parque de la Ciudad La Rioja: rutas y precauciones',
      metaDescription:
        'El predio permite correr en ciclovías y senderos habilitados. Hidratación, sol y superficie según el día.',
      kicker: 'Running',
      h1: 'Salir a correr en el Parque de la Ciudad',
      lead:
        'El parque tiene espacio para correr en los senderos y ciclovías habilitados. Esta página aporta precauciones sin medir una ruta oficial.',
      facts: [
        { term: 'Lugar', detail: 'Senderos y ciclovías habilitados.' },
        { term: 'Hidratación', detail: 'Imprescindible en el calor.' },
        { term: 'Superficie', detail: 'No medimos ruta oficial.' },
        { term: 'Sol', detail: 'Intenso; preferir temprano.' },
      ],
      sections: [
        {
          heading: 'Cómo correr',
          paragraphs: [
            'Podés usar los senderos y ciclovías habilitados a tu ritmo. No presentamos una ruta medida ni señalizada, así que la distancia depende de qué sectores recorras.',
          ],
        },
        {
          heading: 'Precauciones',
          bullets: [
            'Llevá agua; el sol riojano es fuerte y la deshidratación llega rápido.',
            'Preferí mañana temprano o tarde para evitar el sol fuerte.',
            'Compartí el espacio con peatones y bicicletas y evitá recorridos expuestos si hay tormenta.',
          ],
        },
        {
          heading: 'Antes de correr',
          paragraphs: [
            'Confirmá qué sectores están habilitados ese día y marcá el punto de regreso. El pronóstico de la guía no es un aviso oficial.',
          ],
          callout: 'No medimos una ruta oficial; usá senderos y ciclovías habilitados y priorizá hidratación y sol.',
        },
      ],
      faqs: [
        { q: '¿Se puede correr en el parque?', a: 'Sí, en senderos y ciclovías habilitados a tu ritmo. No presentamos una ruta medida ni señalizada.' },
        { q: '¿Qué horario es mejor?', a: 'Mañana temprano o tarde, para evitar el sol fuerte entre 12 y 16 h; llevá agua.' },
        { q: '¿Hay bebederos para hidratarse?', a: 'No asumimos bebederos garantizados. Llevá el agua suficiente para tu recorrido.' },
      ],
    },
  },
  {
    slug: 'planes/sin-auto',
    group: 'planes',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['visita/colectivo-tns', 'visita/como-llegar', 'planes/adultos-mayores', 'itinerarios/medio-dia'],
    content: {
      metaTitle: 'Visitar el Parque de la Ciudad sin auto: colectivo y vuelta',
      metaDescription:
        'Cómo ir al parque sin vehículo propio: colectivo, parada Superdomo y cómo resolver la vuelta.',
      kicker: 'Sin auto',
      h1: 'Visitar el Parque de la Ciudad sin auto',
      lead:
        'El parque es alcanzable sin auto propio, pero la vuelta conviene planearla. Esta página reúne las opciones de transporte y los puntos a confirmar.',
      facts: [
        { term: 'Colectivo', detail: 'Red TNS; parada Superdomo.' },
        { term: 'Taxi/remis', detail: 'Indicar sector y puerta.' },
        { term: 'Vuelta', detail: 'Confirmar frecuencia.' },
        { term: 'Distancia', detail: 'Corto trayecto desde el centro.' },
      ],
      sections: [
        {
          heading: 'Ir en transporte público',
          paragraphs: [
            'La referencia conocida es la parada Superdomo dentro de la red TNS. Las líneas y frecuencias vigentes debés confirmarlas con el operador antes de viajar; un recorrido turístico no reemplaza un servicio regular.',
          ],
        },
        {
          heading: 'Resolver la vuelta',
          bullets: [
            'Anotá la frecuencia de regreso, no solo la de venida: el parque queda algo alejado del centro.',
            'Si venís a un evento, sumá su horario al de los colectivos.',
            'Como alternativa, un taxi o remis desde la puerta usada evita quedar sin opción de vuelta.',
          ],
        },
        {
          heading: 'Desde el centro',
          paragraphs: [
            'El trayecto desde el centro es corto. Si preferís no combinar transporte, un remis con la puerta indicada suele ser simple; confirmá tarifa y punto de regreso.',
          ],
          callout: 'Confirmá la frecuencia de regreso del colectivo; el parque queda algo alejado del centro.',
        },
      ],
      faqs: [
        { q: '¿Cómo ir al parque sin auto?', a: 'En colectivo (red TNS, parada Superdomo, líneas a confirmar con el operador) o en taxi/remis indicando la puerta que usarás.' },
        { q: '¿Hay colectivo de vuelta?', a: 'Depende del horario y del día. Confirmá la frecuencia de regreso; si venís a un evento, sumalo al horario del transporte.' },
        { q: '¿Está lejos del centro?', a: 'No, el trayecto es corto, pero el parque queda algo alejado y conviene definir el regreso antes de entrar.' },
      ],
    },
  },
  // ===================== C · COMER =====================
  {
    slug: 'comer/cerca-del-parque',
    group: 'comer',
    priority: 'A',
    updated: '1 de noviembre de 2026',
    related: ['comer/avenida-las-palmeras', 'comer/cena-superdomo', 'visita/estacionamiento', 'comer/sabores-riojanos'],
    content: {
      metaTitle: 'Dónde comer cerca del Parque de la Ciudad La Rioja',
      metaDescription:
        'Opciones de comida cerca del parque y en el recorrido de vuelta. Verificá ubicación, horario y si siguen abiertos.',
      kicker: 'Alrededores',
      h1: 'Dónde comer cerca del Parque de la Ciudad',
      lead:
        'Alrededor del parque y en el recorrido de vuelta hay opciones de comida, pero conviene verificar ubicación y horario. Esta página reúne referencias conocidas sin presentarlas como dentro del predio.',
      facts: [
        { term: 'Dentro del parque', detail: 'No confirmamos locales fijos.' },
        { term: 'Cercanías', detail: 'Vias de Circunvalación y Las Palmeras.' },
        { term: 'Centro', detail: 'Más opciones en la vuelta.' },
        { term: 'Verificar', detail: 'Ubicación y apertura.' },
      ],
      sections: [
        {
          heading: 'Lo que no asumimos',
          paragraphs: [
            'No afirmamos que haya un conjunto de locales a pie del parque abiertos todos los días. Las opciones dependen de la fecha, del evento y de la habilitación de cada lugar. Por eso las presentamos como referencias a verificar.',
          ],
        },
        {
          heading: 'Referencias conocidas',
          bullets: [
            'En el recorrido de Circunvalación y la zona del parque figuran propuestas de comida; una de ellas es Velasco, que aparece en directorios tanto por Circunvalación como por Avenida Félix de la Colina. Confirmá ubicación y si sigue abierto.',
            'Avenida Las Palmeras concentra opciones de comida y bar nocturno, como Mala Mía; útil para la vuelta tras un evento.',
            'Hacia el centro, La Cocina de LePark (Avenida San Francisco 3507) es una opción de la vuelta, no del parque a pie.',
          ],
        },
        {
          heading: 'Cómo elegir',
          paragraphs: [
            'Definí si querés comer antes, durante o después de la visita, y confirmá ubicación, horario y reserva según el lugar. No los presentamos como una lista cerrada ni garantizada.',
          ],
          callout: 'No afirmamos locales fijos a pie del parque; verificá ubicación, horario y apertura de cada lugar.',
        },
      ],
      faqs: [
        { q: '¿Hay restaurantes dentro del parque?', a: 'No confirmamos locales fijos dentro del predio. Las opciones conocidas están en las cercanías (Circunvalación, Las Palmeras) y en el centro; verificá ubicación y apertura.' },
        { q: '¿Qué restaurantes hay cerca?', a: 'Figuran referencias como Velasco (Circunvalación / Av. Félix de la Colina) y opciones en Avenida Las Palmeras; confirmá si siguen abiertos y su ubicación exacta.' },
        { q: '¿Dónde comer en la vuelta al centro?', a: 'La Cocina de LePark (Av. San Francisco 3507) es una opción de la vuelta. El centro tiene más propuestas; verificá horarios.' },
      ],
    },
  },
  {
    slug: 'comer/avenida-las-palmeras',
    group: 'comer',
    priority: 'C',
    updated: '1 de noviembre de 2026',
    related: ['comer/cerca-del-parque', 'comer/cena-superdomo', 'comer/sabores-riojanos', 'visita/estacionamiento'],
    content: {
      metaTitle: 'Comer en Avenida Las Palmeras La Rioja: opciones y cómo llegar',
      metaDescription:
        'Avenida Las Palmeras reúne opciones de comida y bar nocturno. Verificá ubicación y transporte desde el parque.',
      kicker: 'Eje de comida',
      h1: 'Comer en Avenida Las Palmeras',
      lead:
        'Avenida Las Palmeras es un eje con propuestas de comida y bar nocturno, como Mala Mía. Esta página ayuda a ubicarlo en relación al parque y a la vuelta.',
      facts: [
        { term: 'Tipo', detail: 'Comida y bar nocturno.' },
        { term: 'Referencia', detail: 'Mala Mía (bar/resto nocturno).' },
        { term: 'Relación', detail: 'No es a pie del parque.' },
        { term: 'Verificar', detail: 'Ubicación y horario.' },
      ],
      sections: [
        {
          heading: 'Por qué mencionarlo',
          paragraphs: [
            'Aparece como opción de comida y, sobre todo, de cena tras un evento del parque o del Superdomo. No lo presentamos como un lugar a pie del predio, sino como un eje de vuelta.',
          ],
        },
        {
          heading: 'Cómo llegar desde el parque',
          bullets: [
            'No asumimos distancia a pie; confirmá con el mapa y el medio de transporte.',
            'En auto o remis, indicá Avenida Las Palmeras y el local.',
            'En colectivo, verificá la línea y la parada con el operador.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Confirmá que el local sigue abierto, su horario y si conviene reserva. No garantizamos disponibilidad ni ubicación exacta.',
          ],
          callout: 'Avenida Las Palmeras no es a pie del parque; verificá ubicación, horario y medio de transporte.',
        },
      ],
      faqs: [
        { q: '¿Qué hay en Avenida Las Palmeras?', a: 'Opciones de comida y bar nocturno, como Mala Mía. Es un eje de vuelta, no un lugar a pie del parque.' },
        { q: '¿Queda cerca del parque?', a: 'No asumimos distancia a pie. Confirmá ubicación y medio de transporte desde el acceso que usaste.' },
        { q: '¿Sirve para cenar tras un evento?', a: 'Sí como opción de vuelta; confirmá horario y disponibilidad del local para tu fecha.' },
      ],
    },
  },
  {
    slug: 'comer/cena-superdomo',
    group: 'comer',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['comer/cerca-del-parque', 'comer/avenida-las-palmeras', 'parque/superdomo', 'planes/sin-auto'],
    content: {
      metaTitle: 'Dónde cenar tras el Superdomo La Rioja: opciones de vuelta',
      metaDescription:
        'Tras un evento del Superdomo, dónde cenar y cómo volver. Verificá horarios y transporte de regreso.',
      kicker: 'Tras el evento',
      h1: 'Dónde cenar después del Superdomo',
      lead:
        'Cuando hay un evento en el Superdomo, aparece la duda de dónde cenar y cómo volver. Esta página reúne referencias de vuelta sin prometer disponibilidad.',
      facts: [
        { term: 'Contexto', detail: 'Eventos en el Superdomo.' },
        { term: 'Opciones', detail: 'Las Palmeras y centro.' },
        { term: 'Transporte', detail: 'Confirmar vuelta.' },
        { term: 'Reserva', detail: 'Según el local.' },
      ],
      sections: [
        {
          heading: 'Planear la cena y la vuelta juntas',
          paragraphs: [
            'Si venís a un evento, sumá el horario del mismo al de los colectivos o de un remis. Las opciones conocidas de cena están en Avenida Las Palmeras (como Mala Mía) y en el centro (como La Cocina de LePark).',
          ],
        },
        {
          heading: 'Opciones de vuelta',
          bullets: [
            'Avenida Las Palmeras: comida y bar nocturno; verificá horario.',
            'Centro: más propuestas, como Av. San Francisco 3507 (La Cocina de LePark).',
            'Confirmá la frecuencia de colectivo de regreso o dejá un remis preparado.',
          ],
        },
        {
          heading: 'Antes de salir',
          paragraphs: [
            'Verificá que el local sigue abierto y su horario para tu fecha. No garantizamos disponibilidad ni ubicación exacta; el parque no es el lugar de la cena.',
          ],
          callout: 'Sumá el horario del evento al de la vuelta; verificá horario y disponibilidad de la cena.',
        },
      ],
      faqs: [
        { q: '¿Dónde cenar tras un evento del Superdomo?', a: 'Opciones de vuelta en Avenida Las Palmeras (como Mala Mía) y en el centro (como La Cocina de LePark, Av. San Francisco 3507). Confirmá horario y si siguen abiertos.' },
        { q: '¿Hay cena dentro del parque?', a: 'No confirmamos locales fijos dentro del predio. Las opciones conocidas están fuera, en las cercanías o el centro.' },
        { q: '¿Cómo vuelvo de noche?', a: 'Confirmá la frecuencia de colectivo o dejá un remis; el parque queda algo alejado del centro.' },
      ],
    },
  },
  {
    slug: 'comer/cafeterias-centro',
    group: 'comer',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['comer/cerca-del-parque', 'comer/sabores-riojanos', 'planes/sin-auto', 'itinerarios/la-rioja-en-un-dia'],
    content: {
      metaTitle: 'Cafeterías en el centro de La Rioja para merendar',
      metaDescription:
        'Tras la visita al parque, opciones de café y merienda en el centro. Verificá ubicación y horario.',
      kicker: 'Merienda',
      h1: 'Cafeterías en el centro de La Rioja',
      lead:
        'Volver al centro tras el parque abre la opción de una merienda o un café. Esta página menciona una referencia conocida sin presentarla como parte del parque.',
      facts: [
        { term: 'Referencia', detail: 'Rayuela Books & Café (librería + café).' },
        { term: 'Zona', detail: 'Centro de La Rioja.' },
        { term: 'Momento', detail: 'Merienda tras la visita.' },
        { term: 'Verificar', detail: 'Ubicación y horario.' },
      ],
      sections: [
        {
          heading: 'Una parada de vuelta',
          paragraphs: [
            'Una referencia conocida en el centro es Rayuela Books & Café, en formato librería y café. La mencionamos como opción de merienda al volver, no como algo a pie del parque.',
          ],
        },
        {
          heading: 'Cómo sumarla al recorrido',
          bullets: [
            'Confirmá ubicación exacta y horario de la cafetería para tu fecha.',
            'En colectivo o remis, dejá el centro como destino de vuelta.',
            'Si preferís, buscá otras opciones del centro según lo que encuentres abierto.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Verificá disponibilidad y horario. No garantizamos que la referencia siga abierta ni su ubicación exacta.',
          ],
          callout: 'Rayuela Books & Café es una referencia de vuelta; verificá ubicación y horario.',
        },
      ],
      faqs: [
        { q: '¿Dónde tomar un café tras el parque?', a: 'En el centro, una referencia conocida es Rayuela Books & Café (librería y café). Confirmá ubicación y horario para tu fecha.' },
        { q: '¿Hay cafeterías en el parque?', a: 'No confirmamos locales fijos dentro del predio. La opción de café queda en el centro, como parte de la vuelta.' },
        { q: '¿El centro queda lejos?', a: 'El trayecto desde el parque al centro es corto, pero confirmá el medio de transporte de vuelta.' },
      ],
    },
  },
  {
    slug: 'comer/ferias-gastronomicas',
    group: 'comer',
    priority: 'C',
    updated: '1 de noviembre de 2026',
    related: ['parque/eventos-ferias', 'comer/cerca-del-parque', 'comer/sabores-riojanos', 'parque/que-hacer'],
    content: {
      metaTitle: 'Ferias gastronómicas en el Parque de la Ciudad y La Rioja',
      metaDescription:
        'Turismo provincial menciona actividad gastronómica de fin de semana, pero no diaria. Confirmá fechas y ubicación.',
      kicker: 'Eventos de comida',
      h1: 'Ferias gastronómicas en el Parque de la Ciudad',
      lead:
        'Se menciona que los fines de semana puede haber propuestas gastronómicas en el entorno del parque, pero no significa un puesto fijo todos los días. Esta página aclara eso.',
      facts: [
        { term: 'Frecuencia', detail: 'Fines de semana, no diaria.' },
        { term: 'Fuente', detail: 'Turismo provincial.' },
        { term: 'Ubicación', detail: 'Confirmar según evento.' },
        { term: 'No fijo', detail: 'No asumimos puestos diarios.' },
      ],
      sections: [
        {
          heading: 'Lo que dice la fuente',
          paragraphs: [
            'La provincia menciona actividad gastronómica de fin de semana en el entorno, pero no una oferta fija y diaria. Por eso no publicamos un listado de puestos: dependería del evento y de la habilitación del día.',
          ],
        },
        {
          heading: 'Cómo aprovecharlo',
          bullets: [
            'Si vas un fin de semana, consultá la agenda oficial y los avisos del día por si hay feria.',
            'Confirmá ubicación y horario del puesto según el evento.',
            'No dependas de encontrar comida abierta si vas un día sin actividad programada.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'No asumimos puestos garantizados. Si querés asegurar la comida, mejor llevá tu picnic o confirmá una opción de las cercanías.',
          ],
          callout: 'No hay puestos diarios garantizados; la actividad gastronómica es de fin de semana según la fuente. Confirmá el evento.',
        },
      ],
      faqs: [
        { q: '¿Hay ferias de comida en el parque?', a: 'La provincia menciona actividad gastronómica de fin de semana, no una oferta diaria fija. Confirmá la agenda y los avisos del día.' },
        { q: '¿Puedo comprar comida adentro?', a: 'No asumimos puestos garantizados todos los días. Mejor llevá tu picnic o confirmá una opción de las cercanías.' },
        { q: '¿Qué días hay feria?', a: 'Según la fuente, los fines de semana. La fecha y la ubicación exactas dependen del evento; confirmalas antes de viajar.' },
      ],
    },
  },
  {
    slug: 'comer/sabores-riojanos',
    group: 'comer',
    priority: 'C',
    updated: '1 de noviembre de 2026',
    related: ['comer/cerca-del-parque', 'comer/cafeterias-centro', 'alrededores', 'itinerarios/la-rioja-en-un-dia'],
    content: {
      metaTitle: 'Comida típica riojana en La Rioja Capital: qué probar',
      metaDescription:
        'El parque es el inicio de una vuelta por La Rioja. Platos y bebidas típicas para prolongar la jornada en el centro.',
      kicker: 'Gastronomía local',
      h1: 'Sabores riojanos para prolongar la visita',
      lead:
        'El Parque de la Ciudad puede ser el inicio de una vuelta por La Rioja Capital. Esta página repasa platos y bebidas típicos para pensar la comida después del paseo.',
      facts: [
        { term: 'Contexto', detail: 'Vuelta por la ciudad.' },
        { term: 'Platos', detail: 'Parrilla, empanadas, tamal.' },
        { term: 'Bebidas', detail: 'Vino y artesanía local.' },
        { term: 'Dónde', detail: 'Centro y alrededores.' },
      ],
      sections: [
        {
          heading: 'Platos que suelen mencionarse',
          paragraphs: [
            'La cocina riojana comparte rasgos del noroeste argentino: parrilla, empanadas, tamal y preparaciones con maíz y carne. No son exclusivas del parque sino de la región, y la mejor forma de probarlas es en el centro o los alrededores.',
          ],
        },
        {
          heading: 'Cómo encarar la comida',
          bullets: [
            'Pensá la comida como parte de la vuelta, no como algo del predio.',
            'Confirmá locales, horarios y si conviene reserva.',
            'Aprovechá para conocer una bodega o una propuesta de artesanía local si el día lo permite.',
          ],
        },
        {
          heading: 'Antes de elegir',
          paragraphs: [
            'No recomendamos locales específicos desde la guía; la oferta cambia y depende de tu fecha. Buscá opciones abiertas y verificá ubicación.',
          ],
          callout: 'Los sabores riojanos son de la región, no del parque; planealos como parte de la vuelta.',
        },
      ],
      faqs: [
        { q: '¿Qué comida típica hay en La Rioja?', a: 'Platos del noroeste como parrilla, empanadas y tamal, con maíz y carne. Son de la región; probalos en el centro o alrededores tras la visita.' },
        { q: '¿Hay comida típica en el parque?', a: 'No confirmamos locales fijos dentro del predio. La opción es la vuelta al centro o las cercanías.' },
        { q: '¿Recomiendan un restaurante?', a: 'No desde la guía: la oferta cambia. Confirmá locales abiertos, horarios y ubicación para tu fecha.' },
      ],
    },
  },
  // ===================== D · ALREDEDORES =====================
  {
    slug: 'alrededores',
    group: 'alrededores',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['alrededores/parque-lineal-las-talas', 'alrededores/parque-de-las-juventudes', 'alrededores/dique-los-sauces', 'itinerarios/la-rioja-en-un-dia'],
    content: {
      metaTitle: 'Qué visitar cerca del Parque de la Ciudad La Rioja',
      metaDescription:
        'Distancia, transporte y tipos de paseos cerca del parque: otros parques, el dique y la cultura del centro.',
      kicker: 'Otros paseos',
      h1: 'Qué visitar cerca del Parque de la Ciudad',
      lead:
        'El parque puede ser el punto de partida para conocer La Rioja. Esta página organiza los alrededores por tipo de paseo y marca que cada lugar tiene sus propias condiciones.',
      facts: [
        { term: 'Distancia', detail: 'Desde pocas cuadras hasta ~15 km.' },
        { term: 'Transporte', detail: 'Auto, remis o colectivo según destino.' },
        { term: 'Tipos', detail: 'Parques, dique, cultura.' },
        { term: 'Regla', detail: 'Cada lugar, sus condiciones.' },
      ],
      sections: [
        {
          heading: 'Cómo elegir el alrededores',
          paragraphs: [
            'El portal oficial de Turismo de La Rioja y el mapa de la ciudad listan varios paseos. Los agrupamos en parques urbanos cercanos, el dique y la cultura del centro. No transferas las condiciones del Parque de la Ciudad a otro lugar.',
          ],
        },
        {
          heading: 'Grupos de paseos',
          bullets: [
            'Parques urbanos: Parque Lineal Las Talas y Parque de las Juventudes, más cerca del recorrido del parque.',
            'Agua y naturaleza: Dique Los Sauces, a unos 15 km de la ciudad.',
            'Cultura del centro: Calvario Las Padercitas y Paseo Cultural Castro Barros, en la vuelta urbana.',
          ],
        },
        {
          heading: 'Antes de armar la vuelta',
          paragraphs: [
            'Cada destino tiene su propio acceso, horario y forma de llegar. Confirmalos y sumalos al transporte y al tiempo de regreso.',
          ],
          callout: 'No asumas que lo que vale para el parque vale para otro lugar; cada destino tiene sus condiciones.',
        },
      ],
      faqs: [
        { q: '¿Qué hay cerca del Parque de la Ciudad?', a: 'Parques urbanos (Las Talas, Las Juventudes), el Dique Los Sauces a ~15 km y la cultura del centro (Calvario, Castro Barros). Confirmá accesos y horarios de cada uno.' },
        { q: '¿Se puede ir caminando a los otros parques?', a: 'Algunos quedan en la zona urbana; otros, como el dique, requieren vehículo. Confirmá distancia y transporte por destino.' },
        { q: '¿Conviene una ruta de todos juntos?', a: 'Dependé de tu tiempo. Ver páginas de itinerarios para recorridos sugeridos de medio día y de un día.' },
      ],
    },
  },
  {
    slug: 'alrededores/parque-lineal-las-talas',
    group: 'alrededores',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['alrededores', 'alrededores/parque-de-las-juventudes', 'visita/como-llegar', 'itinerarios/medio-dia'],
    content: {
      metaTitle: 'Parque Lineal Las Talas La Rioja: paseo verde urbano',
      metaDescription:
        'Otro espacio verde de La Rioja cercano al parque. Qué es, cómo llegar y cómo sumarlo a la vuelta urbana.',
      kicker: 'Paseo urbano',
      h1: 'Parque Lineal Las Talas',
      lead:
        'El Parque Lineal Las Talas es otro de los espacios verdes que el mapa de la ciudad de La Rioja destaca, distinto del Parque de la Ciudad. Esta página ayuda a ubicarlo y a decidir si sumarlo.',
      facts: [
        { term: 'Qué es', detail: 'Espacio verde lineal urbano.' },
        { term: 'Relación', detail: 'Otro parque, no el del centro.' },
        { term: 'Acceso', detail: 'Según la zona de la ciudad.' },
        { term: 'Verificar', detail: 'Condiciones y horario.' },
      ],
      sections: [
        {
          heading: 'Por qué mencionarlo',
          paragraphs: [
            'Aparece en el mapa de paseos de La Rioja junto con el Parque de la Ciudad. No lo presentamos como una extensión del parque, sino como un destino propio con su acceso y condiciones.',
          ],
        },
        {
          heading: 'Cómo llegar y sumarlo',
          bullets: [
            'Confirmá su ubicación en la ciudad y el medio de transporte según tu origen.',
            'Si vas tras el Parque de la Ciudad, verificá la distancia y el transporte entre ambos.',
            'No asumimos que están conectados a pie; comprobá el cruce de calles si querés caminar.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Verificá acceso, condiciones y horario del sector. No transferas lo que sepas del Parque de la Ciudad a este lugar.',
          ],
          callout: 'Es un parque distinto, con su propio acceso; confirmá ubicación y condiciones.',
        },
      ],
      faqs: [
        { q: '¿Qué es el Parque Lineal Las Talas?', a: 'Un espacio verde lineal que el mapa de La Rioja lista como paseo urbano, distinto del Parque de la Ciudad.' },
        { q: '¿Queda cerca del Parque de la Ciudad?', a: 'Está en la ciudad, pero verificá la distancia y el transporte; no asumimos que están conectados a pie.' },
        { q: '¿Se puede ir caminando de uno a otro?', a: 'Comprobá el cruce de calles y la distancia; no asumimos una conexión a pie directa.' },
      ],
    },
  },
  {
    slug: 'alrededores/parque-de-las-juventudes',
    group: 'alrededores',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['alrededores', 'alrededores/parque-lineal-las-talas', 'parque/que-hacer', 'itinerarios/la-rioja-en-un-dia'],
    content: {
      metaTitle: 'Parque de las Juventudes La Rioja: comparar con el Parque de la Ciudad',
      metaDescription:
        'Otro parque de La Rioja y su relación con el Parque de la Ciudad. Cómo visitarlos y qué diferencia.',
      kicker: 'Otro parque',
      h1: 'Parque de las Juventudes',
      lead:
        'El Parque de las Juventudes aparece en los paseos de La Rioja junto con el Parque de la Ciudad. Esta página lo presenta como destino propio para comparar y combinar.',
      facts: [
        { term: 'Qué es', detail: 'Parque urbano de La Rioja.' },
        { term: 'Relación', detail: 'Distinto del Parque de la Ciudad.' },
        { term: 'Combinar', detail: 'Según tiempo y transporte.' },
        { term: 'Verificar', detail: 'Acceso y condiciones.' },
      ],
      sections: [
        {
          heading: 'Cómo se diferencia',
          paragraphs: [
            'No lo presentamos como una extensión del Parque de la Ciudad. Cada parque tiene su acceso, sus sectores y sus condiciones; conviene conocerlos por separado antes de decidir cuál visitar o cómo combinarlos.',
          ],
        },
        {
          heading: 'Cómo visitarlos',
          bullets: [
            'Confirmá la ubicación de este parque y el medio de transporte desde tu origen.',
            'Si querés ver ambos, verificá la distancia y el transporte entre ellos.',
            'Ajustá la vuelta al tiempo y al clima; no asumamos que están conectados a pie.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Verificá acceso y condiciones de este parque. No transferas lo que sepas del Parque de la Ciudad.',
          ],
          callout: 'Es un parque distinto; confirmá su ubicación y no asumás conexión a pie con el Parque de la Ciudad.',
        },
      ],
      faqs: [
        { q: '¿Qué es el Parque de las Juventudes?', a: 'Un parque urbano de La Rioja que aparece en los paseos de la ciudad, distinto del Parque de la Ciudad.' },
        { q: '¿Está cerca del Parque de la Ciudad?', a: 'Verificá la distancia y el transporte; no asumimos que están conectados a pie.' },
        { q: '¿Conviene visitar los dos?', a: 'Si tenés tiempo, sí, pero confirmá accesos y transporte entre ambos antes de combinarlos.' },
      ],
    },
  },
  {
    slug: 'alrededores/dique-los-sauces',
    group: 'alrededores',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['alrededores', 'itinerarios/parque-y-dique', 'itinerarios/la-rioja-en-un-dia', 'visita/como-llegar'],
    content: {
      metaTitle: 'Dique Los Sauces desde La Rioja Capital: distancia y media jornada',
      metaDescription:
        'Embalse a unos 15 km de la ciudad. Cómo llegar, qué hacer y cómo encarar una salida de medio día.',
      kicker: 'Agua y naturaleza',
      h1: 'Dique Los Sauces desde La Rioja Capital',
      lead:
        'El Dique Los Sauces es un embalse a unos 15 km de la ciudad, según el mapa municipal de paseos. Es una salida de agua y naturaleza, no una extensión del parque urbano.',
      facts: [
        { term: 'Distancia', detail: 'Cerca de 15 km de la ciudad.' },
        { term: 'Tipo', detail: 'Embalse y entorno natural.' },
        { term: 'Transporte', detail: 'Auto o remis; verificar.' },
        { term: 'Tiempo', detail: 'Media jornada sugerida.' },
      ],
      sections: [
        {
          heading: 'Por qué es distinto',
          paragraphs: [
            'A diferencia del Parque de la Ciudad, el dique es un destino de agua y naturaleza que requiere desplazarse unos 15 km. No lo trates como un paseo a pie desde el parque.',
          ],
        },
        {
          heading: 'Cómo llegar y qué hacer',
          bullets: [
            'Confirmá el medio de transporte: auto o remis, ya que queda fuera de la ciudad.',
            'Reservá una media jornada, no una parada corta.',
            'Verificá acceso y condiciones del espejo de agua antes de ir.',
          ],
        },
        {
          heading: 'Antes de salir',
          paragraphs: [
            'Verificá distancia real desde tu origen y condiciones del dique. No asumimos servicios ni transporte público garantizado hasta allí.',
          ],
          callout: 'El dique queda ~15 km de la ciudad; reservá media jornada y confirma transporte y acceso.',
        },
      ],
      faqs: [
        { q: '¿A qué distancia está el Dique Los Sauces?', a: 'Cerca de 15 km de La Rioja Capital según el mapa municipal de paseos.' },
        { q: '¿Se puede ir en transporte público?', a: 'No asumimos transporte público garantizado hasta el dique; auto o remis son las opciones a confirmar.' },
        { q: '¿Cuánto tiempo lleva la visita?', a: 'Reservá una media jornada. No es una parada corta ni un paseo a pie desde el parque.' },
      ],
    },
  },
  {
    slug: 'alrededores/calvario-las-padercitas',
    group: 'alrededores',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['alrededores', 'alrededores/paseo-cultural-castro-barros', 'itinerarios/la-rioja-en-un-dia', 'itinerarios/medio-dia'],
    content: {
      metaTitle: 'Calvario Las Padercitas La Rioja: hito cultural y cómo llegar',
      metaDescription:
        'Un hito religioso y cultural en La Rioja. Ubicación, por qué se visita y cómo sumarlo a la vuelta del centro.',
      kicker: 'Cultura del centro',
      h1: 'Calvario Las Padercitas',
      lead:
        'El Calvario Las Padercitas es uno de los hitos que el mapa de paseos de La Rioja incluye, junto con el centro histórico. Esta página lo presenta como parada cultural de la vuelta urbana.',
      facts: [
        { term: 'Qué es', detail: 'Hito religioso y cultural.' },
        { term: 'Zona', detail: 'En la vuelta del centro.' },
        { term: 'Acceso', detail: 'Según ubicación en la ciudad.' },
        { term: 'Verificar', detail: 'Horario y acceso.' },
      ],
      sections: [
        {
          heading: 'Por qué visitarlo',
          paragraphs: [
            'Aparece como parte de los paseos y la cultura de La Rioja, distinto del Parque de la Ciudad. Lo presentamos como una parada de la vuelta urbana, no como algo del predio.',
          ],
        },
        {
          heading: 'Cómo sumarlo',
          bullets: [
            'Confirmá su ubicación en la ciudad y el medio de transporte.',
            'Combinálo con el Paseo Cultural Castro Barros en una vuelta de centro.',
            'Verificá el acceso y el horario según la fecha.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Verificá ubicación, acceso y condiciones. No transferas lo del parque a este hito cultural.',
          ],
          callout: 'Es una parada cultural del centro; confirmá ubicación y acceso.',
        },
      ],
      faqs: [
        { q: '¿Qué es el Calvario Las Padercitas?', a: 'Un hito religioso y cultural que el mapa de paseos de La Rioja incluye, distinto del Parque de la Ciudad.' },
        { q: '¿Queda en el centro?', a: 'Está en la vuelta de la ciudad; confirmá su ubicación exacta y el medio de transporte.' },
        { q: '¿Se puede combinar con otros paseos?', a: 'Sí, con el Paseo Cultural Castro Barros y el centro histórico en una vuelta urbana.' },
      ],
    },
  },
  {
    slug: 'alrededores/paseo-cultural-castro-barros',
    group: 'alrededores',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['alrededores', 'alrededores/calvario-las-padercitas', 'itinerarios/la-rioja-en-un-dia', 'comer/cafeterias-centro'],
    content: {
      metaTitle: 'Paseo Cultural Castro Barros La Rioja: cultura y café',
      metaDescription:
        'Una parada cultural del centro de La Rioja. Cómo llegar, qué ver y cómo sumarla a la vuelta tras el parque.',
      kicker: 'Cultura del centro',
      h1: 'Paseo Cultural Castro Barros',
      lead:
        'El Paseo Cultural Castro Barros es una propuesta cultural del centro de La Rioja que el mapa de paseos incluye. Esta página lo presenta como parada de la vuelta urbana, no del parque.',
      facts: [
        { term: 'Qué es', detail: 'Propuesta cultural del centro.' },
        { term: 'Zona', detail: 'Centro de La Rioja.' },
        { term: 'Acceso', detail: 'Según ubicación en la ciudad.' },
        { term: 'Verificar', detail: 'Horario y actividad.' },
      ],
      sections: [
        {
          heading: 'Por qué sumarlo',
          paragraphs: [
            'Es una parada de cultura y pausa en el centro, ideal tras la visita al parque o antes de una merienda. No lo presentamos como parte del predio.',
          ],
        },
        {
          heading: 'Cómo organizarlo',
          bullets: [
            'Confirmá ubicación, horario y actividad vigente.',
            'Combinálo con el centro histórico y el Calvario Las Padercitas.',
            'Aprovechá para una cafetería de la vuelta, verificando horarios.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Verificá actividad y horario del día. No asumimos disponibilidad garantizada.',
          ],
          callout: 'Es una parada cultural del centro; confirmá horario y actividad vigente.',
        },
      ],
      faqs: [
        { q: '¿Qué es el Paseo Cultural Castro Barros?', a: 'Una propuesta cultural del centro de La Rioja que el mapa de paseos incluye, distinto del Parque de la Ciudad.' },
        { q: '¿Queda cerca del parque?', a: 'Está en el centro; confirmá ubicación y medio de transporte desde tu origen.' },
        { q: '¿Se puede combinar con café o comida?', a: 'Sí, con opciones del centro; verificá horarios de locales y actividad del paseo.' },
      ],
    },
  },
  // ===================== E · ITINERARIOS =====================
  {
    slug: 'itinerarios/bus-turistico',
    group: 'itinerarios',
    priority: 'A',
    updated: '1 de noviembre de 2026',
    related: ['itinerarios/medio-dia', 'visita/como-llegar', 'parque/superdomo', 'itinerarios/la-rioja-en-un-dia'],
    content: {
      metaTitle: 'Bus turístico de La Rioja y el Parque de la Ciudad',
      metaDescription:
        'El bus turístico pasa por el parque y otros puntos. Cómo usarlo para recorrer la ciudad sin auto.',
      kicker: 'Recorrido guiado',
      h1: 'Bus turístico de La Rioja y el Parque de la Ciudad',
      lead:
        'El bus turístico de La Rioja es una forma de recorrer la ciudad y sus paseos, incluido el Parque de la Ciudad. Esta página aclara que no reemplaza un servicio regular.',
      facts: [
        { term: 'Qué es', detail: 'Recorrido turístico de la ciudad.' },
        { term: 'Incluye', detail: 'Parque de la Ciudad en su ruta.' },
        { term: 'No es', detail: 'Servicio regular de colectivo.' },
        { term: 'Verificar', detail: 'Paradas, horario y tarifa.' },
      ],
      sections: [
        {
          heading: 'Cómo usarlo',
          paragraphs: [
            'El recorrido turístico aparece en las guías de la ciudad y pasa por el Parque de la Ciudad. Confirmá paradas, horario y tarifa vigentes con la fuente del servicio antes de viajar.',
          ],
        },
        {
          heading: 'Lo que no reemplaza',
          bullets: [
            'No es un colectivo de línea para el día a día; no asumás frecuencia de ida y vuelta a cualquier hora.',
            'Si necesitás volver sin horario fijo, mejor un colectivo de línea o un remis.',
            'El bus turístico es útil para conocer varios puntos en poco tiempo.',
          ],
        },
        {
          heading: 'Antes de subir',
          paragraphs: [
            'Verificá paradas, horario y tarifa. No publicamos cartel propio porque depende del operador.',
          ],
          callout: 'El bus turístico no reemplaza el transporte público regular; confirmá paradas y horario.',
        },
      ],
      faqs: [
        { q: '¿El bus turístico pasa por el Parque de la Ciudad?', a: 'Sí, el recorrido de La Rioja incluye el parque entre sus puntos. Confirmá paradas y horario vigentes con el servicio.' },
        { q: '¿Sirve para volver sin auto?', a: 'No como transporte regular; mejor un colectivo de línea o remis para la vuelta con horario flexible.' },
        { q: '¿Cuánto cuesta y a qué hora va?', a: 'Depende del operador; confirmá tarifa y horario vigentes antes de viajar.' },
      ],
    },
  },
  {
    slug: 'itinerarios/medio-dia',
    group: 'itinerarios',
    priority: 'A',
    updated: '1 de noviembre de 2026',
    related: ['parque/que-hacer', 'planes/sin-auto', 'parque/mirador-del-lago', 'itinerarios/la-rioja-en-un-dia'],
    content: {
      metaTitle: 'Medio día en el Parque de la Ciudad La Rioja: recorrido sugerido',
      metaDescription:
        'Una vuelta de 2 a 4 horas: sectores a priorizar, pausas y regreso. Ajustá al clima y a la movilidad.',
      kicker: 'Recorrido de 2 a 4 h',
      h1: 'Un medio día en el Parque de la Ciudad',
      lead:
        'Si tenés entre 2 y 4 horas, podés recorrer los sectores principales sin prisa. Esta página propone un orden y cómo ajustarlo.',
      facts: [
        { term: 'Duración', detail: '2 a 4 horas como orientación.' },
        { term: 'Sectores', detail: 'Lago, juegos, descanso.' },
        { term: 'Pausas', detail: 'Sombra y agua.' },
        { term: 'Regreso', detail: 'Marca la puerta usada.' },
      ],
      sections: [
        {
          heading: 'Un orden sugerido',
          paragraphs: [
            'Entrá por la puerta más cercana a lo que querés ver, hacé el recorrido a tu ritmo y dejá el regreso por una puerta que reconozcas. Es una sugerencia de organización, no un circuito señalizado.',
          ],
        },
        {
          heading: 'Qué priorizar',
          bullets: [
            'El mirador del lago, si vas por la tarde o el atardecer.',
            'Los juegos y el picnic, si venís en familia.',
            'Una caminata o ciclovía corta, según el clima.',
          ],
        },
        {
          heading: 'Ajustar al clima',
          paragraphs: [
            'El calor riojano es fuerte. Buscá sombra, llevá agua y evitá el sol fuerte entre 12 y 16 h. Si llueve o hay tormenta, priorizá el regreso seguro.',
          ],
          callout: 'De 2 a 4 horas como orientación; ajustá al calor, al viento y a la movilidad del grupo.',
        },
      ],
      faqs: [
        { q: '¿Cuánto se necesita para recorrer el parque?', a: 'Entre 2 y 4 horas como orientación, según qué sectores uses y la movilidad del grupo.' },
        { q: '¿Qué ver en poco tiempo?', a: 'Priorizá el mirador del lago o los juegos y una pausa con sombra; elegí la puerta más cercana.' },
        { q: '¿Cómo evito el calor?', a: 'Llevá agua, buscá sombra y evitá el sol fuerte entre 12 y 16 h; ajustá el recorrido al clima.' },
      ],
    },
  },
  {
    slug: 'itinerarios/parque-y-dique',
    group: 'itinerarios',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['alrededores/dique-los-sauces', 'itinerarios/medio-dia', 'visita/como-llegar', 'itinerarios/la-rioja-en-un-dia'],
    content: {
      metaTitle: 'Parque de la Ciudad y Dique Los Sauces: recorrido combinado',
      metaDescription:
        'Cómo unir el parque urbano con el dique a ~15 km. Transporte, tiempos y orden sugerido.',
      kicker: 'Parque + dique',
      h1: 'Parque de la Ciudad y Dique Los Sauces',
      lead:
        'Unir el parque urbano con el dique es una salida de agua y naturaleza. Esta página ayuda a organizar el transporte y los tiempos.',
      facts: [
        { term: 'Dique', detail: 'A ~15 km de la ciudad.' },
        { term: 'Transporte', detail: 'Auto o remis.' },
        { term: 'Tiempo', detail: 'Media jornada o más.' },
        { term: 'Orden', detail: 'Parque primero, dique después.' },
      ],
      sections: [
        {
          heading: 'Cómo organizar el día',
          paragraphs: [
            'El parque queda en la ciudad y el dique a unos 15 km, así que conviene visitar primero el parque y luego salir al dique, o viceversa según el horario de sol.',
          ],
        },
        {
          heading: 'Transporte y tiempos',
          bullets: [
            'Confirmá el medio de transporte al dique: auto o remis, ya que queda fuera de la ciudad.',
            'Reservá media jornada para el dique y otra para el parque, según tu ritmo.',
            'Sumá el tiempo de ida y vuelta al dique al de la vuelta a tu alojamiento.',
          ],
        },
        {
          heading: 'Antes de salir',
          paragraphs: [
            'Verificá acceso y condiciones del dique y del parque. No asumamos servicios ni transporte público garantizado hasta el dique.',
          ],
          callout: 'El dique queda ~15 km; organizá transporte y tiempos antes de combinar ambos destinos.',
        },
      ],
      faqs: [
        { q: '¿Se puede visitar el parque y el dique en un día?', a: 'Sí; el dique queda a ~15 km. Visitá primero el parque y luego salí al dique, o ajustá según el sol.' },
        { q: '¿Cómo llego al dique sin auto?', a: 'No asumimos transporte público garantizado; auto o remis son las opciones a confirmar.' },
        { q: '¿Cuánto tiempo lleva todo?', a: 'Media jornada para cada destino como orientación; sumá el transporte entre ambos.' },
      ],
    },
  },
  {
    slug: 'itinerarios/la-rioja-en-un-dia',
    group: 'itinerarios',
    priority: 'B',
    updated: '1 de noviembre de 2026',
    related: ['alrededores', 'itinerarios/medio-dia', 'itinerarios/parque-y-dique', 'comer/sabores-riojanos'],
    content: {
      metaTitle: 'Qué hacer en La Rioja Capital en un día: parque, cultura y comida',
      metaDescription:
        'Una vuelta de un día: Parque de la Ciudad, cultura del centro y comida. Cómo encadenar los paseos.',
      kicker: 'Un día completo',
      h1: 'La Rioja Capital en un día',
      lead:
        'Si tenés un día completo, podés combinar el Parque de la Ciudad con la cultura del centro y una comida riojana. Esta página propone un orden flexible.',
      facts: [
        { term: 'Alcance', detail: 'Parque, centro y comida.' },
        { term: 'Transporte', detail: 'Según origen y destinos.' },
        { term: 'Tiempo', detail: 'Día completo.' },
        { term: 'Orden', detail: 'Flexible según el sol.' },
      ],
      sections: [
        {
          heading: 'Una vuelta posible',
          paragraphs: [
            'Empezá por el Parque de la Ciudad en las horas de menos sol, seguí con la cultura del centro (Calvario Las Padercitas, Paseo Cultural Castro Barros) y cerrá con una comida o merienda en el centro.',
          ],
        },
        {
          heading: 'Cómo encadenar',
          bullets: [
            'Confirmá accesos y transporte entre el parque y el centro.',
            'Aprovechá la tarde para la cultura y el café en la vuelta.',
            'Verificá horarios de restaurantes y cafeterías para tu fecha.',
          ],
        },
        {
          heading: 'Antes de armar el día',
          paragraphs: [
            'Ajustá el orden al clima y al sol; el calor riojano es fuerte al mediodía. Verificá cada destino por separado.',
          ],
          callout: 'Orden flexible según el sol; verificá accesos y horarios de cada parada del día.',
        },
      ],
      faqs: [
        { q: '¿Qué se puede hacer en La Rioja en un día?', a: 'Parque de la Ciudad por la mañana, cultura del centro (Calvario, Castro Barros) y comida o merienda riojana en la vuelta.' },
        { q: '¿El parque y el centro quedan cerca?', a: 'El parque está en la ciudad; confirmá el transporte entre ambos según tu origen.' },
        { q: '¿Conviene el dique en un día en la ciudad?', a: 'El dique queda a ~15 km; si querés incluirlo, reservá media jornada extra y verificá transporte.' },
      ],
    },
  },
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}

export function topicsByGroup(group: TopicGroup): Topic[] {
  return TOPICS.filter((t) => t.group === group);
}

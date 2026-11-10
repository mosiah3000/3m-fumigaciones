export interface ServiceStage {
  number: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  badge: string;
  title: string;
  shortTitle: string;
  shortDescription: string;
  fullDescription: string;
  brochureSummary: string;
  image: string;
  secondaryImages: string[];
  highlights: string[];
  stages?: ServiceStage[];
  catalogItems?: string[];
  importantNote?: string;
  whatsappMessage: string;
  seoTitle: string;
  seoDescription: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category:
    | 'Control de plagas'
    | 'Fumigación'
    | 'Desinfección'
    | 'Limpieza de tanques'
    | 'Equipos'
    | 'Extintores';
  image: string;
  width: number;
  height: number;
}

export const COMPANY_INFO = {
  name: '3M Fumigaciones S.A.S.',
  shortName: '3M Fumigaciones',
  slogan: 'Protegemos tus espacios, cuidamos tu tranquilidad',
  brochureTagline: 'Cuidamos tus espacios. Protegemos tu tranquilidad.',
  address: 'Calle 57B # 62-17, Bogotá, Colombia',
  city: 'Bogotá, Colombia',
  mobile: '312 370 5050',
  mobileRaw: '573123705050',
  phone: '(601) 724 2465',
  phoneRaw: '+576017242465',
  email: 'info@3mfumigaciones.com',
  domain: 'www.3mfumigaciones.com',
  siteUrl: 'https://www.3mfumigaciones.com',
  whatsappBaseUrl: 'https://wa.me/573123705050',
  defaultWhatsAppMessage:
    'Hola, estoy interesado en los servicios de 3M Fumigaciones. Me gustaría solicitar una cotización.',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Calle+57B+%23+62-17,+Bogot%C3%A1,+Colombia&output=embed',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || COMPANY_INFO.defaultWhatsAppMessage;
  return `${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const NAVIGATION_LINKS = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Galería', path: '/galeria' },
  { name: 'Contacto', path: '/contacto' },
];

export const TRUST_BENEFITS = [
  {
    id: 'seguro',
    title: 'Servicio profesional y seguro',
    description:
      'Operaciones ejecutadas por personal técnico equipado con elementos de protección personal y equipos especializados.',
  },
  {
    id: 'cobertura',
    title: 'Atención a hogares, empresas e instituciones',
    description:
      'Soluciones adaptadas a las necesidades de espacios residenciales, comerciales, bodegas, zonas comunes e instituciones en Bogotá.',
  },
  {
    id: 'enfoque',
    title: 'Enfoque preventivo y correctivo',
    description:
      'Combinamos diagnóstico técnico, medidas preventivas y planes de acción correctiva según las condiciones de cada lugar.',
  },
  {
    id: 'cumplimiento',
    title: 'Cumplimiento de requisitos sanitarios aplicables',
    description:
      'Procedimientos estructurados de higiene, control integrado de plagas y mantenimiento de sistemas de almacenamiento de agua.',
  },
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Inspección inicial',
    description:
      'Revisión detallada de las áreas e instalaciones y registro técnico de hallazgos para diagnosticar el estado real del espacio.',
    image: '/images/control-plagas-instalaciones',
  },
  {
    step: '02',
    title: 'Identificación del problema',
    description:
      'Reconocimiento de la plaga, focos de contaminación o requerimientos de seguridad y evaluación de las evidencias de actividad.',
    image: '/images/control-integrado-plagas-epp',
  },
  {
    step: '03',
    title: 'Planificación y ejecución del servicio',
    description:
      'Definición y aplicación de medidas de control, higienización o mantenimiento acordes con las necesidades específicas del lugar.',
    image: '/images/fumigacion-bodega-industrial',
  },
  {
    step: '04',
    title: 'Evaluación y seguimiento',
    description:
      'Monitoreo posterior para evaluar los resultados obtenidos, verificar las condiciones del área y mantener el control preventivo.',
    image: '/images/hero-tecnico-camioneta',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'control-integrado-plagas',
    slug: 'control-integrado-de-plagas',
    badge: '01 · CONTROL INTEGRADO DE PLAGAS',
    title: 'Control Integrado de Plagas (MIP)',
    shortTitle: 'Control Integrado de Plagas',
    shortDescription:
      'Prevención, inspección, identificación, tratamiento y monitoreo de plagas mediante estrategias de manejo integrado.',
    fullDescription:
      'El Manejo Integrado de Plagas (MIP) combina medidas preventivas y correctivas para reducir la presencia de plagas y evitar daños en los espacios donde vivimos y trabajamos. Implementamos un protocolo técnico estructurado que inicia con la inspección rigurosa del área y culmina con el monitoreo continuo de resultados.',
    brochureSummary: 'Manejo integrado de plagas para espacios más seguros y saludables.',
    image: '/images/control-plagas-interior',
    secondaryImages: [
      '/images/control-plagas-instalaciones',
      '/images/fumigacion-bodega-industrial',
      '/images/control-integrado-plagas-epp',
    ],
    highlights: [
      'Enfoque integral que combina medidas preventivas y correctivas.',
      'Atención en bodegas, comercios, oficinas, zonas comunes y hogares.',
      'Aplicación focalizada y nebulización con equipos motorizados y manuales.',
      'Seguimiento técnico para mantener los espacios libres de vectores y plagas.',
    ],
    stages: [
      {
        number: '01',
        title: 'Inspección inicial',
        description: 'Revisión de las áreas y registro de hallazgos.',
      },
      {
        number: '02',
        title: 'Identificación',
        description: 'Reconocimiento de la plaga y de las evidencias de actividad.',
      },
      {
        number: '03',
        title: 'Plan de manejo',
        description: 'Definición de medidas de control acordes con las necesidades del lugar.',
      },
      {
        number: '04',
        title: 'Evaluación y monitoreo',
        description: 'Seguimiento para evaluar los resultados y mantener el control.',
      },
    ],
    whatsappMessage:
      'Hola, estoy interesado en el servicio de Control Integrado de Plagas (MIP) de 3M Fumigaciones. Me gustaría solicitar una cotización.',
    seoTitle: 'Control Integrado de Plagas (MIP) en Bogotá | 3M Fumigaciones S.A.S.',
    seoDescription:
      'Servicio profesional de Control Integrado de Plagas (MIP) y fumigación en Bogotá para hogares, empresas, bodegas e instituciones. Solicita tu cotización.',
  },
  {
    id: 'limpieza-y-desinfeccion',
    slug: 'limpieza-y-desinfeccion',
    badge: '02 · LIMPIEZA Y DESINFECCIÓN',
    title: 'Limpieza y Desinfección',
    shortTitle: 'Limpieza y Desinfección',
    shortDescription:
      'Servicios de higienización y desinfección de instalaciones, superficies y espacios.',
    fullDescription:
      'Desarrollamos jornadas de higienización y desinfección ambiental y de superficies para instalaciones empresariales, institucionales, zonas comunes, áreas recreativas y espacios residenciales. Nuestro servicio se adapta a las características operativas de cada lugar para reducir la carga de microorganismos y promover entornos saludables.',
    brochureSummary: 'Higiene en cada espacio: servicios para instalaciones, zonas comunes y áreas de trabajo.',
    image: '/images/desinfeccion-fachada-entrada',
    secondaryImages: [
      '/images/nebulizacion-exterior-porton',
      '/images/fumigacion-zonas-verdes',
      '/images/desinfeccion-parques-recreativos',
    ],
    highlights: [
      'Limpieza y desinfección de instalaciones interiores y exteriores.',
      'Atención de espacios comunes, áreas de trabajo y zonas recreativas.',
      'Servicios de desinfección programados según las necesidades del lugar.',
      'Equipos de termonebulización y aspersión de alto alcance.',
    ],
    stages: [
      {
        number: '01',
        title: 'Diagnóstico del espacio',
        description: 'Evaluación de las áreas de tránsito, superficies críticas y zonas comunes a intervenir.',
      },
      {
        number: '02',
        title: 'Higienización previa',
        description: 'Adecuación y preparación de las áreas para maximizar el alcance del agente desinfectante.',
      },
      {
        number: '03',
        title: 'Aplicación y desinfección',
        description: 'Intervención mediante nebulización o aspersión controlada en instalaciones y superficies.',
      },
    ],
    whatsappMessage:
      'Hola, estoy interesado en el servicio de Limpieza y Desinfección de instalaciones de 3M Fumigaciones. Me gustaría solicitar una cotización.',
    seoTitle: 'Limpieza y Desinfección de Instalaciones en Bogotá | 3M Fumigaciones S.A.S.',
    seoDescription:
      'Servicios profesionales de higienización y desinfección de instalaciones, zonas comunes y áreas de trabajo en Bogotá. Atención a hogares y empresas.',
  },
  {
    id: 'limpieza-tanques-agua',
    slug: 'limpieza-de-tanques-de-agua-potable',
    badge: '02 · SISTEMAS DE ALMACENAMIENTO DE AGUA',
    title: 'Limpieza y Desinfección de Tanques de Agua Potable',
    shortTitle: 'Limpieza de Tanques de Agua',
    shortDescription:
      'Inspección, lavado y desinfección de tanques de almacenamiento de agua potable.',
    fullDescription:
      'La limpieza y desinfección periódica de los tanques de almacenamiento ayuda a conservar las condiciones del agua potable en conjuntos residenciales, edificios, empresas e instituciones. Se recomienda realizarla como mínimo cada seis meses y después de reparaciones o cuando se detecten daños o infiltraciones.',
    brochureSummary:
      'Mantenimiento higiénico periódico para conservar las condiciones óptimas del agua almacenada.',
    image: '/images/limpieza-tanques-agua-potable',
    secondaryImages: [
      '/images/equipo-aplicacion-motorizado',
      '/images/hero-tecnico-camioneta',
    ],
    highlights: [
      'Recomendado como mínimo cada seis (6) meses.',
      'Indispensable después de reparaciones o ante detección de daños o infiltraciones.',
      'Protocolo técnico en 3 etapas: Inspección, Limpieza y Desinfección.',
      'Personal dotado con traje de bioseguridad e implementos adecuados.',
    ],
    stages: [
      {
        number: '01',
        title: 'Inspección y diagnóstico',
        description: 'Revisión de las condiciones físicas y de funcionamiento del tanque.',
      },
      {
        number: '02',
        title: 'Limpieza o lavado',
        description: 'Retiro de suciedad, sedimentos y lavado profundo de las superficies internas.',
      },
      {
        number: '03',
        title: 'Desinfección',
        description: 'Aplicación de métodos físicos o químicos para reducir microorganismos.',
      },
    ],
    whatsappMessage:
      'Hola, estoy interesado en el servicio de Limpieza y Desinfección de Tanques de Agua Potable de 3M Fumigaciones. Me gustaría solicitar una cotización.',
    seoTitle: 'Limpieza y Desinfección de Tanques de Agua Potable en Bogotá | 3M Fumigaciones',
    seoDescription:
      'Inspección, lavado y desinfección de tanques de almacenamiento de agua potable en Bogotá. Mantenimiento semestral para edificios, empresas y hogares.',
  },
  {
    id: 'venta-recarga-extintores',
    slug: 'venta-y-recarga-de-extintores',
    badge: '03 · SEGURIDAD CONTRA INCENDIOS',
    title: 'Venta y Recarga de Extintores',
    shortTitle: 'Venta y Recarga de Extintores',
    shortDescription: 'Soluciones para la seguridad y protección contra incendios.',
    fullDescription:
      'Ofrecemos soluciones para contar con equipos de extinción adecuados y en óptimas condiciones de uso. Suministramos y recargamos distintas clases de extintores y agentes de extinción, brindando asesoría para que la selección corresponda exactamente al tipo de riesgo y a las características del espacio.',
    brochureSummary:
      'Soluciones para contar con equipos de extinción adecuados y en condiciones de uso.',
    image: '/images/extintor-solkaflam-123',
    secondaryImages: [
      '/images/extintor-multiproposito-abc',
      '/images/esquema-tecnico-extintor',
    ],
    highlights: [
      'Suministro de equipos para diferentes clases de riesgo en comercios, oficinas, copropiedades e industrias.',
      'Servicio de recarga y revisión de condiciones operativas del extintor.',
      'Asesoría técnica para identificar el agente extintor acorde al espacio.',
      'Señalización y equipamiento complementario para seguridad contra incendios.',
    ],
    catalogItems: [
      'Extintores de agua y agua pulverizada.',
      'Extintores de espuma (AFFF).',
      'Extintores de dióxido de carbono (CO₂).',
      'Extintores de polvo químico seco ABC.',
      'Extintores para fuegos clase D y clase K.',
      'Agentes limpios (Solkaflam 123).',
    ],
    importantNote:
      'Importante: el tipo de extintor debe seleccionarse de acuerdo con el riesgo y las recomendaciones técnicas aplicables. Solicita asesoría para identificar la alternativa adecuada.',
    whatsappMessage:
      'Hola, estoy interesado en el servicio de Venta y Recarga de Extintores de 3M Fumigaciones. Me gustaría recibir asesoría y cotización.',
    seoTitle: 'Venta y Recarga de Extintores en Bogotá | 3M Fumigaciones S.A.S.',
    seoDescription:
      'Venta, recarga y mantenimiento de extintores en Bogotá: multipropósito ABC, Solkaflam 123, CO2, agua, espuma AFFF y clase K. Solicita tu cotización.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Unidad Móvil y Operación Técnica 3M Fumigaciones',
    description:
      'Técnico especialista con equipo de aplicación motorizado junto al vehículo corporativo de 3M Fumigaciones S.A.S.',
    category: 'Equipos',
    image: '/images/hero-tecnico-camioneta',
    width: 1078,
    height: 700,
  },
  {
    id: 'gal-2',
    title: 'Control Integrado de Plagas en Instalaciones Sanitarias',
    description:
      'Intervención técnica preventiva y correctiva en áreas interiores con equipo motorizado de espalda.',
    category: 'Control de plagas',
    image: '/images/control-plagas-interior',
    width: 490,
    height: 410,
  },
  {
    id: 'gal-3',
    title: 'Inspección y Tratamiento en Áreas Operativas',
    description:
      'Recorrido de control y aplicación en pasillos e instalaciones empresariales bajo protocolos de bioseguridad.',
    category: 'Control de plagas',
    image: '/images/control-plagas-instalaciones',
    width: 514,
    height: 410,
  },
  {
    id: 'gal-4',
    title: 'Fumigación en Bodegas y Centros de Almacenamiento',
    description:
      'Aplicación mediante nebulización en bodega de almacenamiento con estibas y mercancía embalada.',
    category: 'Fumigación',
    image: '/images/fumigacion-bodega-industrial',
    width: 1038,
    height: 230,
  },
  {
    id: 'gal-5',
    title: 'Desinfección de Accesos y Fachadas Residenciales',
    description:
      'Servicio de higienización y control de vectores en entradas, fachadas y zonas perimetrales.',
    category: 'Desinfección',
    image: '/images/desinfeccion-fachada-entrada',
    width: 500,
    height: 410,
  },
  {
    id: 'gal-6',
    title: 'Nebulización en Portones y Áreas Comunes Exteriores',
    description:
      'Aplicación de desinfectantes e insecticidas en zonas exteriores de alto tránsito vehicular y peatonal.',
    category: 'Desinfección',
    image: '/images/nebulizacion-exterior-porton',
    width: 514,
    height: 196,
  },
  {
    id: 'gal-7',
    title: 'Equipos Motorizados de Aplicación Profesional',
    description:
      'Operación con equipos de aspersión y nebulización calibrados para coberturas uniformes.',
    category: 'Equipos',
    image: '/images/equipo-aplicacion-motorizado',
    width: 514,
    height: 196,
  },
  {
    id: 'gal-8',
    title: 'Lavado y Desinfección de Tanques de Agua Potable',
    description:
      'Limpieza profunda de superficies internas en tanque de almacenamiento de agua potable con traje de bioseguridad.',
    category: 'Limpieza de tanques',
    image: '/images/limpieza-tanques-agua-potable',
    width: 260,
    height: 210,
  },
  {
    id: 'gal-9',
    title: 'Extintor Agente Limpio Solkaflam 123',
    description:
      'Equipo de extinción ideal para equipos eléctricos, sistemas y oficinas sin dejar residuos.',
    category: 'Extintores',
    image: '/images/extintor-solkaflam-123',
    width: 360,
    height: 450,
  },
  {
    id: 'gal-10',
    title: 'Extintor Multipropósito Polvo Químico Seco ABC',
    description:
      'Extintor presurizado multipropósito para fuegos clase A, B y C en instalaciones comerciales y residenciales.',
    category: 'Extintores',
    image: '/images/extintor-multiproposito-abc',
    width: 310,
    height: 450,
  },
  {
    id: 'gal-11',
    title: 'Componentes Técnicos del Equipo de Extinción',
    description:
      'Esquema de partes verificadas en el mantenimiento y recarga: manómetro, válvula, cilindro, nitrógeno y agente extintor.',
    category: 'Extintores',
    image: '/images/esquema-tecnico-extintor',
    width: 312,
    height: 448,
  },
  {
    id: 'gal-12',
    title: 'Aplicación Focalizada para Control de Plagas Rastreras',
    description:
      'Tratamiento técnico localizado en zócalos y puntos críticos contra insectos rastreros y arácnidos.',
    category: 'Control de plagas',
    image: '/images/control-integrado-plagas-epp',
    width: 500,
    height: 408,
  },
  {
    id: 'gal-13',
    title: 'Fumigación de Zonas Verdes y Jardines',
    description:
      'Intervención exterior en jardines y áreas comunes para el manejo de mosquitos, zancudos y vectores.',
    category: 'Fumigación',
    image: '/images/fumigacion-zonas-verdes',
    width: 514,
    height: 196,
  },
  {
    id: 'gal-14',
    title: 'Desinfección de Parques y Zonas Recreativas',
    description:
      'Higienización de mobiliario exterior, parques biosaludables y áreas recreativas comunitarias.',
    category: 'Desinfección',
    image: '/images/desinfeccion-parques-recreativos',
    width: 514,
    height: 196,
  },
];

export const CONTACT_DATA = {
  company: {
    name: "Alsasia SRL",
    tagline: "Cien años de tradición ganadera",
    founding: 1924,
    ruc: "20-12345678-9",
    description:
      "Criamos Brahman y Angus de élite en el corazón del Beni. Selección genética, tradición familiar y pasión por la ganadería de excelencia desde 1924.",
    certifications: [
      "SENASAG Habilitado",
      "Trazabilidad Bovina",
      "Asociación Rural Argentina",
    ],
  },
  address: {
    street: "Santa Rosa de Yacuma",
    locality: "Santa Rosa de Yacuma",
    province: "Yacuma",
    country: "Bolivia",
    postalCode: "5613",
    googleMapsUrl:
      "https://www.google.com/maps/place/Santa+Rosa+de+Yacuma,+Bolivia/@-15.574544,-70.7381186,6.84z/data=!4m6!3m5!1s0x93df252626224f75:0xa70d94d778307da7!8m2!3d-14.0793626!4d-66.7928929!16s%2Fm%2F03qhykj?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
  },
  phone: {
    main: "+54 (261) 420-7890",
    whatsapp: "+54 9 261 420-7890",
    alternate: "+54 (261) 420-7891",
  },
  email: {
    general: "contacto@alsasia.com",
    ventas: "ventas@alsasia.com",
    administracion: "admin@alsasia.com",
  },
  social: {
    instagram: "https://instagram.com/alsasia_ganaderia",
    facebook: "https://facebook.com/alsasiasrl",
    youtube: "https://youtube.com/@alsasia",
  },
} as const;

export const LEGAL_LINKS = [
  { label: "Términos y Condiciones", href: "/terminos" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" },
] as const;

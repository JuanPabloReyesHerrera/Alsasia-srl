import type { DeclaracionItem, Pilar } from "./types";

// ── Section copy ──────────────────────────────────────────────────────────────

export const SECTION_CONTENT = {
  eyebrow: "La empresa",
  heading: ["Un siglo de", "propósito"],
  pilaresEyebrow: "Pilares estratégicos",
} as const;

// ── Visión & Misión ───────────────────────────────────────────────────────────

export const DECLARACIONES: DeclaracionItem[] = [
  {
    key: "vision",
    label: "Visión",
    text: "Ser la empresa ganadera familiar de referencia en las pampas de Santa Rosa del Yacuma, reconocida por producir genética Brahman de excelencia adaptada al entorno beniano, consolidando un legado que trasciende generaciones a través de un modelo productivo rentable, ético y sostenible, que dignifica a las familias que forman parte de ella y asegura el crecimiento continuo de sus unidades de negocio para las generaciones venideras.",
  },
  {
    key: "mision",
    label: "Misión",
    text: "Producir y desarrollar genética Brahman de alto valor productivo, adaptada a las condiciones de las pampas de Santa Rosa del Yacuma y Beni, integrando a las nuevas generaciones de la familia Alsacia en la gestión y evolución del negocio. Operamos con un equipo profesional ganadero comprometido con alcanzar estándares productivos de excelencia, velando por el bienestar de cada familia que trabaja con nosotros y diversificando nuestras unidades de negocio para garantizar prosperidad a largo plazo.",
  },
];

// ── 6 Pilares estratégicos ────────────────────────────────────────────────────

export const PILARES: Pilar[] = [
  {
    id: "genetica",
    number: "01",
    title: "Genética Brahman",
    subtitle: "Adaptada al clima y suelo de las pampas benianas",
  },
  {
    id: "excelencia",
    number: "02",
    title: "Excelencia productiva",
    subtitle: "Estándares de referencia en el ganado beniano",
    metric: "80% preñez · <5% pérdida",
  },
  {
    id: "bienestar",
    number: "03",
    title: "Bienestar humano",
    subtitle: "Familias dignas dentro de la empresa",
  },
  {
    id: "legado",
    number: "04",
    title: "Legado familiar",
    subtitle: "Integración activa de nuevas generaciones",
  },
  {
    id: "crecimiento",
    number: "05",
    title: "Crecimiento",
    subtitle: "Diversificación de unidades de negocio",
  },
  {
    id: "equipo",
    number: "06",
    title: "Equipo profesional",
    subtitle: "Talento técnico especializado en ganadería",
  },
];

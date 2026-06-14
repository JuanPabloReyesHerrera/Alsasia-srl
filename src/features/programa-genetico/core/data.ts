import type { GeneticCriterion, PhenotypicAspect } from "./types";

// ── Section copy ─────────────────────────────────────────────────────────────

export const SECTION_CONTENT = {
  eyebrow: "Programa Genético",
  heading: ["Selección con base", "científica"],
  intro:
    "El avance genético requiere la interacción entre el medio ambiente, el bienestar animal, la nutrición, los criterios de selección y la calidad de la información. Trabajamos con base en factores genéticos para detectar y diseminar dentro del hato los ejemplares que presentan lo mejor de las características de la raza Brahman.",
  methodology:
    "Esta metodología está diseñada a largo plazo para calcular con exactitud los valores genéticos de cada ejemplar, constituyendo una estrategia más eficiente con resultados más predecibles.",
  criteriaTitle: "Criterios de selección",
  phenotypicTitle: "Evaluación fenotípica",
  partnership: {
    eyebrow: "Alianza certificada",
    org: "ANCP",
    orgFull: "Associação Nacional de Criadores e Pesquisadores",
    stat: "~600",
    statLabel: "animales con evaluación genética activa",
  },
} as const;

// ── 10 genetic selection criteria ────────────────────────────────────────────

export const GENETIC_CRITERIA: GeneticCriterion[] = [
  {
    id: 1,
    number: "01",
    title: "Fertilidad",
    detail: "Base fundamental de toda selección productiva",
  },
  {
    id: 2,
    number: "02",
    title: "Circunferencia escrotal",
    detail: "No menor a 30 cm a los 24 meses de edad",
  },
  {
    id: 3,
    number: "03",
    title: "Frame moderado",
    detail: "Biotipo armónico adaptado al entorno beniano",
  },
  {
    id: 4,
    number: "04",
    title: "Temperamento",
    detail: "Docilidad para manejo eficiente y seguro",
  },
  {
    id: 5,
    number: "05",
    title: "Precocidad",
    detail: "Definición temprana de conformación muscular",
  },
  {
    id: 6,
    number: "06",
    title: "Ganancia de peso",
    detail: "Post destete, indicador económico determinante",
  },
  {
    id: 7,
    number: "07",
    title: "Aplomos",
    detail: "Conformación correcta de miembros y movilidad",
  },
  {
    id: 8,
    number: "08",
    title: "Facilidad de parto",
    detail: "Machos ≥ 35 kg · Hembras ≥ 30 kg al nacer",
  },
  {
    id: 9,
    number: "09",
    title: "Habilidad materna",
    detail: "Instinto y capacidad de crianza activa",
  },
  {
    id: 10,
    number: "10",
    title: "Prepucio corto",
    detail: "Previene afecciones reproductivas en machos",
  },
];

// ── 4 phenotypic evaluation aspects ──────────────────────────────────────────

export const PHENOTYPIC_ASPECTS: PhenotypicAspect[] = [
  {
    id: "general",
    title: "Apariencia general",
    description:
      "Se evalúa la caracterización racial, el balance corporal y la capacidad de producción de carne. Los animales deben presentarse sanos, vigorosos y con desarrollo acorde a su edad. La mayor precocidad en la definición muscular recibe mayor puntaje por calidad de canal.",
    items: [
      "Caracterización racial",
      "Balance corporal",
      "Vigor y sanidad",
      "Calidad de canal",
    ],
  },
  {
    id: "estructura",
    title: "Estructura",
    description:
      "Fortaleza de la estructura ósea en función de la productividad. Se buscan animales con buena apertura de pecho, arco de costillas amplio, región dorso-lumbar larga y fuerte, y anca larga y amplia con leve desnivel.",
    items: [
      "Capacidad corporal",
      "Nivelación de dorso",
      "Nivelación de anca",
      "Apertura de pecho",
    ],
  },
  {
    id: "aplomos",
    title: "Aplomos",
    description:
      "Conformación y dirección de miembros anteriores y posteriores, articulaciones, cuartillas y pezuñas. El animal debe desplazarse con facilidad y solidez en todo tipo de terreno beniano.",
    items: [
      "Miembros anteriores",
      "Miembros posteriores",
      "Articulaciones",
      "Pezuñas y cuartillas",
    ],
  },
  {
    id: "sexual",
    title: "Características sexuales",
    description:
      "Evaluación de masculinidad en machos y feminidad en hembras. En machos es fundamental la evaluación de testículos por forma, tamaño, posición y circunferencia escrotal, además de la conformación y dirección del prepucio.",
    items: [
      "Circunferencia testicular",
      "Posición testicular",
      "Conformación prepucial",
      "Orificio prepucial",
    ],
  },
];

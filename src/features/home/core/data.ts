import { Photo } from "./types";

export const CAROUSEL_CONFIG = {
  intervalMs: 5000,
  transitionMs: 600,
} as const;

export const PHOTOS: Photo[] = [
  {
    id: 1,
    src: "/assets/carousel/foto1.jpeg",
    alt: "Don Antonio",
    caption: "Linaje Centenario",
  },
  {
    id: 2,
    src: "/assets/carousel/foto2.jpeg",
    alt: "Amanecer en la estancia",
    caption: "Campos de Alsasia",
  },
  {
    id: 3,
    src: "/assets/carousel/foto3.jpeg",
    alt: "Ganado pastando al atardecer",
    caption: "Tradición y Herencia",
  },
  {
    id: 4,
    src: "/assets/carousel/foto4.jpeg",
    alt: "Rebaño en la pradera",
    caption: "100 Años de Excelencia",
  },
  {
    id: 5,
    src: "/assets/carousel/foto5.jpeg",
    alt: "Toro de raza pura",
    caption: "Selección Genética",
  },
];

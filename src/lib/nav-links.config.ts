/* ─────────────────────────────────────────────
   Tipos
   ───────────────────────────────────────────── */
import { siteConfig } from "@/config/site";

export type NavLink = {
  label: string;
  href: string;
  external?: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  // { label: "Catálogo", href: "/catalogo" },
  { label: "Programa Genético", href: "/programa-genetico" },
  {
    label: "Visión, Misión Y Pilares De La Empresa",
    href: "/vision-mision-y-pilares-de-la-empresa",
  },
  { label: "Contacto", href: "/contacto" },
  // { label: "Legado", href: "/legado" },
  // { label: "Instalaciones", href: "/instalaciones" },
  // { label: "Remates", href: "/remates" },
  // { label: "Equipo", href: "/equipo" },
] as const;

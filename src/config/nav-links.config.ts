/* ─────────────────────────────────────────────
   Tipos
   ───────────────────────────────────────────── */
import { siteConfig } from "@/config/site";

export type NavLink = {
  label: string;
  href: string;
  external?: string;
};

// export const NAV_LINKS: NavLink[] = [
//   { label: "Inicio", href: "/" },
//   // { label: "Catálogo", href: "/catalogo" },
//   // { label: "Programa Genético", href: "/programa-genetico" },
//   {label: siteConfig.units.alsasia.title, href: siteConfig.units.alsasia.href},
//   { label: "Contacto", href: "/contacto" },
//   // { label: "Instalaciones", href: "/instalaciones" },
//   // { label: "Remates", href: "/remates" },
//   // { label: "Equipo", href: "/equipo" },
// ] as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  ...Object.values(siteConfig.units)
    .filter((unit) => unit.href !== "/")
    .map((unit) => ({
      label: unit.title,
      href: unit.href,
    })),
  {
    label: "Visión, Misión Y Pilares De La Empresa",
    href: "/vision-mision-y-pilares-de-la-empresa",
  },
  { label: "Legado", href: "/legado" },
  { label: "Contacto", href: "/contacto" },
];

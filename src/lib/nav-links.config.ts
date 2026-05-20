/* ─────────────────────────────────────────────
   Tipos
   ───────────────────────────────────────────── */

export type NavLink = {
  label: string;
  href: string;
  external?: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Legado", href: "/legado" },
  { label: "Instalaciones", href: "/instalaciones" },
  { label: "Remates", href: "/remates" },
  { label: "Asesoría Genética", href: "/genetica" },
  { label: "Equipo", href: "/equipo" },
  { label: "Contacto", href: "/contacto" },
] as const;

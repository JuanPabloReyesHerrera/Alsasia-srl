import { Beef, Award, TreePine } from "lucide-react";
import { FooterBrand } from "./FooterBrand";
import { FooterNav } from "./FooterNav";
import { FooterContact } from "./FooterContact";
import { FooterBottom } from "./FooterBottom";
import { CONTACT_DATA } from "./contact-data";

/* ── Heritage badges superiores ──────────────────────────── */
const HERITAGE_BADGES = [
  { icon: Beef, label: "Genética de Élite" },
  { icon: Award, label: "100 Años de Excelencia" },
  { icon: TreePine, label: "Campo Propio, Beni, Bolivia" },
] as const;

/* ─────────────────────────────────────────────────────────── */

export function Footer() {
  return (
    /*
      La clase `dark` fuerza el tema oscuro en todo el footer
      independientemente del tema global de la página.
      Esto funciona con: @custom-variant dark (&:is(.dark *))
    */
    <footer className="dark overflow-hidden bg-background w-full">
      {/* Textura de veta de madera */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(88deg, transparent, transparent 2px, rgba(180,120,60,0.9) 2px, rgba(180,120,60,0.9) 3px),
            repeating-linear-gradient(92deg, transparent, transparent 8px, rgba(140,80,30,0.5) 8px, rgba(140,80,30,0.5) 9px)
          `,
        }}
      />

      {/* Línea de brillo superior */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklch, var(--accent) 50%, transparent), transparent)",
        }}
      />

      {/* ── Heritage Banner ── */}
      <div className="relative border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-5">
              {HERITAGE_BADGES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-accent/60"
                >
                  <Icon size={13} strokeWidth={1.5} />
                  <span className="font-sans text-[0.68rem] tracking-widest uppercase">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <span className="font-sans text-[0.68rem] tracking-widest uppercase text-foreground/40">
              Est. {CONTACT_DATA.company.founding}
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          {/* Marca — 4 columnas */}
          <div className="md:col-span-4">
            <FooterBrand />
          </div>

          {/* Navegación — 2 + 2 columnas */}
          <div className="md:col-span-2">
            {/* FooterNav renderiza dos columnas separadas; aquí va la primera */}
            <FooterNavCol slice="first" />
          </div>
          <div className="md:col-span-2">
            <FooterNavCol slice="second" />
          </div>

          {/* Contacto — 4 columnas */}
          <div className="md:col-span-4">
            <FooterContact />
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

/* ── Helper: divide NAV_LINKS en dos columnas ─────────────── */
import { NAV_LINKS } from "@/config/nav-links.config";
import { FooterNavSection } from "./FooterNav";

function FooterNavCol({ slice }: { slice: "first" | "second" }) {
  const mid = Math.ceil(NAV_LINKS.length / 2);
  const links =
    slice === "first" ? NAV_LINKS.slice(0, mid) : NAV_LINKS.slice(mid);
  const title = slice === "first" ? "Rancho" : "Servicios";
  return <FooterNavSection title={title} links={links} />;
}

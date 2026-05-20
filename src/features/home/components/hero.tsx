/**
 * hero.tsx — Cabaña Nogal del Rio
 *
 * Layout:
 *   Desktop → imagen full-bleed + panel de texto a la derecha
 *   Mobile  → imagen full-bleed + panel de texto centrado abajo
 *
 * Tipografía:
 *   font-serif → Playfair Display (inyectada vía next/font en layout.tsx)
 *   font-sans  → Jost (ídem)
 *   Ambas definidas en @theme del globals.css — sin tailwind.config.ts
 *
 * Colores:
 *   Todos via CSS vars del globals.css — bg-primary, text-accent, etc.
 */

import { Presentations } from "./presentations";
import { slideIn, cn } from "@/lib/utils";
import { HeroTitle } from "./hero-title";
import { BackgroundImage } from "@/components/ui/background-image";

/* ─────────────────────────────────────────────
   Props
   ───────────────────────────────────────────── */

interface HeroProps {
  /** Coloca la imagen en /public/images/hero.jpg */
  imageSrc?: string;
  imageAlt?: string;
}

/* ─────────────────────────────────────────────
   Componente
   ───────────────────────────────────────────── */

export function Hero({
  imageSrc = "/assets/hero.png",
  imageAlt = "Manada de toros Brahman al atardecer — Santa Rosa, Beni",
}: HeroProps) {
  return (
    <>
      {/* ── Imagen de fondo ─────────────────────────── */}
      <BackgroundImage imageSrc={imageSrc} alt={imageAlt} />
      <section
        aria-label="Hero principal"
        className="relative flex min-h-svh w-full flex-col overflow-hidden pb-18 mt-[-100dvh]"
      >
        <OverlayHero />
        {/* ── Contenido ────────────────────────────────── */}
        <HeroTitle />
        <Presentations />

        {/* ── Badge superior izquierdo (solo desktop) ── */}

        <p
          aria-hidden
          className={cn(
            "absolute left-2 md:left-8 top-4 md:top-10 z-10 text-[8px] font-light tracking-[0.26em] uppercase",
            slideIn.left,
            "duration-500",
          )}
          style={{ color: "hsl(var(--accent) / 0.50)" }}
        >
          — Genética de Élite · Brahman Americano —
        </p>
        <LowerSignature />
      </section>
    </>
  );
}

function OverlayHero() {
  return (
    <>
      {/* ── Overlay desktop ──────────────────────────── */}
      <div
        aria-hidden
        className="bg-linear-to-l from-background to-transparent absolute inset-0 hidden md:block"
      />

      {/* ── Overlay mobile ───────────────────────────── */}
      <div
        aria-hidden
        className="bg-linear-to-t from-surface-muted to-transparent absolute inset-0 block md:hidden"
      />
    </>
  );
}

/* ── Firma — inferior izquierdo (solo desktop) ── */
function LowerSignature() {
  return (
    <>
      <div
        aria-hidden
        className={cn(
          "absolute bottom-22 left-8 z-10 hidden items-end gap-4 md:flex",
          slideIn.left,
          "duration-1000",
        )}
      >
        <span className="block w-px self-stretch bg-accent-warm" />
        <div className="flex flex-col gap-1.5">
          <p className="font-serif text-[13px] font-normal italic leading-none text-foreground/85">
            Nogales del Rio
          </p>
          <p
            className="text-[7.5px] font-light leading-none tracking-[0.24em] uppercase"
            style={{ color: "hsl(var(--accent))" }}
          >
            Santa Rosa · Beni · Bolivia
          </p>
          <p className="font-serif text-[11px] leading-none text-foreground/30">
            Est. 1924
          </p>
        </div>
      </div>
    </>
  );
}

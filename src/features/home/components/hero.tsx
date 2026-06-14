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
import { PhotoCarousel } from "./photo-carousel";

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
    <div className=" relative flex flex-col h-[calc(200dvh-var(--spacing-navbar))] overflow-hidden">
      {/* ── Imagen de fondo ─────────────────────────── */}
      <BackgroundImage imageSrc={imageSrc} alt={imageAlt} />
      <section
        aria-label="Hero principal"
        className="flex flex-col h-[calc(100dvh-var(--spacing-navbar))] w-full"
      >
        {/* ── Contenido ────────────────────────────────── */}
        <OverlayHero />
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
      </section>
      <section className="w-full h-dvh">
        <PhotoCarousel />
      </section>
    </div>
  );
}

function OverlayHero() {
  return (
    <>
      <div
        aria-hidden
        className="bg-linear-to-t md:bg-linear-to-l from-surface via-70% md:via-transparent to-90% to-transparent fixed inset-0 block"
      />
    </>
  );
}

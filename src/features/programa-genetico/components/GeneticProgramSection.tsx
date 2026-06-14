import {
  GeneticCriteriaList,
  PhenotypicTabs,
  PartnershipStat,
  SectionHeader,
} from "./ui";
import { SECTION_CONTENT } from "../core/data";

export function GeneticProgramSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label={SECTION_CONTENT.eyebrow}
      style={{ backgroundColor: "var(--primary)" }}
    >
      {/* Subtle dot-grid texture over the wine-red background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, color-mix(in oklch, var(--primary-foreground) 7%, transparent) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        {/*
         * Two-column layout (desktop):
         *  Left  — header + ANCP stat + methodology note
         *  Right — 10 criteria list
         *
         * Stacks to single column on mobile.
         */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.65fr] gap-12 lg:gap-20">
          {/* ── Left column ─────────────────────────────── */}
          <div className="flex flex-col gap-8">
            <SectionHeader />
            <PartnershipStat />

            {/* Methodology footnote */}
            <p
              className="text-[11px] leading-relaxed"
              style={{
                color:
                  "color-mix(in oklch, var(--primary-foreground) 45%, transparent)",
              }}
            >
              {SECTION_CONTENT.methodology}
            </p>
          </div>

          {/* ── Right column ────────────────────────────── */}
          <div className="lg:pt-14">
            <GeneticCriteriaList />
          </div>
        </div>

        {/* ── Full-width phenotypic evaluation tabs ─────── */}
        <PhenotypicTabs />
      </div>
    </section>
  );
}

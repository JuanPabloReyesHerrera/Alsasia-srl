import { SectionHeader } from "./ui/SectionHeader";
import { VisionMisionPanels } from "./ui/VisionMisionPanels";
import { PilaresGrid } from "./ui/PilaresGrid";
import { SECTION_CONTENT } from "../core/data";

export function VisionMisionSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label={SECTION_CONTENT.eyebrow}
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Faint warm gradient blob — top-right corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--accent) 6%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <SectionHeader />
        <VisionMisionPanels />
        <PilaresGrid />
      </div>
    </section>
  );
}

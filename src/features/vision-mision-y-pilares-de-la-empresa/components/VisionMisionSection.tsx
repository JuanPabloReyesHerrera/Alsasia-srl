import { SectionHeader } from "./ui/SectionHeader";
import { VisionMisionPanels } from "./ui/VisionMisionPanels";
import { PilaresGrid } from "./ui/PilaresGrid";
import { SECTION_CONTENT } from "../core/data";
import { BackgroundImage } from "@/components/ui/background-image";

export function VisionMisionSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label={SECTION_CONTENT.eyebrow}
      // style={{ backgroundColor: "var(--background)" }}
    >
      {/* Faint warm gradient blob — top-right corner */}
      {/* <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--accent) 6%, transparent) 0%, transparent 70%)",
        }}
      /> */}
      {/* OVERLAY */}
      <div
        aria-hidden
        className="bg-linear-to-t md:bg-linear-to-l from-surface/90 from-20% to-transparent fixed inset-0 h-dvh"
      />
      <BackgroundImage
        imageSrc="/assets/vision-mision-y-pilares-de-la-empresa.jpeg"
        alt="no"
        imageClassName="object-[70%_center]"
      />
      {/* OVERLAY */}
      <div
        aria-hidden
        className="bg-linear-to-t md:bg-linear-to-l from-surface/40 from-50% to-transparent fixed inset-0 h-dvh"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 animate-in fade-in-0 duration-500">
        <SectionHeader />
        <VisionMisionPanels />
        <PilaresGrid />
      </div>
    </section>
  );
}

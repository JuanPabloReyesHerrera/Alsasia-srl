import { PILARES, SECTION_CONTENT } from "../../core/data";
import { PillarCard } from "./PillarCard";

export function PilaresGrid() {
  return (
    <div
      className="mt-16 pt-12"
      style={{
        borderTop:
          "1px solid color-mix(in oklch, var(--border) 80%, transparent)",
      }}
    >
      {/* Label row */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-eyebrow">{SECTION_CONTENT.pilaresEyebrow}</span>
        <span
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(to right, color-mix(in oklch, var(--accent) 25%, transparent), transparent)",
          }}
        />
      </div>

      {/* 3 × 2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PILARES.map((pilar) => (
          <PillarCard key={pilar.id} pilar={pilar} />
        ))}
      </div>
    </div>
  );
}

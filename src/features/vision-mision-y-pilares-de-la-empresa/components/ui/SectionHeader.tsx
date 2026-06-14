import { SECTION_CONTENT } from "../../core/data";

export function SectionHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
      {/* Left — eyebrow + heading */}
      <div>
        <div className="flex items-center gap-4 mb-5">
          <span className="rule-accent" />
          <span className="text-eyebrow">{SECTION_CONTENT.eyebrow}</span>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.1]">
          <span className="block text-foreground">
            {SECTION_CONTENT.heading[0]}
          </span>
          <span className="block text-gradient-gold">
            {SECTION_CONTENT.heading[1]}
          </span>
        </h2>
      </div>

      {/* Right — thin decorative vertical line */}
      <div
        className="hidden sm:block self-stretch"
        style={{
          width: "1px",
          minHeight: "4rem",
          background:
            "linear-gradient(to bottom, transparent, color-mix(in oklch, var(--accent) 30%, transparent), transparent)",
        }}
      />
    </div>
  );
}

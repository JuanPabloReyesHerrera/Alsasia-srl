import { SECTION_CONTENT } from "../../core/data";

export function SectionHeader() {
  return (
    <div>
      {/* Eyebrow */}
      <div className="flex items-center gap-4 mb-6">
        <span className="rule-accent" />
        <span className="text-eyebrow">{SECTION_CONTENT.eyebrow}</span>
      </div>

      {/* Heading — first line cream, second line gold gradient */}
      <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.1] mb-6 text-primary-foreground">
        {SECTION_CONTENT.heading.map((line, i) =>
          i === 1 ? (
            <span key={i} className="block text-gradient-gold">
              {line}
            </span>
          ) : (
            <span key={i} className="block">
              {line}
            </span>
          ),
        )}
      </h2>

      {/* Intro */}
      <p className="text-sm leading-relaxed text-primary-foreground/65 max-w-sm">
        {SECTION_CONTENT.intro}
      </p>
    </div>
  );
}

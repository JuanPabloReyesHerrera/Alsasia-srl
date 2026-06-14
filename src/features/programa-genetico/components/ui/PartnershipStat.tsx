import { SECTION_CONTENT } from "../../core/data";

const { partnership } = SECTION_CONTENT;

export function PartnershipStat() {
  return (
    <div
      className="rounded-sm p-6 border border-foreground/30 bg-background/40 backdrop-blur-sm"
      // style={{
      //   border:
      //     "1px solid color-mix(in oklch, var(--primary-foreground) 14%, transparent)",
      //   backgroundColor:
      //     "color-mix(in oklch, var(--primary-foreground) 4%, transparent)",
      // }}
    >
      {/* Eyebrow */}
      <span className="text-eyebrow block mb-5">{partnership.eyebrow}</span>

      {/* Org row */}
      <div className="flex items-start gap-3 mb-6">
        <span className="font-serif text-2xl font-bold text-accent leading-none">
          {partnership.org}
        </span>
        <span className="rule-accent-v opacity-25 shrink-0 mt-0.5" />
        <p className="text-[10px] leading-snug text-primary-foreground/50 max-w-[130px]">
          {partnership.orgFull}
        </p>
      </div>

      {/* Big stat */}
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-6xl font-semibold text-primary-foreground leading-none">
          {partnership.stat}
        </span>
        <span className="text-xs leading-snug text-primary-foreground/55 max-w-[90px]">
          {partnership.statLabel}
        </span>
      </div>
    </div>
  );
}

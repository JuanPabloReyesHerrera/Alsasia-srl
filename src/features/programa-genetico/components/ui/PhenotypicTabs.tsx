"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PHENOTYPIC_ASPECTS, SECTION_CONTENT } from "../../core/data";

export function PhenotypicTabs() {
  const [activeId, setActiveId] = useState<string>(PHENOTYPIC_ASPECTS[0].id);

  const active = PHENOTYPIC_ASPECTS.find((a) => a.id === activeId)!;

  return (
    <div
      className="mt-16 pt-12"
      style={{
        borderTop:
          "1px solid color-mix(in oklch, var(--primary-foreground) 14%, transparent)",
      }}
    >
      {/* Section label */}
      <span className="text-eyebrow block mb-7">
        {SECTION_CONTENT.phenotypicTitle}
      </span>

      {/* Tab buttons */}
      <div
        className="flex flex-wrap mb-8"
        style={{
          borderBottom:
            "1px solid color-mix(in oklch, var(--primary-foreground) 14%, transparent)",
        }}
      >
        {PHENOTYPIC_ASPECTS.map((aspect) => {
          const isActive = aspect.id === activeId;
          return (
            <button
              key={aspect.id}
              onClick={() => setActiveId(aspect.id)}
              className={cn(
                "relative px-5 py-3 font-sans text-eyebrow",
                "transition-colors duration-200",
                "focus:outline-none focus-visible:ring-1 focus-visible:ring-accent",
                isActive
                  ? "text-accent"
                  : "text-primary-foreground/40 hover:text-primary-foreground/70",
              )}
            >
              {aspect.title}

              {/* Active bottom indicator */}
              <span
                className="absolute bottom-0 left-0 right-0 h-px transition-transform duration-200"
                style={{
                  backgroundColor: "var(--accent)",
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Tab content — keyed so tw-animate-css entrance re-fires on every switch */}
      <div
        key={activeId}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in-0 slide-in-from-bottom-2 duration-300"
      >
        {/* Description */}
        <p className="text-sm leading-relaxed text-primary-foreground/65">
          {active.description}
        </p>

        {/* Items — 2×2 grid of bullet points */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-6 content-start">
          {active.items.map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              {/* Gold dot */}
              <span
                className="shrink-0 w-1 h-1 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
              <span
                className="text-xs leading-snug"
                style={{
                  color:
                    "color-mix(in oklch, var(--primary-foreground) 65%, transparent)",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

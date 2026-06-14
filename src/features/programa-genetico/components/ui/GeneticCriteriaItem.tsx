"use client";

import { useState } from "react";
import type { GeneticCriterion } from "../../types";

interface Props {
  criterion: GeneticCriterion;
  /** First item in its column gets a top border */
  isFirst?: boolean;
}

export function GeneticCriteriaItem({ criterion, isFirst }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: isFirst
          ? "1px solid color-mix(in oklch, var(--primary-foreground) 12%, transparent)"
          : undefined,
        borderBottom:
          "1px solid color-mix(in oklch, var(--primary-foreground) 12%, transparent)",
        backgroundColor: hovered
          ? "color-mix(in oklch, var(--primary-foreground) 6%, transparent)"
          : "transparent",
        paddingTop: "0.875rem",
        paddingBottom: "0.875rem",
        paddingLeft: hovered ? "0.5rem" : "0",
        paddingRight: hovered ? "0.5rem" : "0",
        marginLeft: "-0.5rem",
        marginRight: "-0.5rem",
        borderRadius: "2px",
        cursor: "default",
        transition: "background-color 220ms ease-out, padding 220ms ease-out",
      }}
      className="flex items-start gap-4"
    >
      {/* Criterion number */}
      <span
        className="font-serif text-sm font-bold shrink-0 w-7 pt-px"
        style={{
          color: hovered ? "var(--accent-warm)" : "var(--accent)",
          transition: "color 220ms ease-out",
        }}
      >
        {criterion.number}
      </span>

      {/* Title + detail */}
      <div className="flex-1 min-w-0">
        <p className="font-serif text-sm font-semibold leading-tight mb-0.5 text-primary-foreground">
          {criterion.title}
        </p>
        <p
          className="text-[11px] leading-relaxed"
          style={{
            color:
              "color-mix(in oklch, var(--primary-foreground) 50%, transparent)",
          }}
        >
          {criterion.detail}
        </p>
      </div>

      {/* Right arrow — appears on hover */}
      <span
        className="shrink-0 text-xs pt-px"
        style={{
          color: "var(--accent)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-4px)",
          transition: "opacity 220ms ease-out, transform 220ms ease-out",
        }}
      >
        →
      </span>
    </div>
  );
}

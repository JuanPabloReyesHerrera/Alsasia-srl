"use client";

import { useState } from "react";
import { DECLARACIONES } from "../../core/data";
import type { DeclaracionItem } from "../../core/types";

type ActiveKey = DeclaracionItem["key"] | null;

export function VisionMisionPanels() {
  const [active, setActive] = useState<ActiveKey>(null);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2"
      style={{
        borderTop:
          "1px solid color-mix(in oklch, var(--border) 80%, transparent)",
      }}
    >
      {DECLARACIONES.map((item, i) => {
        const isFocused = active === item.key;
        const isDimmed = active !== null && !isFocused;

        return (
          <div
            key={item.key}
            onMouseEnter={() => setActive(item.key)}
            onMouseLeave={() => setActive(null)}
            className="relative py-10"
            style={{
              paddingLeft: i === 0 ? "0" : "2.5rem",
              paddingRight: i === 0 ? "2.5rem" : "0",
              borderRight:
                i === 0
                  ? "1px solid color-mix(in oklch, var(--border) 70%, transparent)"
                  : undefined,
              opacity: isDimmed ? 0.35 : 1,
              transition: "opacity 350ms ease-out",
              cursor: "default",
            }}
          >
            {/* Accent line that slides in from left when focused */}
            <span
              style={{
                position: "absolute",
                top: 0,
                left: i === 0 ? "0" : "2.5rem",
                right: i === 0 ? "2.5rem" : "0",
                height: "2px",
                backgroundColor: "var(--accent)",
                transform: isFocused ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 350ms ease-out",
              }}
            />

            {/* Label row */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-eyebrow">{item.label}</span>
              <span
                className="rule-accent"
                style={{
                  opacity: isFocused ? 1 : 0,
                  transition: "opacity 300ms ease-out",
                }}
              />
            </div>

            {/* Text */}
            <p
              className="font-serif text-base leading-[1.75] text-foreground"
              style={{
                color: isFocused
                  ? "var(--foreground)"
                  : "color-mix(in oklch, var(--foreground) 78%, transparent)",
                transition: "color 350ms ease-out",
              }}
            >
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

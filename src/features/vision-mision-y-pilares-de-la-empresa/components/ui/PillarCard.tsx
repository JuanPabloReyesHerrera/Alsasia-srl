"use client";

import { useState } from "react";
import type { Pilar } from "../../core/types";

interface Props {
  pilar: Pilar;
}

export function PillarCard({ pilar }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-sm p-6 group"
      style={{
        backgroundColor: hovered ? "var(--surface)" : "transparent",
        border: `1px solid ${
          hovered
            ? "color-mix(in oklch, var(--accent) 40%, transparent)"
            : "color-mix(in oklch, var(--border) 90%, transparent)"
        }`,
        transition:
          "background-color 260ms ease-out, border-color 260ms ease-out",
        cursor: "default",
      }}
    >
      {/* Top accent line — slides in from left on hover */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          backgroundColor: "var(--accent)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 280ms ease-out",
        }}
      />

      {/* Number */}
      <span
        className="font-serif text-xs font-bold block mb-4"
        style={{
          color: hovered ? "var(--accent-warm)" : "var(--accent)",
          transition: "color 260ms ease-out",
          letterSpacing: "0.12em",
        }}
      >
        {pilar.number}
      </span>

      {/* Title */}
      <h3
        className="font-serif text-base font-semibold leading-snug mb-2"
        style={{
          color: "var(--foreground)",
          transition: "color 260ms ease-out",
        }}
      >
        {pilar.title}
      </h3>

      {/* Subtitle */}
      <p
        className="text-[11px] leading-relaxed"
        style={{ color: "var(--foreground-muted)" }}
      >
        {pilar.subtitle}
      </p>

      {/* Optional metric — appears with accent color */}
      {pilar.metric && (
        <p
          className="font-sans text-[10px] font-semibold mt-4 tracking-wide"
          style={{
            color: hovered
              ? "var(--accent)"
              : "color-mix(in oklch, var(--accent) 55%, transparent)",
            transition: "color 260ms ease-out",
            letterSpacing: "0.08em",
          }}
        >
          {pilar.metric}
        </p>
      )}
    </div>
  );
}

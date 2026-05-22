"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { PHOTOS } from "../core/data";

const INTERVAL_MS = 5000;
const TRANSITION_MS = 600;

export function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex((index + PHOTOS.length) % PHOTOS.length);
      setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
    },
    [isTransitioning],
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, INTERVAL_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, next]);

  const getPosition = (i: number) => {
    const diff = (i - activeIndex + PHOTOS.length) % PHOTOS.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === PHOTOS.length - 1)
      return diff === 1 ? "right-1" : "left-1";
    return diff <= PHOTOS.length / 2 ? "right-far" : "left-far";
  };

  return (
    <section
      className="relative w-full h-full my-10 select-none bg-background p-8"
      style={{ fontFamily: "var(--font-serif)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Heading */}
      <div className="text-center">
        <p className="text-eyebrow mb-2 opacity-70">
          Estancia Alsasia · Desde 1924
        </p>
        <h2 className="text-4xl font-light text-foreground">Alsasia-SRL</h2>
        <div className="mx-auto mt-4 h-px w-24 bg-linear-to-r from-transparent via-accent to-transparent" />
      </div>

      {/* Carousel track */}
      <div className="relative z-10 flex h-105 items-center justify-center">
        {PHOTOS.map((photo, i) => {
          const pos = getPosition(i);

          const styleMap: Record<string, React.CSSProperties> = {
            center: {
              transform: "translateX(-50%) scale(1)",
              left: "50%",
              zIndex: 30,
              opacity: 1,
              filter: "brightness(1)",
            },
            "right-1": {
              transform: "translateX(-50%) scale(0.78)",
              left: "72%",
              zIndex: 20,
              opacity: 0.7,
              filter: "brightness(0.6)",
            },
            "left-1": {
              transform: "translateX(-50%) scale(0.78)",
              left: "28%",
              zIndex: 20,
              opacity: 0.7,
              filter: "brightness(0.6)",
            },
            "right-far": {
              transform: "translateX(-50%) scale(0.62)",
              left: "88%",
              zIndex: 10,
              opacity: 0,
              filter: "brightness(0.4)",
            },
            "left-far": {
              transform: "translateX(-50%) scale(0.62)",
              left: "12%",
              zIndex: 10,
              opacity: 0,
              filter: "brightness(0.4)",
            },
          };

          return (
            <button
              key={photo.id}
              onClick={() => goTo(i)}
              aria-label={photo.alt}
              className="absolute top-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-sm bg-transparent p-0 outline-none"
              style={{
                width: "clamp(380px, 38vw, 480px)",
                height: "clamp(335px, 28.5vw, 360px)",
                ...styleMap[pos],
                transition: `all ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            >
              {/* Gold frame border */}
              {/* <span
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  boxShadow:
                    pos === "center"
                      ? "inset 0 0 0 1.5px color-mix(in oklch, var(--accent) 60%, transparent), 0 32px 80px color-mix(in oklch, var(--foreground) 70%, transparent)"
                      : "inset 0 0 0 1px color-mix(in oklch, var(--accent) 20%, transparent)",
                  transition: `box-shadow ${TRANSITION_MS}ms ease`,
                }}
              /> */}
              <img
                src={photo.src}
                alt={photo.alt}
                draggable={false}
                className="h-full w-full object-cover"
                style={{ display: "block" }}
              />
              {/* Caption overlay — only active */}
              <span
                className="absolute bg-linear-to-t from-foreground bottom-0 left-0 right-0 flex flex-col items-center pb-5 pt-12"
                // style={{
                //   background:
                //     "linear-gradient(to top, color-mix(in oklch, var(--foreground) 85%, transparent) 0%, transparent 100%)",
                //   opacity: pos === "center" ? 1 : 0,
                //   transition: `opacity ${TRANSITION_MS}ms ease`,
                // }}
              >
                <span className="text-eyebrow">{photo.caption}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Controls */}
      <div className="relative z-10 mt-10 flex items-center justify-center gap-8">
        <button
          onClick={prev}
          aria-label="Anterior"
          className="group flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-transparent text-accent/60 transition-all hover:border-accent hover:text-accent"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 3L5 8l5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              className="h-0.5 rounded-full bg-accent transition-all duration-500"
              style={{
                width: i === activeIndex ? 28 : 10,
                opacity: i === activeIndex ? 1 : 0.3,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Siguiente"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-transparent text-accent/60 transition-all hover:border-accent hover:text-accent"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 mx-auto mt-6 h-px w-48 overflow-hidden bg-accent/10">
        <div
          key={activeIndex}
          className="h-full bg-accent"
          style={{
            animation: isPaused
              ? "none"
              : `progress ${INTERVAL_MS}ms linear forwards`,
          }}
        />
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}

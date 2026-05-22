import {
  Pinyon_Script,
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";
import { cn } from "@/lib/utils";

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

interface HeroTypographyProps {
  title?: string;
  subtitle?: string;
  location?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function HeroTitle({
  title = "Cabaña Nogal del Rio",
  subtitle = "La cuna del Brahman de oro",
  location = "Santa Rosa · Beni · Bolivia",
  imageSrc = "/hero.jpg",
  imageAlt = "Cabaña Nogal del Rio — herd of Brahman cattle at golden sunset",
  className,
}: HeroTypographyProps) {
  return (
    <section
      className={cn(
        pinyonScript.variable,
        cormorant.variable,
        montserrat.variable,
        "w-full",
        "animate-in fade-in duration-800",
        className,
      )}
      style={{
        animationDelay: "800ms",
        animationFillMode: "backwards", // Evita que el componente parpadee antes de la animación
      }}
    >
      {/* Text block — centered, upper-third positioning */}
      <div className="flex flex-col items-center justify-start pt-[10vh] px-4 text-center">
        {/* Main script title */}
        <h1 className="font-[family-name:var(--font-pinyon)] text-[clamp(3rem,8vw,6.5rem)] font-normal leading-none text-foreground drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] mb-2">
          {title}
        </h1>

        {/* Divider line */}
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-[#c9a86c] to-transparent my-3" />

        {/* Italic serif subtitle */}
        <p className="font-[family-name:var(--font-cormorant)] italic font-light text-[clamp(1rem,2.5vw,1.4rem)] tracking-[0.04em] text-accent drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)] mb-3">
          {subtitle}
        </p>

        {/* Location — small caps */}
        <p className="font-[family-name:var(--font-montserrat)] font-light text-[clamp(0.55rem,1.1vw,0.7rem)] tracking-[0.28em] uppercase text-foreground opacity-85">
          {location}
        </p>
      </div>
    </section>
  );
}

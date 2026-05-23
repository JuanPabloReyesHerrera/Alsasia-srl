import { slideIn, cn } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Presentations() {
  return (
    <div className="relative z-10 flex flex-col h-full w-dvw items-center justify-center md:items-center">
      <div className="w-full mx-4 sm:mx-20 max-w-8xl h-full grid md:grid-cols-2 gap-10 lg:gap-0">
        {/* Panel — ocupa el 46% derecho en desktop, full en mobile */}
        <LeftPresentation />
        <RightPresentation />
      </div>
      <LowerSignature />
    </div>
  );
}

function RightPresentation() {
  const eyebrow = "100 Años de Cabaña Centenaria",
    titleLine1 = "La cuna del",
    titleLine2 = "Brahman de oro.",
    body =
      "En las llanuras del Beni criamos el Brahman más premiado de Bolivia. Cada toro lleva un siglo de selección genética, pasión y tierra.",
    ctaPrimaryLabel = "Ver Catálogo",
    ctaPrimaryHref = "/catalogo",
    ctaSecondaryLabel = "Nuestra Historia",
    ctaSecondaryHref = "/legado";
  return (
    <section className="w-full h-full flex justify-center p-8">
      <div
        className={cn(
          "flex flex-col h-full w-full lg:w-[60%] 2xl:w-[40%] text-pretty justify-center",
        )}
      >
        {/* Línea decorativa */}
        <span
          className={cn("rule-accent mb-5", slideIn.right, "duration-500")}
          aria-hidden
        />

        {/* Eyebrow */}
        <p className={cn("text-eyebrow mb-5", slideIn.right, "duration-800")}>
          {eyebrow}
        </p>

        {/* Título */}
        <h1
          className={cn(
            "mb-6 font-serif tracking-tight text-foreground",
            slideIn.right,
            "duration-1000",
          )}
        >
          <span
            className={cn(
              "block text-[clamp(2.5rem,5vw,3rem)] font-bold leading-tight",
              slideIn.right,
              "duration-1500",
            )}
          >
            {titleLine1}
          </span>
          <span
            className={cn(
              "block text-[clamp(2.6rem,5.2vw,3.1rem)] font-normal italic leading-tight",
              slideIn.right,
              "duration-1700",
            )}
            style={{ color: "hsl(var(--accent))" }}
          >
            {titleLine2}
          </span>
        </h1>

        {/* Cuerpo */}
        <p
          className={cn(
            "mb-9 max-w-[320px] text-[13px] font-light md:leading-[1.85] text-foreground/65",
            slideIn.right,
            "duration-2000",
          )}
        >
          {body}
        </p>

        {/* Acciones */}
        <div
          className={cn(
            "flex flex-wrap items-center gap-5",
            slideIn.right,
            "duration-2000",
          )}
        >
          {/* CTA principal */}
          <Link
            href={ctaPrimaryHref}
            className={cn(
              "group inline-flex items-center gap-2.5 px-7 py-3.25",
              "bg-primary text-accent hover:bg-primary/80",
              "border border-[hsl(var(--accent)/0.28)]",
              "text-[8.5px] font-semibold tracking-[0.24em] uppercase",
              "transition-colors duration-200",
            )}
          >
            {ctaPrimaryLabel}
            <ArrowRight
              className="size-3 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>

          {/* CTA secundario */}
          <Link
            href={ctaSecondaryHref}
            className="group inline-flex items-center gap-3 text-foreground/50 transition-colors duration-200 hover:text-foreground/80"
          >
            <span
              className={cn(
                "flex size-9 items-center justify-center rounded-full",
                "border border-[hsl(var(--accent)/0.32)]",
                "transition-colors duration-200",
                "group-hover:border-[hsl(var(--accent)/0.55)]",
              )}
            >
              <Play
                className="size-2.5 translate-x-px"
                style={{ color: "hsl(var(--accent))" }}
                strokeWidth={0}
                fill="currentColor"
              />
            </span>
            <span className="text-[8.5px] font-light tracking-[0.2em] uppercase">
              {ctaSecondaryLabel}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function LeftPresentation() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div
        className={cn(
          // Agregamos max-h-full para capar la altura y forzar al ancho a adaptarse
          "relative hidden md:flex items-center justify-center w-[80%] sm:w-[80%] md:w-full lg:w-[90%] xl:w-[60%] 2xl:w-[50%] max-h-full aspect-4/3",
          " rounded-4xl overflow-hidden",
          slideIn.left,
          "duration-1000",
        )}
      >
        <Image
          src={"/assets/tabla.png"}
          alt="tabla"
          fill
          sizes="(max-width: 1024px) 40vw, (max-width: 1536px) 35vw, 30vw"
          className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] rounded-4xl"
        />
      </div>
    </div>
  );
}

/* ── Firma — inferior izquierdo (solo desktop) ── */

function LowerSignature() {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute bottom-4 left-8 z-10 hidden items-end gap-4 md:flex",
        slideIn.left,
        "duration-1000",
      )}
    >
      <span className="block w-px self-stretch bg-accent-warm" />
      <div className="flex flex-col gap-1.5">
        <p className="font-serif text-[13px] font-normal italic leading-none text-foreground/85">
          Nogales del Rio
        </p>
        <p
          className="text-[7.5px] font-light leading-none tracking-[0.24em] uppercase"
          style={{ color: "hsl(var(--accent))" }}
        >
          Santa Rosa · Beni · Bolivia
        </p>
        <p className="font-serif text-[11px] leading-none text-foreground/30">
          Est. 1924
        </p>
      </div>
    </div>
  );
}

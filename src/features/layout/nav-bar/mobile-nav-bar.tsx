"use client";

/**
 * mobile-nav-bar.tsx — MobileNavBar
 *
 * Visible solo en < md. El padre (navbar.tsx) lo monta junto
 * a <DesktopNav /> y controla qué se muestra en cada breakpoint.
 *
 * Estado del Sheet completamente encapsulado aquí — el padre
 * no necesita manejarlo.
 */

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, type NavLink } from "../../../lib/nav-links.config";

/* ─────────────────────────────────────────────
   Props
   ───────────────────────────────────────────── */

interface MobileNavBarProps {
  /** Sobreescribe los links por defecto si es necesario */
  links?: NavLink[];
  brandName?: string;
  brandTagline?: string;
  className?: string;
}

/* ─────────────────────────────────────────────
   Componente
   ───────────────────────────────────────────── */

export function MobileNavBar({
  links = NAV_LINKS,
  brandName = "Cabaña Nogal del Rio",
  brandTagline = "La cuna del Brahman de oro",
  className,
}: MobileNavBarProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  /* Cierra automáticamente al cambiar de ruta */
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className={cn("md:hidden", className)}>
      <Sheet open={open} onOpenChange={setOpen}>
        {/* ── Trigger ───────────────────────────── */}
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Abrir menú de navegación"
            className="text-foreground hover:text-foreground"
          >
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>
        {/* ── Panel lateral ─────────────────────── */}
        <SheetContent
          side="right"
          className={cn("border-l border-foreground/30 bg-background")}
        >
          {/* Header */}
          <SheetTitle className="flex items-start justify-between border-b border-foreground/60 px-7 py-6">
            <SheetClose asChild>
              <Link href="/" className="flex flex-col gap-1">
                <span className="italic font-semibold leading-none text-foreground">
                  {brandName}
                </span>
                <span className="text-[7px] font-light  tracking-[0.25em] uppercase text-accent">
                  {brandTagline}
                </span>
              </Link>
            </SheetClose>
          </SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>

          {/* Links */}
          <nav className="flex flex-1 flex-col px-7 py-7">
            {/* Línea decorativa */}
            <span aria-hidden className="mb-4 block h-px w-8 bg-accent/35" />

            <ul className="flex flex-col" role="list">
              {links.map(({ label, href, external }) => {
                const isActive = pathname === href;

                return (
                  <li key={href}>
                    <SheetClose asChild>
                      <Link
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between py-3.5",
                          "border-b border-foreground/20",
                          "font-sans text-[10px] font-light tracking-[0.2em] uppercase",
                          "outline-none transition-colors duration-150",

                          isActive
                            ? "text-foreground"
                            : "text-foreground/55 hover:text-foreground",
                        )}
                      >
                        <span>{label}</span>
                        {/* Indicador de página activa */}
                        {isActive && (
                          <span
                            aria-hidden
                            className="block h-px w-4 bg-accent"
                          />
                        )}
                      </Link>
                    </SheetClose>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <SheetClose asChild>
              <Button
                asChild
                className={cn(
                  "mt-8 w-full rounded-none",
                  "bg-primary hover:bg-primary/85",
                  "text-accent",
                  "border border-accent/28",
                  "font-sans text-[8.5px] font-semibold tracking-[0.22em] uppercase",
                )}
              >
                <Link href="/catalogo">Nuestros Toros</Link>
              </Button>
            </SheetClose>
          </nav>

          {/* Footer */}
          <SheetFooter>
            <div className="border-t border-border/20 px-7 py-4">
              <p className="font-sans text-[7.5px] font-light tracking-[0.22em] uppercase text-foreground/50">
                Santa Rosa · Beni · Bolivia
              </p>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

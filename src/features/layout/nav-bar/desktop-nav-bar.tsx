"use client";

/**
 * navigation-menu.tsx — DesktopNav
 *
 * Visible solo en md+. El padre (navbar.tsx) lo monta junto
 * a <MobileNavBar /> y controla qué se muestra en cada breakpoint.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, type NavLink } from "../../../lib/nav-links.config";

/* ─────────────────────────────────────────────
   Props
   ───────────────────────────────────────────── */

interface DesktopNavProps {
  /** Sobreescribe los links por defecto si es necesario */
  links?: NavLink[];
  className?: string;
}

/* ─────────────────────────────────────────────
   Componente
   ───────────────────────────────────────────── */

export function DesktopNavBar({
  links = NAV_LINKS,
  className,
}: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("hidden items-center lg:flex", className)}>
      <NavigationMenu>
        <NavigationMenuList className="gap-0">
          {links.map(({ label, href, external }) => {
            const isActive = pathname === href;

            return (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Button variant={"ghost"}>
                    <Link
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className={cn(
                        /* base */
                        "relative inline-flex items-center gap-1 px-4 py-2",
                        "font-sans text-[9.5px] font-normal tracking-[0.18em] uppercase",
                        "outline-none transition-colors duration-200",
                        "focus-visible:ring-1 focus-visible:ring-ring",
                        /* underline animado con accent */
                        "after:absolute after:inset-x-4 after:bottom-[5px] after:h-px",
                        "after:bg-accent after:origin-left after:transition-transform after:duration-200",
                        /* estados */
                        isActive
                          ? "text-foreground after:scale-x-100"
                          : "text-foreground/60 after:scale-x-0 hover:text-foreground hover:after:scale-x-100",
                      )}
                    >
                      {label}
                      {external && (
                        <ArrowUpRight
                          className="size-2.5 opacity-50"
                          strokeWidth={2}
                        />
                      )}
                    </Link>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

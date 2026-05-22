// components/navbar/navbar.tsx
"use client";
import Image from "next/image";
import { NAV_LINKS } from "../../../lib/nav-links.config"; // tu archivo de config
import { DesktopNavBar } from "./desktop-nav-bar";
import { MobileNavBar } from "./mobile-nav-bar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-18 border-b bg-background ">
      <div className="h-full flex items-center justify-between px-2 md:px-6">
        {/* Logo aquí */}
        <Button variant={"ghost"}>
          <Link
            href={"/"}
            className="flex items-center justify-start xl:gap-10"
          >
            <Image src={"/brand_logo.svg"} alt="AN" width={50} height={50} />
            <h1 className="border border-primary py-1.5 px-4 rounded-[60%/60%] shadow-sm shadow-foreground/40 items-center hidden xl:block">
              Alsasi SRL
            </h1>
          </Link>
        </Button>

        <DesktopNavBar links={NAV_LINKS} />
        <MobileNavBar links={NAV_LINKS} />
        {/* CTA */}
        <Button
          asChild
          size="sm"
          className={cn(
            "hidden lg:flex",
            "ml-5 rounded-none",
            "bg-primary hover:bg-primary/85",
            "text-accent",
            "border border-accent/28",
            "font-sans text-[8.5px] font-semibold tracking-[0.22em] uppercase",
            "transition-colors duration-200",
          )}
        >
          <Link href="/catalogo" className="text-accent-warm">
            Nuestros Toros
          </Link>
        </Button>
      </div>
    </header>
  );
}

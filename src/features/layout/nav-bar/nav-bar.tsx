// components/navbar/navbar.tsx
"use client";
import Image from "next/image";
import { NAV_LINKS } from "../../../lib/nav-links.config"; // tu archivo de config
import { DesktopNavBar } from "./desktop-nav-bar";
import { MobileNavBar } from "./mobile-nav-bar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-navbar border-b bg-background ">
      <div className="h-full flex items-center justify-between px-2 md:px-6">
        {/* Logo aquí */}
        <Button variant={"ghost"} className="hover:bg-transparent">
          <Link href={"/"} className="flex items-center justify-start xl:gap-4">
            <Image src={siteConfig.logo1} alt="AN" width={50} height={50} />
          </Link>
        </Button>

        <DesktopNavBar links={NAV_LINKS} />
        <MobileNavBar links={NAV_LINKS} />
        {/* CTA */}
        <Button
          asChild
          variant={"ghost"}
          size="sm"
          className={cn(
            "hidden lg:flex",
            "ml-5 rounded-none",
            // "bg-primary hover:bg-primary/85",
            // "text-accent",
            // "border border-accent/28",
            "font-sans text-[8.5px] font-semibold tracking-[0.22em] uppercase",
            "hover:bg-transparent",
          )}
        >
          <Link
            href="/"
            // className="text-accent-warm"
          >
            {/* Nuestros Toros */}
            <Image
              src={siteConfig.logo2}
              alt="Alsasia"
              width={150}
              height={150}
            />
          </Link>
        </Button>
      </div>
    </header>
  );
}

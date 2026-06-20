// components/navbar/navbar.tsx
"use client";
import Image from "next/image";
import { NAV_LINKS } from "../../../config/nav-links.config"; // tu archivo de config
import { DesktopNavBar } from "./desktop-nav-bar";
import { MobileNavBar } from "./mobile-nav-bar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { useActiveUnit } from "@/app/shared/hooks/use-active-unit";

export function NavBar() {
  const pathName = usePathname();
  const unit = useActiveUnit();

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-navbar border-b bg-background ">
      <div className="h-full flex items-center justify-between px-1 md:px-6">
        {/* Logo aquí */}
        <Button variant={"ghost"} className="hover:bg-transparent">
          <Link href={"/"}>
            <Image src={siteConfig.logo} alt="AN" width={65} height={65} />
          </Link>
        </Button>

        <DesktopNavBar links={NAV_LINKS} />
        <MobileNavBar links={NAV_LINKS} />

        {/* Unidad actual */}

        <div className="relative h-full min-w-30 hidden lg:flex">
          <Image
            src={unit.logo}
            alt={unit.name}
            fill
            className="object-contain py-1"
          />
        </div>
      </div>
    </header>
  );
}

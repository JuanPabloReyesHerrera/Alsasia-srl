"use client";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export function useActiveUnit() {
  const pathname = usePathname();

  return (
    Object.values(siteConfig.units).find(
      (unit) => unit.href !== "/" && pathname.startsWith(unit.href),
    ) ?? siteConfig.units.alsasia // fallback = home = alsasia
  );
}

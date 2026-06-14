export const siteConfig = {
  name: "Alsasia",
  title: "Cabaña Nogal Del Río",
  logo1: "/brand_logo.png",
  logo2: "/brand_logo-2.png",
  description: "",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export type SiteConfig = typeof siteConfig;

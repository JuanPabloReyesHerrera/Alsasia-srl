export const siteConfig = {
  name: "Alsasia",
  logo: "/logos/logo-brand.png",
  description: "",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  units: {
    alsasia: {
      title: "Inicio",
      name: "Alsasia",
      description: "Empresa familiar ganadera",
      href: "/",
      logo: "/logos/logo-alsasia.png",
    },
    cabana_nogal_del_rio: {
      title: "Programa genético",
      name: "Cabaña Nogal Del Río",
      href: "/cabana-nogal-del-rio",
      logo: "/logos/logo-cabana-nogal-del-rio.png",
    },
    nogal_max: {
      title: "Nutrición",
      name: "Nogal Max",
      href: "/nogal-max",
      logo: "/logos/logo-nogal-max.png",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type UnitKey = keyof typeof siteConfig.units;
export type SiteUnit = (typeof siteConfig.units)[UnitKey];

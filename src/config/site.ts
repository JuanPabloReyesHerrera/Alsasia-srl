export const siteConfig = {
  name: "Alsasia",
  logo: "/logos/logo-brand.png",
  units: {
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
    alsasia: {
      title: "Estancias Ganaderas",
      name: "Alsasia",
      description: "Empresa familiar ganadera",
      href: "/",
      logo: "/logos/logo-alsasia.png",
    },
  },
  description: "",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export type SiteConfig = typeof siteConfig;

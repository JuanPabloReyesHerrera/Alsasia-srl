# Alsasia SRL — Sitio Web Oficial

Sitio web institucional de **Alsasia SRL**, estancia ganadera con más de 100 años de historia. Diseñado para comunicar herencia, estatus y confianza a través de una experiencia visual premium.

---

## Tech Stack

| Capa            | Tecnología                                   |
| --------------- | -------------------------------------------- |
| Framework       | Next.js 15 + React 19                        |
| Lenguaje        | TypeScript                                   |
| Estilos         | Tailwind CSS v4                              |
| Componentes     | shadcn/ui · Radix UI · Lucide React          |
| Utilidades      | clsx · tailwind-merge · CVA · tw-animate-css |
| Package manager | pnpm                                         |

---

## Arquitectura

El proyecto sigue **Screaming Architecture** — la estructura de carpetas refleja los dominios de negocio, no los tipos técnicos.

```
src/
├── landing/          # Hero, propuesta de valor, secciones principales
├── catalog/          # Catálogo de toros
├── about/            # Historia y equipo
└── shared/           # Elementos transversales (layout, UI base, utils)
```

---

## Secciones

- **Landing** — Hero principal con identidad visual de la estancia
- **Catálogo de toros** — Ficha y galería de reproductores disponibles
- **Sobre nosotros** — Historia centenaria, valores y equipo

---

## Desarrollo local

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev

# Build de producción
pnpm build

# Preview del build
pnpm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Deploy

El proyecto está desplegado en **Vercel**. Cada push a `main` dispara un deploy automático.

---

## Licencia

Todos los derechos reservados © Alsasia SRL

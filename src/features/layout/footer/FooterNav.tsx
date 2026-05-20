import { NAV_LINKS } from "@/lib/nav-links.config"; // ajustá el path según tu estructura

interface FooterNavProps {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}

export function FooterNavSection({ title, links }: FooterNavProps) {
  return (
    <div>
      <h3 className="text-eyebrow mb-5">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="
                group inline-flex items-center gap-1.5
                font-sans text-sm text-foreground-muted
                hover:text-accent-warm transition-colors duration-200
              "
            >
              <span
                className="
                  block w-0 overflow-hidden group-hover:w-2.5
                  transition-all duration-200 text-accent/60
                "
                aria-hidden
              >
                ›
              </span>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Columna principal — usa NAV_LINKS dividido en dos grupos */
export function FooterNav() {
  const mid = Math.ceil(NAV_LINKS.length / 2);
  const col1 = NAV_LINKS.slice(0, mid);
  const col2 = NAV_LINKS.slice(mid);

  return (
    <>
      <FooterNavSection title="Navegación" links={col1} />
      <FooterNavSection title="Servicios" links={col2} />
    </>
  );
}

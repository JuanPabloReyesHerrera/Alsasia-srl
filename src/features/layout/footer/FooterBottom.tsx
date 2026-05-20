import { CONTACT_DATA, LEGAL_LINKS } from "./contact-data";

export function FooterBottom() {
  const { company } = CONTACT_DATA;
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-border/40 pt-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Copyright + legal */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <p className="font-sans text-[0.72rem] text-foreground-subtle/60">
            © {currentYear} {company.name} · RUC {company.ruc}
          </p>

          <span className="hidden sm:block w-px h-3 bg-border/50" aria-hidden />

          <nav aria-label="Legal" className="flex flex-wrap gap-x-4">
            {LEGAL_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-sans text-[0.72rem] text-foreground-subtle/50 hover:text-accent/80 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Tagline derecha */}
        <p className="font-serif text-[0.75rem] italic text-foreground-subtle/40">
          Tradición, genética y territorio · Mendoza, Argentina
        </p>
      </div>
    </div>
  );
}

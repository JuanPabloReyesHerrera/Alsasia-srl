import { ChevronRight } from "lucide-react";
import { BullLogo } from "./BullLogo";
import { FooterSocial } from "./FooterSocial";
import { OrnamentalDivider } from "./OrnamentalDivider";
import { CONTACT_DATA } from "./contact-data";
import Image from "next/image";

export function FooterBrand() {
  const { company } = CONTACT_DATA;

  return (
    <div className="flex flex-col gap-5">
      {/* Logo + Nombre */}
      <div className="flex items-center gap-4">
        <div
          className="relative flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center
            bg-surface border border-accent/25
            shadow-[0_0_0_4px_color-mix(in_oklch,var(--accent)_6%,transparent)]"
        >
          {/* <BullLogo className="w-10 h-10 text-accent" /> */}
          <Image src={"/brand_logo.svg"} alt="AN" width={40} height={40} />
        </div>

        <div>
          <h2 className="font-serif text-2xl font-normal tracking-wide text-foreground leading-none">
            {company.name}
          </h2>
          <p className="text-eyebrow mt-1.5">{company.tagline}</p>
        </div>
      </div>

      <OrnamentalDivider />

      {/* Descripción */}
      <p className="font-sans text-sm leading-relaxed text-foreground-subtle">
        {company.description}
      </p>

      {/* Certificaciones */}
      <ul className="flex flex-col gap-1.5">
        {company.certifications.map((cert) => (
          <li key={cert} className="flex items-center gap-2">
            <ChevronRight
              size={10}
              className="text-accent/50 flex-shrink-0"
              strokeWidth={2}
            />
            <span className="font-sans text-[0.72rem] tracking-wide text-foreground-subtle/80">
              {cert}
            </span>
          </li>
        ))}
      </ul>

      <FooterSocial />
    </div>
  );
}

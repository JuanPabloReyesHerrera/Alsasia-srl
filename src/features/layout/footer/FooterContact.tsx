import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { CONTACT_DATA } from "./contact-data";

/* ── Átomo: fila con ícono ────────────────────────────────── */
function ContactRow({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <Icon
        size={14}
        strokeWidth={1.5}
        className="text-accent/60 flex-shrink-0 mt-0.5"
      />
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

/* ── Átomo: label de área ─────────────────────────────────── */
function AreaLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-sans text-[0.65rem] tracking-widest uppercase text-accent/50">
      {children}
    </span>
  );
}

/* ── Sección de dirección ─────────────────────────────────── */
function AddressBlock() {
  const { address } = CONTACT_DATA;
  return (
    <ContactRow icon={MapPin}>
      <a
        href={address.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <p className="font-sans text-sm text-foreground-muted group-hover:text-foreground transition-colors">
          {address.street}
        </p>
        <p className="font-sans text-[0.8rem] text-foreground-subtle">
          {address.locality}, {address.province}
        </p>
        <p className="font-sans text-[0.75rem] text-foreground-subtle/70">
          {address.country} · CP {address.postalCode}
        </p>
        <span className="inline-flex items-center gap-1 mt-1 font-sans text-[0.68rem] text-accent/50 group-hover:text-accent/80 transition-colors">
          Ver en mapa <ExternalLink size={9} />
        </span>
      </a>
    </ContactRow>
  );
}

/* ── Sección de teléfonos ─────────────────────────────────── */
function PhoneBlock() {
  const { phone } = CONTACT_DATA;
  return (
    <ContactRow icon={Phone}>
      <a
        href={`tel:${phone.main.replace(/\s/g, "")}`}
        className="font-sans text-sm text-foreground-muted hover:text-foreground transition-colors"
      >
        {phone.main}
      </a>
      <a
        href={`https://wa.me/${phone.whatsapp.replace(/[^0-9]/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-sans text-[0.75rem] text-accent/60 hover:text-accent transition-colors"
      >
        {/* WhatsApp mini icon */}
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.123 1.528 5.855L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.51-5.18-1.395l-.371-.22-3.836 1.001 1.022-3.72-.242-.383A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        WhatsApp
      </a>
    </ContactRow>
  );
}

/* ── Sección de emails ────────────────────────────────────── */
function EmailBlock() {
  const { email } = CONTACT_DATA;
  const entries: { label: string; value: string }[] = [
    { label: "General", value: email.general },
    { label: "Ventas", value: email.ventas },
    { label: "Administración", value: email.administracion },
  ];

  return (
    <ContactRow icon={Mail}>
      {entries.map(({ label, value }) => (
        <div key={value}>
          <AreaLabel>{label}: </AreaLabel>
          <a
            href={`mailto:${value}`}
            className="font-sans text-[0.8rem] text-foreground-muted hover:text-foreground transition-colors"
          >
            {value}
          </a>
        </div>
      ))}
    </ContactRow>
  );
}

/* ── Componente público ───────────────────────────────────── */
export function FooterContact() {
  return (
    <div>
      <h3 className="text-eyebrow mb-5">Contacto</h3>
      <div className="flex flex-col gap-5">
        <AddressBlock />
        <PhoneBlock />
        <EmailBlock />
      </div>
    </div>
  );
}

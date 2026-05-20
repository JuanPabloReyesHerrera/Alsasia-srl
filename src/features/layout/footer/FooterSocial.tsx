import { siInstagram, siFacebook, siYoutube } from "simple-icons";
import { SimpleIcon } from "./SimpleIcon";
import { CONTACT_DATA } from "./contact-data";

const SOCIAL_ITEMS = [
  { icon: siInstagram, href: CONTACT_DATA.social.instagram },
  { icon: siFacebook,  href: CONTACT_DATA.social.facebook  },
  { icon: siYoutube,   href: CONTACT_DATA.social.youtube   },
] as const;

export function FooterSocial() {
  return (
    <div className="flex items-center gap-2.5">
      {SOCIAL_ITEMS.map(({ icon, href }) => (
        <a
          key={icon.title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={icon.title}
          className="
            group flex items-center justify-center w-9 h-9 rounded-full
            bg-accent/8 border border-accent/20
            hover:bg-accent/18 hover:border-accent/50
            transition-all duration-300
          "
        >
          <SimpleIcon
            path={icon.path}
            title={icon.title}
            size={14}
            className="text-accent/60 group-hover:text-accent transition-colors duration-200"
          />
        </a>
      ))}
    </div>
  );
}

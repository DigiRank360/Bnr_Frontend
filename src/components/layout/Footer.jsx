import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import { navLinks, site, services } from "../../data/site";
import Container from "../ui/Container";

const socials = [
  { label: "Instagram", href: site.social.instagram, Icon: FaInstagram },
  { label: "Facebook", href: site.social.facebook, Icon: FaFacebookF },
  { label: "LinkedIn", href: site.social.linkedin, Icon: FaLinkedin },
  {
    label: "WhatsApp",
    href: `https://wa.me/${site.whatsapp}`,
    Icon: FaWhatsapp,
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <Container className="grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={logo}
            alt="BNR Group"
            className="mb-4 h-14 w-auto rounded-lg bg-white p-2"
          />
          <p className="max-w-sm text-sm">
            Integrated workforce, facility management and operational support
            for Government and private sector organizations.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-navy"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>{site.email}</li>
            <li>{site.phone}</li>
            <li>{site.address}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-sm">
        © {new Date().getFullYear()} {site.name}. All rights reserved. ·{" "}
        {services.length} service solutions
      </div>
    </footer>
  );
}

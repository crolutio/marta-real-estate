import Link from "next/link";
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { AGENCY, FOOTER_LINKS } from "@/lib/constants";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-semibold tracking-tight">
                {AGENCY.name}
              </span>
              <span className="block text-xs tracking-widest uppercase text-primary-foreground/60">
                Real Estate
              </span>
            </Link>
            <p className="text-primary-foreground/80 max-w-md text-editorial mb-6">
              {AGENCY.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={AGENCY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={AGENCY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={AGENCY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-6 tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${AGENCY.phone}`}
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>{AGENCY.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${AGENCY.email}`}
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>{AGENCY.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span>
                  {AGENCY.address.line1}
                  <br />
                  {AGENCY.address.city}, {AGENCY.address.state} {AGENCY.address.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-primary-foreground/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>
            © {currentYear} {AGENCY.fullName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

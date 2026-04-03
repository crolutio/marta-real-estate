import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { AGENCY, FOOTER_LINKS } from "@/lib/constants";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-8 md:py-18 lg:py-24">
        {/* Main Footer Content - 3 columns: Logo | Description | Contact */}
        <div className="grid gap-8 md:gap-6 grid-cols-1 md:grid-cols-3 text-center md:text-left items-stretch">
          {/* Column 1: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block mb-2">
              <Image
                src="/logo-big.webp"
                alt={AGENCY.fullName}
                width={720}
                height={216}
                className="h-32 w-auto object-contain dark:hidden sm:h-40 md:h-48"
              />
              <Image
                src="/logo-big-darkmode.webp"
                alt={AGENCY.fullName}
                width={720}
                height={216}
                className="h-32 w-auto object-contain hidden dark:block sm:h-40 md:h-48"
              />
            </Link>
          </div>

          {/* Column 2: Description */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <p className="text-primary-foreground/80 max-w-[280px] text-editorial text-sm md:text-base">
              {AGENCY.description}
            </p>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-6 tracking-wide">Contact</h3>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              <li>
                <a
                  href={`tel:${AGENCY.phone}`}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  <span>{AGENCY.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${AGENCY.email}`}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  <span>{AGENCY.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80 md:items-start">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 md:mt-0" />
                <span className="text-center md:text-left">
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60 text-center md:text-left">
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

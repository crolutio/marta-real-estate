"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AGENCY, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ConsultationCta } from "@/components/consultation-cta";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-wide">
        <nav className="flex h-20 items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col items-start transition-opacity hover:opacity-80"
            aria-label={`${AGENCY.fullName} - Home`}
          >
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight">
              {AGENCY.name}
            </span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Real Estate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent relative py-2",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground",
                  pathname === link.href &&
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <ConsultationCta />
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="h-10 w-10"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left font-serif text-xl">
                  {AGENCY.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-8" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-accent",
                      pathname === link.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-6 border-t border-border">
                  <ConsultationCta className="w-full" />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun } from "lucide-react";
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
  const isHomePage = pathname === "/";
  const [isOpen, setIsOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const [showNavLogo, setShowNavLogo] = React.useState(!isHomePage);

  React.useEffect(() => {
    if (!isHomePage) {
      setShowNavLogo(true);
      return;
    }

    setShowNavLogo(false);

    let observer: IntersectionObserver | null = null;
    let rafId = 0;
    let retries = 0;

    const observe = () => {
      const heroLogo = document.getElementById("hero-logo");
      if (!heroLogo) {
        retries += 1;
        if (retries < 20) {
          rafId = requestAnimationFrame(observe);
        } else {
          setShowNavLogo(true);
        }
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          setShowNavLogo(!entry.isIntersecting);
        },
        { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
      );
      observer.observe(heroLogo);
    };

    observe();

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [isHomePage]);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      setTheme("light");
      applyTheme("light");
    }
  }, []);

  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement;
    root.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleThemeToggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  };

  const scrollToTopOnHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
    >
      <div className="container-wide">
        <nav className="flex h-20 items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link
            href="/"
            onClick={scrollToTopOnHome}
            aria-label={showNavLogo ? `${AGENCY.fullName} - Home` : undefined}
            aria-hidden={!showNavLogo}
            tabIndex={showNavLogo ? 0 : -1}
            className={cn(
              "flex shrink-0 items-center overflow-hidden transition-all duration-300 ease-in-out hover:opacity-90",
              showNavLogo
                ? "pointer-events-auto w-[11rem] opacity-100"
                : "pointer-events-none w-0 opacity-0"
            )}
          >
            <Image
              src="/logo.webp"
              alt={AGENCY.fullName}
              width={220}
              height={64}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={link.href === "/" ? scrollToTopOnHome : undefined}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent relative py-2",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground",
                  pathname === link.href &&
                    "after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[3px] after:rounded-full after:bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 relative bg-accent text-accent-foreground hover:bg-black hover:text-white"
              onClick={handleThemeToggle}
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <ConsultationCta className="hover:bg-black hover:text-white" />
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
            <SheetContent side="right" className="w-full sm:w-[400px] px-6 pt-6 pb-8">
              <SheetHeader>
                <SheetTitle className="text-left font-subtitle text-xl">
                  {AGENCY.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-8 px-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === "/") scrollToTopOnHome(e);
                      setIsOpen(false);
                    }}
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
                <div className="pt-6 border-t border-border space-y-4">
                  {/* Mobile Theme Toggle */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Theme</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleThemeToggle}
                      className="h-8 w-8 p-0 relative bg-accent text-accent-foreground border-accent hover:bg-black hover:text-white hover:border-black"
                    >
                      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                  </div>
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

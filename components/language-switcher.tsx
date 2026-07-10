"use client";

import { Check, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "@/components/language-provider";
import { LANGUAGES } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useTranslation();
  const active = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label={t("header.changeLanguage")}
          className={cn("h-9 gap-2 px-2", className)}
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">{active.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[10rem]">
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onSelect={() => setLocale(language.code)}
            className="flex items-center justify-between gap-4"
          >
            <span>{language.label}</span>
            {language.code === locale && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

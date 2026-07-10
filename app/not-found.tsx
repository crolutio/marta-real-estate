"use client";

import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/components/language-provider";

export default function NotFound() {
  const { dict } = useTranslation();
  const n = dict.notFound;
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-narrow text-center py-16">
        {/* 404 Display */}
        <div className="mb-8">
          <span className="font-subtitle text-8xl md:text-9xl font-bold text-accent/20">
            404
          </span>
        </div>

        {/* Content */}
        <h1 className="font-subtitle text-3xl md:text-4xl font-semibold text-display mb-4">
          {n.title}
        </h1>
        <p className="text-lg text-muted-foreground text-editorial mb-8 max-w-md mx-auto">
          {n.body}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              {n.backHome}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/properties">
              <Search className="mr-2 h-5 w-5" />
              {n.browse}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

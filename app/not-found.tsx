import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-narrow text-center py-16">
        {/* 404 Display */}
        <div className="mb-8">
          <span className="font-serif text-8xl md:text-9xl font-bold text-accent/20">
            404
          </span>
        </div>

        {/* Content */}
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-display mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground text-editorial mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/properties">
              <Search className="mr-2 h-5 w-5" />
              Browse Properties
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Quick links:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/properties"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              All Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

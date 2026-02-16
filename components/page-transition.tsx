"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = "[data-animate=reveal]";
const REVEAL_ROOT_MARGIN = "0px 0px -8% 0px"; // trigger when 8% of element is visible
const REVEAL_THRESHOLD = 0.05;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Ensure each route starts at the top.
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  // Observe all [data-animate=reveal] and add .in-view when they intersect
  React.useEffect(() => {
    const container = containerRef.current ?? document;
    const root = container === document ? null : container;
    const elements = (root ?? document).querySelectorAll(REVEAL_SELECTOR);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { rootMargin: REVEAL_ROOT_MARGIN, threshold: REVEAL_THRESHOLD }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]); // Re-run when route changes so new sections get observed

  return (
    <div key={pathname} ref={containerRef} className="animate-page-enter">
      {children}
    </div>
  );
}

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
    const queryRoot = (root ?? document) as ParentNode;
    const observed = new WeakSet<Element>();

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

    const observeElement = (el: Element) => {
      if (observed.has(el)) return;
      observed.add(el);
      observer.observe(el);
    };

    const observeWithin = (node: ParentNode) => {
      node.querySelectorAll(REVEAL_SELECTOR).forEach(observeElement);
    };

    // Initial scan
    observeWithin(queryRoot);

    // Observe dynamically inserted content (e.g. filtered cards)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(REVEAL_SELECTOR)) observeElement(node);
          observeWithin(node);
        });
      });
    });

    mutationObserver.observe(container === document ? document.body : container, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]); // Re-run when route changes so new sections get observed

  return (
    <div key={pathname} ref={containerRef} className="animate-page-enter">
      {children}
    </div>
  );
}

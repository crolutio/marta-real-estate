"use client";

import * as React from "react";
import { AGENCY } from "@/lib/constants";
import { toast } from "sonner";

function TriLineIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <line x1="8" y1="10" x2="8" y2="46" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="6" x2="20" y2="50" stroke="currentColor" strokeWidth="1.5" />
      <line x1="32" y1="10" x2="32" y2="46" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function InvestAnalysisForm() {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    capital: "",
  });

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please add your name and email.");
      return;
    }
    const body = [
      `Investment analysis request`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone || "—"}`,
      `Email: ${form.email}`,
      `Estimated capital: ${form.capital || "—"}`,
    ].join("\n");
    const subject = encodeURIComponent("Personalized Dubai investment analysis");
    window.open(
      `mailto:${AGENCY.email}?subject=${subject}&body=${encodeURIComponent(body)}`
    );
    toast.success("Opening your email client…");
  };

  const inputClass =
    "w-full bg-transparent text-white placeholder:text-white/50 focus:outline-none focus:placeholder:text-white/35 py-2 text-base border-0 border-b border-white/80 rounded-none";

  return (
    <section
      id="personalized-analysis"
      className="scroll-mt-24 bg-[#15251f] text-white py-20 md:py-28"
    >
      <div className="container-narrow max-w-lg mx-auto px-4 text-center">
        <TriLineIcon className="mx-auto mb-8 h-14 w-auto text-white/90" />

        <h2 className="font-subtitle text-3xl sm:text-4xl md:text-[2.35rem] font-semibold leading-tight text-balance text-white mb-12 md:mb-14">
          Ready to analyze your investment in Dubai?
        </h2>

        <form onSubmit={handleSubmit} className="text-left space-y-10">
          <div>
            <label
              htmlFor="invest-name"
              className="block text-xs tracking-[0.2em] uppercase text-[#c9b896] font-medium mb-2"
            >
              Name
            </label>
            <input
              id="invest-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={form.name}
              onChange={update}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label
              htmlFor="invest-phone"
              className="block text-xs tracking-[0.2em] uppercase text-[#c9b896] font-medium mb-2"
            >
              Phone
            </label>
            <input
              id="invest-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Your phone"
              value={form.phone}
              onChange={update}
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="invest-email"
              className="block text-xs tracking-[0.2em] uppercase text-[#c9b896] font-medium mb-2"
            >
              Email
            </label>
            <input
              id="invest-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your email"
              value={form.email}
              onChange={update}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label
              htmlFor="invest-capital"
              className="block text-xs tracking-[0.2em] uppercase text-[#c9b896] font-medium mb-2"
            >
              Estimated capital
            </label>
            <input
              id="invest-capital"
              name="capital"
              type="text"
              placeholder="Your estimated capital"
              value={form.capital}
              onChange={update}
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-4 px-6 bg-[#c9b896] text-[#15251f] text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9b896]"
          >
            Request personalized analysis
          </button>
        </form>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/components/interactive-hover-button";

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="border-b border-[#b8983e]/10 bg-[#f5ebe0]/85 shadow-sm shadow-[#2d4a4a]/5 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5">
          <a
            href="#"
            className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src="/images/logo.png"
              alt="L'Artisane"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="hidden font-serif text-base font-light tracking-wide text-[#2d4a4a] sm:inline">
              L&apos;Artisane à Dinard
            </span>
          </a>

          <a href="#reservation">
            <InteractiveHoverButton className="py-1.5 px-4 text-[11px] uppercase tracking-wider">
              Prendre rendez-vous
            </InteractiveHoverButton>
          </a>
        </div>
      </div>
    </header>
  );
}

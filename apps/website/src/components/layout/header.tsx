"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const bookingHref = siteConfig.booking.url || siteConfig.owner.phoneHref;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[#b8983e]/10 bg-[#f5ebe0]/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Logo L'Artisane"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="font-serif text-lg font-medium text-[#2d4a4a]">
            L&apos;Artisane
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "font-medium text-[#b8983e]"
                  : "text-[#2d4a4a]/60 hover:text-[#2d4a4a]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <Button
            nativeButton={false}
            render={
              <a
                href={bookingHref}
                target={siteConfig.booking.url ? "_blank" : undefined}
                rel={
                  siteConfig.booking.url ? "noopener noreferrer" : undefined
                }
              />
            }
            variant="outline"
            size="sm"
            className="hidden cursor-pointer rounded-full border-[#2d4a4a]/20 px-5 text-xs tracking-wide text-[#2d4a4a] transition-all duration-300 hover:border-[#2d4a4a] hover:bg-[#2d4a4a] hover:text-white md:inline-flex"
          >
            Réserver
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

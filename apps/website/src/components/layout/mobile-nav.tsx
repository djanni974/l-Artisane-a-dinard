"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconMenu2 } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const bookingHref = siteConfig.booking.url || siteConfig.owner.phoneHref;

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon-sm" className="md:hidden" />
        }
      >
        <IconMenu2 className="h-5 w-5" stroke={1.5} />
        <span className="sr-only">Menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#f5ebe0] w-[280px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Logo L'Artisane"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-serif text-lg text-[#2d4a4a]">
              L&apos;Artisane
            </span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {navigation.map((item) => (
            <SheetClose
              key={item.href}
              render={<Link href={item.href} />}
              className={cn(
                "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-[#b8983e]/10 text-[#b8983e]"
                  : "text-[#2d4a4a]/70 hover:bg-[#2d4a4a]/5 hover:text-[#2d4a4a]"
              )}
            >
              {item.label}
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <SheetClose
            render={
              <a
                href={bookingHref}
                target={siteConfig.booking.url ? "_blank" : undefined}
                rel={
                  siteConfig.booking.url ? "noopener noreferrer" : undefined
                }
              />
            }
            className="flex w-full items-center justify-center rounded-full bg-[#2d4a4a] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2d4a4a]/90"
          >
            Réserver
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

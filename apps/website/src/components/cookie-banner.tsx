"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import Link from "next/link";

const COOKIE_KEY = "cookie-consent";

type ConsentValue = "all" | "essential" | null;

function getConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(COOKIE_KEY);
  if (v === "all" || v === "essential") return v;
  // Migrate old values
  if (v === "accepted") return "all";
  if (v === "refused") return "essential";
  return null;
}

// ─── External store for cross-component reactivity ──────────
let listeners: Array<() => void> = [];

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function notify() {
  listeners.forEach((l) => l());
}

function getSnapshot(): ConsentValue {
  return getConsent();
}

function getServerSnapshot(): ConsentValue {
  return null;
}

/** Returns the current cookie consent value reactively. */
export function useCookieConsent(): ConsentValue {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Returns true if third-party cookies (Google Maps, etc.) are allowed. */
export function useThirdPartyCookiesAllowed(): boolean {
  return useCookieConsent() === "all";
}

// ─── Banner component ───────────────────────────────────────
export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!getConsent()) setVisible(true);
  }, []);

  const handleChoice = useCallback((acceptAll: boolean) => {
    localStorage.setItem(COOKIE_KEY, acceptAll ? "all" : "essential");
    setVisible(false);
    notify();
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-[both]">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl bg-white/95 px-6 py-5 shadow-lg backdrop-blur-sm sm:flex-row sm:gap-6">
        <p className="text-center text-sm leading-relaxed text-[#2d4a4a]/70 sm:text-left">
          Ce site utilise des cookies essentiels et, avec votre accord, des
          services tiers (Google Maps) pour afficher la carte du salon.{" "}
          <Link
            href="/mentions-legales"
            className="font-medium text-[#2d4a4a] underline underline-offset-2 transition-colors hover:text-[#b8983e]"
          >
            En savoir plus
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => handleChoice(false)}
            className="cursor-pointer rounded-full px-4 py-2 text-xs font-medium text-[#2d4a4a]/50 transition-colors hover:bg-[#2d4a4a]/5 hover:text-[#2d4a4a]"
          >
            Essentiels uniquement
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="cursor-pointer rounded-full bg-[#2d4a4a] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#2d4a4a]/85"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}

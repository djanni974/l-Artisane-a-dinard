"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  duration?: string;
  delay?: string;
  threshold?: number;
  once?: boolean;
}

export function AnimateOnScroll({
  children,
  className,
  animation = "fade-in slide-in-from-bottom-4",
  duration = "duration-700",
  delay = "",
  threshold = 0.15,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={cn(
        !isVisible && "opacity-0 translate-y-0",
        isVisible && `animate-in ${animation} ${duration} ${delay} fill-mode-[both]`,
        className
      )}
    >
      {children}
    </div>
  );
}

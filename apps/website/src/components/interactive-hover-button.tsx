"use client";

import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: InteractiveHoverButtonProps) {
  return (
    <button
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-[#2d4a4a]/15 bg-white p-2 px-6 text-center font-medium",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#2d4a4a] transition-all duration-300 group-hover:scale-[100.8]" />
        <span className="inline-block text-sm tracking-wide transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span className="text-sm tracking-wide">{children}</span>
        <IconArrowRight className="h-4 w-4" stroke={1.5} />
      </div>
    </button>
  );
}

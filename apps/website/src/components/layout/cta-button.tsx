import { InteractiveHoverButton } from "@/components/interactive-hover-button";
import { siteConfig } from "@/data/site";

interface CtaButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export function CtaButton({
  children = "Prendre rendez-vous",
  className,
}: CtaButtonProps) {
  const href = siteConfig.booking.url || siteConfig.owner.phoneHref;

  return (
    <a
      href={href}
      target={siteConfig.booking.url ? "_blank" : undefined}
      rel={siteConfig.booking.url ? "noopener noreferrer" : undefined}
    >
      <InteractiveHoverButton className={className}>
        {children}
      </InteractiveHoverButton>
    </a>
  );
}

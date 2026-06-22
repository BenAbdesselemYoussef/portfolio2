import { cn } from "@/lib/utils";

type CompanyLogoProps = {
  src: string;
  label: string;
  className?: string;
};

// Renders a monochrome logo SVG as a mask filled with currentColor, so it
// inherits the theme's text color instead of its original brand colors.
export function CompanyLogo({ src, label, className }: CompanyLogoProps) {
  const mask = `url("${src}") center / contain no-repeat`;
  return (
    <span
      role="img"
      aria-label={label}
      className={cn("block bg-current", className)}
      style={{ mask, WebkitMask: mask }}
    />
  );
}

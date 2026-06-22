import Image from "next/image";

import { cn } from "@/lib/utils";

type ProjectImageProps = {
  src?: string;
  title: string;
  className?: string;
  sizes?: string;
};

// A project's cover image. Falls back to a brand-tinted gradient with the
// project name so cards still look intentional before a screenshot is added.
export function ProjectImage({ src, title, className, sizes }: ProjectImageProps) {
  return (
    <div className={cn("bg-muted relative overflow-hidden", className)}>
      {src ? (
        <Image src={src} alt={title} fill sizes={sizes} className="object-cover" />
      ) : (
        <div className="from-brand/15 via-card to-card absolute inset-0 grid place-items-center bg-gradient-to-br">
          <span className="text-foreground/25 px-4 text-center font-mono text-lg font-medium">
            {title}
          </span>
        </div>
      )}
    </div>
  );
}

import Image from "next/image";

import { cn } from "@/lib/utils";

// Wraps a (dark-theme) app screenshot in a fixed-dark window chrome so it reads
// as an app window and stays intentional in both light and dark site themes.
export function ScreenshotFrame({
  src,
  alt,
  sizes,
  aspect = "aspect-[16/10]",
  className,
}: {
  src?: string;
  alt: string;
  sizes?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-black/20",
        className,
      )}
      style={{ background: "oklch(0.17 0.006 264)" }}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
      </div>
      <div className={cn("relative", aspect)}>
        {src ? (
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
        ) : (
          <div className="from-brand/15 grid h-full place-items-center bg-gradient-to-br to-transparent">
            <span className="px-4 text-center font-mono text-lg text-white/30">{alt}</span>
          </div>
        )}
      </div>
    </div>
  );
}

import { readFileSync } from "node:fs";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { siteUrl } from "@/lib/site";

// Open Graph image dimensions (the de-facto 1.91:1 standard).
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

type OgFonts = NonNullable<ConstructorParameters<typeof ImageResponse>[1]>["fonts"];

// Brand palette (hex approximations of the "Clean Dark" oklch tokens — Satori
// has no oklch support).
const COLORS = {
  bgFrom: "#0b0d12",
  bgTo: "#13161d",
  foreground: "#f4f5f7",
  subtitle: "#aab1bf",
  muted: "#9097a5",
  accent: "#6ea8ff",
  chipText: "#c7ccd6",
  chipBorder: "rgba(255,255,255,0.14)",
};

// Fonts are read once at module load. Geist covers Latin; Cairo is a glyph
// fallback so Arabic (the /ar locale) renders correctly. Satori falls back
// across the loaded faces for glyphs the primary font lacks.
const fontDir = join(process.cwd(), "lib/og/fonts");
const read = (file: string) => readFileSync(join(fontDir, file));

const fonts: OgFonts = [
  { name: "Geist", data: read("geist-400.woff"), weight: 400, style: "normal" },
  { name: "Geist", data: read("geist-600.woff"), weight: 600, style: "normal" },
  { name: "Geist", data: read("geist-700.woff"), weight: 700, style: "normal" },
  { name: "Cairo", data: read("cairo-400.woff"), weight: 400, style: "normal" },
  { name: "Cairo", data: read("cairo-700.woff"), weight: 700, style: "normal" },
];

// Bare host (no protocol) shown as the footer brand mark.
const host = siteUrl.replace(/^https?:\/\//, "");

type OgProps = {
  locale: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  tags: readonly string[];
};

/**
 * Render a branded, localized 1200×630 social card. Used by the file-based
 * `opengraph-image` routes for the home page and each case study.
 */
export function renderOgImage({ locale, eyebrow, title, subtitle, tags }: OgProps) {
  const rtl = locale === "ar";
  // Keep the subtitle from overflowing the card on long summaries.
  const clipped = subtitle.length > 170 ? `${subtitle.slice(0, 168)}…` : subtitle;

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: `linear-gradient(135deg, ${COLORS.bgFrom} 0%, ${COLORS.bgTo} 100%)`,
        color: COLORS.foreground,
        fontFamily: "Geist, Cairo",
        direction: rtl ? "rtl" : "ltr",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 28,
          color: COLORS.muted,
        }}
      >
        <div style={{ width: 14, height: 14, borderRadius: 9999, background: COLORS.accent }} />
        <div style={{ display: "flex" }}>{eyebrow}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            // Tighten Latin; Arabic shaping looks wrong with negative tracking.
            letterSpacing: rtl ? 0 : -2,
            maxWidth: 1040,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            lineHeight: 1.35,
            color: COLORS.subtitle,
            maxWidth: 1000,
          }}
        >
          {clipped}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <div style={{ display: "flex", gap: 14, flexShrink: 1, overflow: "hidden" }}>
          {tags.slice(0, 4).map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                border: `1px solid ${COLORS.chipBorder}`,
                borderRadius: 9999,
                padding: "10px 22px",
                fontSize: 24,
                color: COLORS.chipText,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: COLORS.accent,
            fontWeight: 600,
            flexShrink: 0,
            whiteSpace: "nowrap",
            direction: "ltr",
          }}
        >
          {host}
        </div>
      </div>
    </div>,
    { ...OG_SIZE, fonts },
  );
}

import { Cairo, Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// Dedicated Arabic face for the /ar locale. Layered after Geist in the font
// stack so Latin text stays Geist and Arabic glyphs use Cairo. preload: false
// keeps it from downloading on pages with no Arabic text.
export const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
  preload: false,
});

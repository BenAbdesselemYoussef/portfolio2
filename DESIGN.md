# Design System — "Clean Dark"

The visual language for this portfolio. **Single source of truth for tokens is `app/globals.css`.**
Build every component from these tokens — do not hardcode hex/oklch values in components.

## Direction

Dark-first, minimal, and confident. A deep cool near-black canvas, restrained grayscale
surfaces, generous whitespace, crisp typography, and **one** accent (blue) used sparingly for
emphasis and primary actions. Subtle technical cues — monospace metadata, hairline borders —
nod to the systems/AI work without becoming a gimmick.

## Color tokens

Defined as oklch CSS variables in `app/globals.css` under `:root` (light) and `.dark` (dark,
the primary brand surface). Consumed through Tailwind utilities, never directly.

| Token                                  | Utility                             | Use                                    |
| -------------------------------------- | ----------------------------------- | -------------------------------------- |
| `--background` / `--foreground`        | `bg-background` / `text-foreground` | Page canvas + body text                |
| `--card` / `--card-foreground`         | `bg-card`                           | Elevated surfaces (cards, popovers)    |
| `--brand` / `--brand-foreground`       | `text-brand` / `bg-brand`           | The accent — emphasis, highlights      |
| `--primary` / `--primary-foreground`   | `bg-primary`                        | Primary buttons/actions (= brand)      |
| `--secondary` / `--muted` / `--accent` | `bg-muted`, `text-muted-foreground` | Quiet surfaces + secondary text        |
| `--border` / `--input` / `--ring`      | `border-border`, `ring-ring`        | Hairlines, inputs, focus rings         |
| `--chart-1…5`                          | `text-chart-1` …                    | Cohesive data-viz palette (blue→amber) |
| `--destructive`                        | `bg-destructive`                    | Errors / destructive actions           |

**Accent discipline:** at most one brand-colored element per viewport section. Everything else
is grayscale. If two things are blue, one of them is probably wrong.

## Typography

- **Sans (UI + headings):** Geist — `font-sans` (also `font-heading`). Wired via `next/font`
  as `--font-sans`.
- **Mono (metadata, code, labels):** Geist Mono — `font-mono` (`--font-mono`).
- Headings use `tracking-tight` + `text-balance`; body prose uses `text-pretty`.
- Eyebrows / metadata: mono, `text-xs`, `uppercase`, wide tracking.

## Radius & spacing

- Base radius `--radius: 0.625rem`; scale exposed as `rounded-sm…rounded-4xl`.
- Prefer generous vertical rhythm (sections breathe). Whitespace is part of the design.

## Theming

- The brand is **dark by default** (`<html class="dark">` today; managed by `next-themes` once
  the theme toggle lands — see issue #4).
- Light mode is fully tokenized and must remain usable (AA contrast in both themes).

## Motion & accessibility

- Respect `prefers-reduced-motion` (smooth scroll and animations degrade to instant).
- Maintain visible focus rings (`outline-ring/50`) — never remove focus outlines.
- Target WCAG AA contrast in both themes.

## Components

- Built on **shadcn/ui** (Radix primitives) in `components/ui/`. Add with
  `pnpm dlx shadcn@latest add <component>`.
- Compose app-specific UI in `components/`; keep `components/ui/` close to upstream.
- Use the `cn()` helper (`lib/utils.ts`) for conditional classes.

## Page composition

- **Route files are thin shells.** A `page.tsx` only resolves the locale,
  composes section components, and passes data — no inline markup or view logic.
- Page sections live in `components/sections/` (e.g. `Hero`, the upcoming
  `WorkSection`, `AboutSection`, `ContactSection`). A page should read as a short
  list of composed sections.
- This keeps pages glanceable, sections reusable/testable, and content work
  additive: build a section component, drop it into the shell.

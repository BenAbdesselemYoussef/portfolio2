import { z } from "zod";

const isoMonth = z.string().regex(/^\d{4}-\d{2}$/, "Expected an ISO month, e.g. 2025-09");

// Text that must be provided in every supported locale.
export const localizedTextSchema = z.object({
  en: z.string().min(1),
  fr: z.string().min(1),
  ar: z.string().min(1),
});

export const experienceSchema = z.object({
  company: z.string().min(1), // proper noun — not localized
  logo: z.string().optional(), // path to a monochrome SVG under /public
  role: localizedTextSchema,
  location: localizedTextSchema.optional(),
  start: isoMonth,
  end: z.union([isoMonth, z.literal("present")]),
  highlights: z.array(localizedTextSchema).min(1),
  stack: z.array(z.string().min(1)), // tech tokens — not localized
});

export const projectDomainSchema = z.enum(["ai", "saas", "real-time", "data", "frontend"]);

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/, "Lowercase, dash-separated slug"),
  title: localizedTextSchema,
  summary: localizedTextSchema,
  domain: z.array(projectDomainSchema).min(1),
  stack: z.array(z.string().min(1)),
  links: z.object({ demo: z.url().optional(), repo: z.url().optional() }).optional(),
  featured: z.boolean().optional(),
});

export const skillGroupSchema = z.object({
  category: localizedTextSchema,
  items: z.array(z.string().min(1)).min(1), // tech tokens — not localized
});

/**
 * Validate a content collection against its schema at module load (build time).
 * Throws a readable error so bad content fails the build instead of shipping.
 */
export function validateCollection<S extends z.ZodType>(
  schema: S,
  data: unknown,
  label: string,
): z.infer<S>[] {
  const result = z.array(schema).safeParse(data);
  if (!result.success) {
    throw new Error(`Invalid "${label}" content:\n${z.prettifyError(result.error)}`);
  }
  return result.data;
}

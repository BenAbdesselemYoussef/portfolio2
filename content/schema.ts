import { z } from "zod";

const isoMonth = z.string().regex(/^\d{4}-\d{2}$/, "Expected an ISO month, e.g. 2025-09");

export const experienceSchema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  location: z.string().optional(),
  start: isoMonth,
  end: z.union([isoMonth, z.literal("present")]),
  highlights: z.array(z.string().min(1)).min(1),
  stack: z.array(z.string().min(1)),
});

export const projectDomainSchema = z.enum(["ai", "saas", "real-time", "data", "frontend"]);

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/, "Lowercase, dash-separated slug"),
  title: z.string().min(1),
  summary: z.string().min(1),
  domain: z.array(projectDomainSchema).min(1),
  stack: z.array(z.string().min(1)),
  links: z.object({ demo: z.url().optional(), repo: z.url().optional() }).optional(),
  featured: z.boolean().optional(),
});

export const skillGroupSchema = z.object({
  category: z.enum(["Core Development", "AI & Data", "Cloud & Automation", "Methodologies"]),
  items: z.array(z.string().min(1)).min(1),
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

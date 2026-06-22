import { z } from "zod";

// Shared contact schema — used by the form UI (#15) and the API route (#16).
// Messages are stable keys; the UI localizes them via the Contact namespace.
export const contactSchema = z.object({
  name: z.string().trim().min(1, "name_required").max(80, "name_long"),
  email: z
    .string()
    .trim()
    .min(1, "email_required")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "email_invalid"),
  message: z.string().trim().min(10, "message_short").max(2000, "message_long"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const contactFields = ["name", "email", "message"] as const;
export type ContactField = (typeof contactFields)[number];

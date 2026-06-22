import type { z } from "zod";

import type {
  experienceSchema,
  localizedTextSchema,
  projectDomainSchema,
  projectSchema,
  skillGroupSchema,
} from "@/content/schema";

// Types are inferred from the Zod schemas — single source of truth, no drift.
export type LocalizedText = z.infer<typeof localizedTextSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchema>;
export type ProjectDomain = z.infer<typeof projectDomainSchema>;
export type SkillGroup = z.infer<typeof skillGroupSchema>;

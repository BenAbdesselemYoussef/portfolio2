import { experienceSchema, validateCollection } from "@/content/schema";

// Seeded from the CV in #8. Validated against experienceSchema at build time.
export const experience = validateCollection(experienceSchema, [], "experience");

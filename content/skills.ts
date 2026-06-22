import { skillGroupSchema, validateCollection } from "@/content/schema";

// Populated in #9. Validated against skillGroupSchema at build time.
export const skills = validateCollection(skillGroupSchema, [], "skills");

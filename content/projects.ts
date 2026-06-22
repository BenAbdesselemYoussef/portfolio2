import { projectSchema, validateCollection } from "@/content/schema";

// Populated in #10 (data + MDX case studies). Validated against projectSchema at build time.
export const projects = validateCollection(projectSchema, [], "projects");

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-02-19";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const projectIdPattern = /^[a-z0-9-]+$/;
const isValidProjectId = Boolean(
  rawProjectId && projectIdPattern.test(rawProjectId),
);

export const projectId = isValidProjectId ? rawProjectId! : "demo";

export const hasSanityConfig = Boolean(isValidProjectId && dataset);

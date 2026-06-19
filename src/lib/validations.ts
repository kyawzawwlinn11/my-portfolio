import { z } from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1).default("production"),
  NEXT_PUBLIC_SANITY_API_VERSION: z.string().min(1).default("2025-02-19"),
  SANITY_API_READ_TOKEN: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  CONTACT_EMAIL_TO: z.string().email().optional(),
  CONTACT_EMAIL_FROM: z.string().min(1).optional(),
});

export const parsedEnv = envSchema.safeParse(process.env);

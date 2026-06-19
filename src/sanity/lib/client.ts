import { createClient, type QueryParams } from "next-sanity";

import { apiVersion, dataset, hasSanityConfig, projectId } from "@/sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
  stega: {
    enabled: false,
  },
});

type SanityFetchArgs = {
  query: string;
  params?: QueryParams;
  tags?: string[];
  revalidate?: number;
};

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
  revalidate = 60,
}: SanityFetchArgs): Promise<QueryResponse | null> {
  if (!hasSanityConfig) {
    return null;
  }

  try {
    const data = await client.fetch<QueryResponse>(query, params, {
      next: { revalidate, tags },
    });

    return data ?? null;
  } catch {
    return null;
  }
}

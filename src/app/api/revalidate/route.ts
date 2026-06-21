import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

type SanityWebhookBody = {
  _type?: string;
  slug?: {
    current?: string;
  };
};

const TAGS_BY_TYPE: Record<string, string[]> = {
  siteSettings: ["site-settings"],
  profile: ["profile"],
  experience: ["experience"],
  skill: ["skills"],
  skillCategory: ["skills"],
  project: ["projects"],
  projectCategory: ["projects"],
  blogPost: ["blog"],
  blogCategory: ["blog"],
  author: ["blog"],
  service: ["services"],
};

export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  const incomingSecret =
    request.headers.get("x-revalidate-secret") ??
    new URL(request.url).searchParams.get("secret");

  if (!secret || incomingSecret !== secret) {
    return NextResponse.json({ message: "Invalid revalidation secret." }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as SanityWebhookBody | null;
  const documentType = body?._type;
  const tags = documentType ? TAGS_BY_TYPE[documentType] ?? [] : [];

  for (const tag of tags) {
    revalidateTag(tag, "max");
  }

  if (documentType === "project" && body?.slug?.current) {
    revalidateTag(`project:${body.slug.current}`, "max");
  }

  if (documentType === "blogPost" && body?.slug?.current) {
    revalidateTag(`post:${body.slug.current}`, "max");
  }

  return NextResponse.json({
    revalidated: true,
    documentType: documentType ?? null,
    tags,
  });
}

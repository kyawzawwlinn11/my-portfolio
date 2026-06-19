import { NextResponse } from "next/server";

import { sendContactMessage } from "@/features/contact/actions";
import { contactSchema } from "@/features/contact/schema";

export async function POST(request: Request) {
  const body = (await request.json()) as unknown;
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Please check the form fields.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    const result = await sendContactMessage(parsed.data);
    return NextResponse.json(result, { status: result.ok ? 200 : 500 });
  } catch (error) {
    console.error("Contact API failed", error);

    return NextResponse.json(
      { message: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}

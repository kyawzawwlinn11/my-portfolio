import { Resend } from "resend";

import type { ContactFormValues } from "@/features/contact/schema";

type SendContactResult = {
  ok: boolean;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendContactMessage(
  values: ContactFormValues,
): Promise<SendContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to || !from) {
    return {
      ok: false,
      message:
        "Contact email is not configured yet. Please try again later.",
    };
  }

  const resend = new Resend(apiKey);
  const safeValues = {
    name: escapeHtml(values.name),
    email: escapeHtml(values.email),
    subject: escapeHtml(values.subject),
    message: escapeHtml(values.message).replaceAll("\n", "<br />"),
  };

  const { error } = await resend.emails.send({
    from,
    to,
    subject: `Portfolio contact: ${safeValues.subject}`,
    replyTo: values.email,
    html: `
      <div>
        <p><strong>Name:</strong> ${safeValues.name}</p>
        <p><strong>Email:</strong> ${safeValues.email}</p>
        <p><strong>Subject:</strong> ${safeValues.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeValues.message}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend contact email failed", {
      name: error.name,
      message: error.message,
    });

    return {
      ok: false,
      message: "Unable to send your message right now.",
    };
  }

  return {
    ok: true,
    message: "Thanks. Your message has been sent.",
  };
}

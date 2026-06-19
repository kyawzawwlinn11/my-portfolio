import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(4, "Please add a short subject."),
  message: z.string().min(20, "Please share a little more context."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  contactSchema,
  type ContactFormValues,
} from "@/features/contact/schema";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus(null);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const result = (await response.json()) as { message?: string };

    setStatus(result.message ?? "Message submitted.");
    if (response.ok) {
      reset();
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" autoComplete="name" {...register("name")} />
          {errors.name ? (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
          {errors.email ? (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" {...register("subject")} />
        {errors.subject ? (
          <p className="text-sm text-destructive">{errors.subject.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...register("message")} />
        {errors.message ? (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>

      {status ? <p className="text-sm text-muted-foreground">{status}</p> : null}
    </form>
  );
}

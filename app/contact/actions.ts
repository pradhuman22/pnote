"use server";
import { z } from "zod";
import { resend } from "@/lib/resend";

import ContactSubmitted from "./templates/contact-submitted";
import { contactSchema, subscriptionSchema } from "@/schema";

type ContactFormData = z.infer<typeof contactSchema>;
type SubscriptionFormData = z.infer<typeof subscriptionSchema>;

export async function sendEmail(values: ContactFormData) {
  const result = contactSchema.safeParse(values);
  if (!result.success)
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  const { name, email, message } = result.data;
  try {
    const sendConfirmMail = resend.emails.send({
      from: "Contact Form <support@shresthapradhuman.com.np>",
      to: email,
      subject: "Message Received",
      react: ContactSubmitted({ name }),
    });
    const sendInfoMail = resend.emails.send({
      from: "Contact Form <support@shresthapradhuman.com.np>",
      to: "shresthapradhuman2018@gmail.com",
      subject: "New Message Received",
      text: `Name: ${name}\nEmail:${email}\nMessage:${message}`,
    });
    await Promise.all([sendConfirmMail, sendInfoMail]);
    return { success: true };
  } catch (error) {
    console.error("Email send failed:", error);
    return {
      success: false,
      error:
        "Something went wrong while sending your message. Please try again.",
    };
  }
}

export async function subscribe(values: SubscriptionFormData) {
  const result = subscriptionSchema.safeParse(values);
  if (!result.success)
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  const { email } = result.data;
  try {
    await resend.contacts.create({
      email: email,
      audienceId: "ed0147cb-4e69-49d0-a82a-69e3bd8a4f78",
    });
    return { success: true };
  } catch (error) {
    console.error("Newsletter subscription failed:", error);
    return {
      success: false,
      error: "Something went wrong while subscribing. Please try again.",
    };
  }
}

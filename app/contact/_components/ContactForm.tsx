"use client";
import { z } from "zod";
import Link from "next/link";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import { contactSchema } from "@/schema";
import { sendEmail } from "../actions";

type FormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: FormData) => {
    startTransition(async () => {
      const result = await sendEmail(data);
      if (result.success) {
        toast.success("Message sent!");
        form.reset();
      } else {
        if (result.errors) {
          toast.error("Please fix the errors.");
        } else {
          toast.error(result.error || "Failed to send message.");
        }
      }
      form.reset();
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-5 grid gap-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-10">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor={field.name}
                  className="text-base text-inherit capitalize"
                >
                  {field.name}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="eg: John Doe"
                    className="border-accent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor={field.name}
                  className="text-base text-inherit capitalize"
                >
                  {field.name}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="border-accent"
                    {...field}
                    placeholder="eg: john@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel
                htmlFor={field.name}
                className="text-base text-inherit capitalize"
              >
                {field.name}
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Enter your message.."
                  className="border-accent min-h-52"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-2">
          <Button className="bg-primary/90 cursor-pointer">
            {isPending && <Loader2Icon className="animate-spin" />}
            Let&apos;s talk
          </Button>
          <p className="text-muted-foreground text-sm">
            By submitting this form, I agree to the{" "}
            <Link href={"/privacy"} className="text-primary hover:underline">
              privacy policy
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;

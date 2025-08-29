"use client";
import { z } from "zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";
import { subscriptionSchema } from "@/schema";
import { subscribe } from "../contact/actions";

type FormData = z.infer<typeof subscriptionSchema>;

const NewsLetterForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<FormData>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (values: FormData) => {
    startTransition(async () => {
      const response = await subscribe(values);
      if (!response.success) {
        toast.error(response.error);
      }
      if (response.success) {
        toast.success("Newsletter Subscription Completted successfully.");
      }
      form.reset();
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Email Address"
                  className="border-accent-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full cursor-pointer">
          {isPending && <Loader2Icon className="mr-2 animate-spin" />}SUBSCRIBE
        </Button>
      </form>
    </Form>
  );
};

export default NewsLetterForm;

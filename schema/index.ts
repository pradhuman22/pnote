import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, {
      message: " Name must not be more than 100 characters ",
    })
    .refine((data) => data.length > 3, {
      message: "Name must be atleast more than 3 characters.",
    }),
  email: z.string().email("Invalid Email").min(1, "Email is required"),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(300, {
      message: "Message must not be more than 300 characters",
    })
    .refine((data) => data.length > 3, {
      message: "Message must be atleast 3 characters long",
    }),
});

export const subscriptionSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid Email" }),
});

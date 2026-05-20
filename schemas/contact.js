import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Full name is required").max(100, "Name is too long"),
  email: z.string().email("A valid email is required"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required").max(5000, "Message is too long"),
});

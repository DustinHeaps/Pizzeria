import { z } from "zod";

export const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

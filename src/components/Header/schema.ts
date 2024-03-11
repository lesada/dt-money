import * as z from "zod";

export const headerSchema = z.object({
  description: z.string(),
  type: z.enum(["income", "outcome"]),
  category: z.string(),
  value: z.number(),
});

export type HeaderSchema = z.infer<typeof headerSchema>;

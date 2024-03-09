import * as z from "zod";

export const headerSchema = z.object({
  description: z.string(),
  value: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

export type HeaderSchema = z.infer<typeof headerSchema>;

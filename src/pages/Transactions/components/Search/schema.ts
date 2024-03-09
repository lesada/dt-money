import * as z from "zod";

export const searchSchema = z.object({
  search: z.string().optional(),
});

export type SearchSchema = z.infer<typeof searchSchema>;

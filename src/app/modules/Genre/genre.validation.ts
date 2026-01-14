import z from "zod";

export const createGenreZodSchema = z.object({
  name: z
    .string({ error: "Name must be string" })
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(20, { message: "Name cannot exceed 20 characters." }),
});

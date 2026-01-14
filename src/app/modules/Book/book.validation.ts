import z from "zod";

export const createBookZodSchema = z.object({
  title: z
    .string({ error: "Title must be string" })
    .min(2, { message: "Title must be at least 2 characters long." })
    .max(50, { message: "Title cannot exceed 50 characters." }),
  author: z
    .string({ error: "Author must be string" })
    .min(2, { message: "Author must be at least 2 characters long." })
    .max(50, { message: "Author cannot exceed 50 characters." }),
  genre: z
    .string({ error: "Genre must be string" })
    .min(2, { message: "Genre must be at least 2 characters long." })
    .max(50, { message: "Genre cannot exceed 50 characters." }),
  description: z
    .string({ error: "Description must be string" })
    .min(2, { message: "Description must be at least 2 characters long." })
    .max(50, { message: "Description cannot exceed 50 characters." }),
});

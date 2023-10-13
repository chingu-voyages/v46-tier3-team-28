import z from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  name: z.string().nullish(),
  password: z.string().min(8),
});

export const collectionCreateSchema = z.object({
  // id: z.string(),
  userId: z.string(),
  // createdAt: z.date().nullish(),
  // updatedAt: z.date().nullish(),
  title: z.string(),
  // private: z.boolean().nullish(),
});

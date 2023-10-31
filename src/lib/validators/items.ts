import z from 'zod';

export const itemCreationSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  url: z.string(),
  image: z.string(),
  note: z.string().optional(),
});

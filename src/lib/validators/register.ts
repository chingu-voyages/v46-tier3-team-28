import z from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  name: z.string().nullish(),
  password: z.string().min(8),
});



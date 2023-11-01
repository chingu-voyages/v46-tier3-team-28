import z from 'zod';

export const routeContextSchema = z.object({
  params: z.object({
    collectionId: z.string(),
  }),
});

export const collectionCreateSchema = z.object({
  // id: z.string(),
  userId: z.string(),
  // createdAt: z.date().nullish(),
  // updatedAt: z.date().nullish(),
  title: z.string(),
  description: z.string(),
  // private: z.boolean().nullish(),
});

export const collectionPatchSchema = z.object({
  title: z.string().optional(),
  private: z.boolean().optional(),
  description: z.string(),
});

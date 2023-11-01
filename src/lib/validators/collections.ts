import z from 'zod';

export const routeContextSchema = z.object({
  params: z.object({
    collectionId: z.string(),
  }),
});

export const collectionCreateSchema = z.object({
  // id: z.string(),
<<<<<<< HEAD
  // userId: z.string(),
  // createdAt: z.date().nullish(),
  // updatedAt: z.date().nullish(),
  title: z.string(),
  description: z.string(),
  private: z.string().optional(),
=======
  userId: z.string(),
  // createdAt: z.date().nullish(),
  // updatedAt: z.date().nullish(),
  title: z.string(),
  description: z.string(),
  // private: z.boolean().nullish(),
>>>>>>> a85024e (feat: create get and post endpoint for items)
});

export const collectionPatchSchema = z.object({
  title: z.string().optional(),
  private: z.boolean().optional(),
<<<<<<< HEAD
<<<<<<< HEAD
  description: z.string(),
=======
>>>>>>> a85024e (feat: create get and post endpoint for items)
=======
  description: z.string(),
>>>>>>> a88b5c5 (feat: add dialog ui for create collection)
});

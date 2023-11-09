import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { db } from '@/db';
import { collections, items } from '@/db/schema';
import { itemCreationSchema } from '@/lib/validators/items';
import { eq, sql } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import z from 'zod';

const itemRouteContextSchema = z.object({
  params: z.object({
    collectionId: z.string(),
    itemId: z.string(),
  }),
});

export async function PATCH(req: Request, context: z.infer<typeof itemRouteContextSchema>) {
  try {
    // validate route params
    const { params } = itemRouteContextSchema.parse(context);
    console.log('here', params);

    // check if user has access to collection
    if (!(await verifyIfUserHasAccess(params.collectionId))) {
      return new Response(null, { status: 403 });
    }

    // Get request body and validate it
    const body = await req.json();
    const { title, description, image, url, note } = itemCreationSchema.parse(body);

    // Update the post
    await db
      .update(items)
      .set({
        title,
        description,
        image,
        url,
        note,
      })
      .where(eq(items.id, parseInt(params.itemId)));

    return new Response(null, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }
    console.log({ error });
    return new Response(null, { status: 500 });
  }
}

export async function DELETE(req: Request, context: z.infer<typeof itemRouteContextSchema>) {
  try {
    // Validate params
    const { params } = itemRouteContextSchema.parse(context);

    // Check if user has access
    if (!(await verifyIfUserHasAccess(params.collectionId))) {
      return new Response(null, { status: 403 });
    }

    // Delete collection
    await db.delete(items).where(eq(items.id, parseInt(params.itemId)));

    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

async function verifyIfUserHasAccess(collectionId: string) {
  const session = await getServerSession(authOptions);
  const result = await db
    .select({ count: sql<number>`count(*)` })
    .from(collections)
    .where(sql`${collections.id} = ${collectionId} and ${collections.userId} = ${session?.user.id}`);

  const { count } = result[0];
  return count > 0;
}

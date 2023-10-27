import { getServerSession } from 'next-auth';
import z from 'zod';
import { authOptions } from '../../auth/[...nextauth]/authOptions';
import { db } from '@/db';
import { eq, sql } from 'drizzle-orm';
import { collections } from '@/db/schema';
import { collectionPatchSchema } from '@/lib/validators/register';

// Add PATCH and DELETE methods for unique collection id
const routeContextSchema = z.object({
  params: z.object({
    collectionId: z.string(),
  }),
});

export async function PATCH(req: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    // validate route params
    const { params } = routeContextSchema.parse(context);
    console.log('here');
    // check if user has access to collection
    if (!(await verifyIfUserHasAccess(params.collectionId))) {
      return new Response(null, { status: 403 });
    }

    // Get request body and validate it
    const body = await req.json();
    const payload = collectionPatchSchema.parse(body);

    // Update the post
    await db
      .update(collections)
      .set({
        title: payload.title,
        private: payload.private,
      })
      .where(eq(collections.id, parseInt(params.collectionId)));

    return new Response(null, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

export async function DELETE(req: Request) {}

async function verifyIfUserHasAccess(collectionId: string) {
  const session = await getServerSession(authOptions);
  const result = await db
    .select({ count: sql<number>`count(*)` })
    .from(collections)
    .where(eq(collections.id, parseInt(collectionId)));

  const { count } = result[0];
  return count > 0;
}

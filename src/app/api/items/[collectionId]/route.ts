import { db } from '@/db';
import { items } from '@/db/schema';
import { routeContextSchema } from '@/lib/validators/collections';
import { itemCreationSchema } from '@/lib/validators/items';
import { getServerSession } from 'next-auth';
import z from 'zod';
import { authOptions } from '../../auth/[...nextauth]/authOptions';

// TODO: add delete and patch endpoint for items

export async function GET(req: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    // Validate params
    const { params } = routeContextSchema.parse(context);

    const items = await db.query.items.findMany({
      where: (items, { eq }) => eq(items.collectionId, params.collectionId as string),
    });

    return new Response(JSON.stringify(items), { status: 200 });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function POST(req: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    // Validate params
    const {
      params: { collectionId },
    } = routeContextSchema.parse(context);

    // Parse and validate input
    const json = await req.json();
    const { title, description, url, image, note } = itemCreationSchema.parse(json);

    // Add new item to collection
    const item = await db.insert(items).values({
      title,
      description,
      url,
      image,
      note,
      collectionId,
    });

    return new Response(JSON.stringify(item), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

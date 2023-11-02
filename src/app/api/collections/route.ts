import { db } from '@/db';
import { collections } from '@/db/schema';
import { getServerSession } from 'next-auth';
import z from 'zod';
import { authOptions } from '../auth/[...nextauth]/authOptions';
import { collectionCreateSchema } from '@/lib/validators/collections';

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    const { user } = session;

    const collections = await db.query.collections.findMany({
      where: (collections, { eq }) => eq(collections.userId, user.id as string),
    });

    return new Response(JSON.stringify(collections), { status: 200 });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    const { user } = session;

    // Parse and validate input
    const json = await req.json();
    const payload = collectionCreateSchema.parse(json);

    // Create new collection entry in db linked to user
    const collection = await db.insert(collections).values({
      title: payload.title,
      userId: user.id,
      description: payload.description,
      private: payload.private === 'on' ? true : false,
    });

    return new Response(JSON.stringify(collection), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

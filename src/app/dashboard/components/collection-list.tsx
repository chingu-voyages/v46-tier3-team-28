import { db } from '@/db';
import { CollectionCard } from './collection-card';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

async function getCollections() {
  const sesssion = await getServerSession(authOptions);

  return await db.query.collections.findMany({
    where: (collections, { eq }) => eq(collections.userId, sesssion?.user.id as string),
  });
}

export async function CollectionList() {
  const collections = await getCollections();

  return (
    <section className="w-full grid grid-cols-3 gap-6 max-w-screen-xl mx-auto my-10">
      {collections.map((collection) => (
        <CollectionCard collection={collection} key={collection.id} />
      ))}
    </section>
  );
}

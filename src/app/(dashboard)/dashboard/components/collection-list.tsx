import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { db } from '@/db';
import { getServerSession } from 'next-auth';
import { CollectionCard } from './collection-card';
import { CreateDialog } from './create-dialog';
import Image from 'next/image';

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
      {collections.length ? (
        collections.map((collection) => <CollectionCard collection={collection} key={collection.id} />)
      ) : (
        <div className="col-span-3 max-w-2xl rounded-md bg-white border w-full mx-auto p-14 flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold text-center">No Collections found</h2>
          <Image width={380} height={380} src="/working-vacation.svg" alt="vacation girl illustration" />
          <CreateDialog />
        </div>
      )}
    </section>
  );
}

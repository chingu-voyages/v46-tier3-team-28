import { Button } from '@/components/ui/button';
import { db } from '@/db';
import { ItemList } from './components/item-list';
import { LuPlus } from 'react-icons/lu';
import { ItemDialog } from './components/item-dialog';

type PageParams = {
  params: {
    collectionId: string;
  };
};

async function getCollectionItemsAndInfo(collectionId: string) {
  const collection = await db.query.collections.findFirst({
    where: (collections, { eq }) => eq(collections.id, Number(collectionId)),
  });
  const items = await db.query.items.findMany({
    where: (items, { eq }) => eq(items.collectionId, collectionId),
  });

  return { collection, items };
}

export default async function Page({ params }: PageParams) {
  const { collection, items } = await getCollectionItemsAndInfo(params.collectionId);

  return (
    <main className="w-full">
      <div className="border-b bg-background">
        <div className="flex max-w-screen-xl mx-auto flex-row justify-between items-center h-36">
          <h1 className="text-3xl font-bold tracking-tight">{collection?.title}</h1>
          <ItemDialog
            trigger={
              <Button>
                <LuPlus className="mr-2" />
                Add Item
              </Button>
            }
          />
        </div>
      </div>
      <ItemList items={items} />
    </main>
  );
}

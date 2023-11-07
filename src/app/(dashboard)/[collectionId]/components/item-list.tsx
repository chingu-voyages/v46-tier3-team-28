import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { LuPlus } from 'react-icons/lu';
import { ItemCard } from './item-card';
import { ItemDialog } from './item-dialog';

type ItemListProps = {
  items: {
    id: number;
    image: string | null;
    description: string | null;
    title: string;
    collectionId: string | null;
    url: string | null;
    note: string | null;
  }[];
  collectionId: string;
};

export function ItemList({ items, collectionId }: ItemListProps) {
  return (
    <section className="w-full grid grid-cols-3 gap-6 max-w-screen-xl mx-auto py-10">
      {items.length ? (
        items.map((item) => <ItemCard item={item} key={item.id} />)
      ) : (
        <div className="col-span-3 max-w-2xl rounded-md bg-white border w-full mx-auto p-14 flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold text-center">No items in collection</h2>
          <Image width={380} height={380} src="/working-vacation.svg" alt="vacation girl illustration" />
          <ItemDialog
            trigger={
              <Button>
                <LuPlus className="mr-2" />
                Add Item
              </Button>
            }
            collectionId={collectionId}
          />
        </div>
      )}
    </section>
  );
}

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ItemCard } from './item-card';
import { Button } from '@/components/ui/button';
import { LuPlus } from 'react-icons/lu';
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
    <section className="w-full grid grid-cols-3 gap-6 max-w-screen-xl mx-auto my-10">
      {items.length ? (
        items.map((item) => <ItemCard item={item} key={item.id} />)
      ) : (
        <div className="col-span-3 max-w-2xl rounded-md bg-white border w-full mx-auto p-14 flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold text-center">No items in collection</h2>
          <img
            width={380}
            height={380}
            src="https://illustrations.popsy.co/blue/working-vacation.svg"
            alt="vacation girl illustration"
          />
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

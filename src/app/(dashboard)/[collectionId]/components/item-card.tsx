'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';
import { LuExternalLink } from 'react-icons/lu';
import { ItemForm } from './item-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type ItemCardProps = {
  item: {
    id: number;
    image: string | null;
    description: string | null;
    title: string;
    collectionId: string | null;
    url: string | null;
    note: string | null;
  };
};

export function ItemCard({ item }: ItemCardProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const data = new FormData(e.currentTarget);
      const parsedData = Object.fromEntries(data.entries());

      const res = await fetch(`/api/items/${item.collectionId}/${item.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData),
      });

      if (!res.ok) {
        toast.error('Server error! Please try again.');
        setLoading(false);
        return;
      }

      setOpen(false);
      setLoading(false);
      router.refresh();
      toast.success('Item updated successfully!');
      console.log(res);
    } catch (error) {
      toast.error('Server error! Please try again.');
    }
  };
  return (
    <Card className="relative h-fit hover:shadow-lg group/card">
      <Link target="_blank" href={item.url ?? '#'}>
        <div className="group-hover/card:block hidden p-3 border bg-primary hover:bg-primary/90 rounded-full absolute -right-3.5 -top-3.5">
          <LuExternalLink className="w-5 h-5 text-background" />
        </div>
      </Link>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="cursor-pointer">
            <CardHeader className="space-y-2.5">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>{item.image && <img src={item.image} />}</CardContent>
          </div>
        </DialogTrigger>
        <DialogContent className="p-0 max-w-4xl gap-0">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle>Update Item</DialogTitle>
          </DialogHeader>
          <ItemForm
            loading={loading}
            update
            handleSubmit={handleSubmit}
            metaData={{
              title: item.title,
              description: item.description ?? '',
              image: item.image,
              link: item.url ?? '',
            }}
          />
        </DialogContent>
      </Dialog>
    </Card>
  );
}

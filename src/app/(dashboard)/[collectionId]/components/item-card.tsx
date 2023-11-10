'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LuExternalLink, LuTrash2 } from 'react-icons/lu';
import { toast } from 'sonner';
import { ItemForm } from './item-form';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

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

  const handleDelete = () => {
    const deletePromise = fetch(`/api/items/${item.collectionId}/${item.id}`, {
      method: 'DELETE',
    }).then((res) => {
      if (!res.ok) {
        throw new Error('Failed to delete collection');
      }

      return res.json();
    });

    toast.promise(deletePromise, {
      loading: 'Deleting Collection...',
      success: () => {
        router.refresh();
        return 'Item deleted successfully!';
      },
      error: 'Failed to delete item. Please try again!',
    });
  };

  return (
    <Card className="relative h-fit hover:shadow-lg group/card">
      <Link target="_blank" href={item.url ?? '#'}>
        <div className="group-hover/card:block hidden p-3 border bg-primary hover:bg-primary/90 rounded-full absolute -right-3.5 -top-3.5">
          <LuExternalLink className="w-5 h-5 text-background" />
        </div>
      </Link>
      <AlertDialog>
        <AlertDialogTrigger className="group-hover/card:block hidden" asChild>
          <Button
            variant="destructive"
            className="border-2 border-background hover:text-destructive hover:bg-background rounded-full h-8 items-center gap-2 absolute right-2 bottom-2"
          >
            <LuTrash2 />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your item and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className={buttonVariants({ variant: 'destructive' })} onClick={handleDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
            itemData={{
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

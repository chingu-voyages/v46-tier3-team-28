'use client';

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
import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { LuMoreHorizontal, LuPenLine, LuTrash2 } from 'react-icons/lu';
import { toast } from 'sonner';
import { Collection } from './collection-card';
import { useRouter } from 'next/navigation';

export function CollectionMoreButton({ collection }: Collection) {
  const router = useRouter();
  const handleDelete = async () => {
    const res = fetch(`/api/collections/${collection.id}`, {
      method: 'DELETE',
    }).then((res) => {
      if (!res.ok) throw new Error('Failed to delete collection');
      return res.json();
    });

    toast.promise(res, {
      loading: 'Deleting Collection...',
      success: 'Collection deleted successfully!',
      error: 'Failed to delete collection. Please try again!',
    });
    router.refresh();
  };

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" onClick={() => console.log(collection)} className={cn('h-auto px-2 z-10')}>
            <LuMoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="cursor-pointer">
            <LuPenLine className="mr-2" /> Edit
          </DropdownMenuItem>

          <AlertDialogTrigger asChild>
            <DropdownMenuItem className="cursor-pointer text-destructive hover:bg-destructive hover:text-background focus:bg-destructive focus:text-background">
              <LuTrash2 className="mr-2" /> Delete
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{`Delete ${collection.title}`}</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your collection and remove all associated data
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className={cn(buttonVariants({ variant: 'destructive' }))}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

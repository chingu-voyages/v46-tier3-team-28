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
import { useEffect, useState } from 'react';
import { LuMoreHorizontal, LuPenLine, LuTrash2 } from 'react-icons/lu';
import { toast } from 'sonner';
import { Collection } from './collection-card';
import { useRouter } from 'next/navigation';
import { CreateDialog } from './create-dialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CollectionForm } from './collection-form';

export function CollectionMoreButton({ collection }: Collection) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const router = useRouter();

  const handleDelete = () => {
    setDropdownOpen(false);
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

  async function handleEdit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      setLoadingEdit(true);

      const data = new FormData(event.currentTarget);
      const objFormData = Object.fromEntries(data.entries());

      const res = await fetch(`/api/collections/${collection.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objFormData),
      });

      if (res.ok) {
        toast.success('Successfully updated collection!');
        router.refresh();

        setLoadingEdit(false);
        setDropdownOpen(false);
      } else {
        setLoadingEdit(false);
        toast.error('Cannot update Collection. Please try again!');
      }
    } catch (error) {
      setLoadingEdit(false);
      toast.error('Server Error! Please try again');
    }
  }

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn('h-auto px-2 z-10')}>
          <LuMoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Dialog open={editDialog} onOpenChange={setEditDialog}>
          <DialogTrigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="cursor-pointer">
              <LuPenLine className="mr-2" /> Edit
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{`Edit ${collection.title}`}</DialogTitle>
            </DialogHeader>
            <CollectionForm
              buttonText="Update Collection"
              collection={collection}
              loading={loadingEdit}
              handleSubmit={handleEdit}
            />
          </DialogContent>
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              className="cursor-pointer text-destructive hover:bg-destructive hover:text-background focus:bg-destructive focus:text-background"
            >
              <LuTrash2 className="mr-2 w-6 h-6" /> Delete
            </DropdownMenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{`Delete ${collection.title}`}</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your collection and remove all associated
                data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setDropdownOpen(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} className={cn(buttonVariants({ variant: 'destructive' }))}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

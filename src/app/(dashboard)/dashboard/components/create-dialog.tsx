'use client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { CollectionForm } from './collection-form';

export function CreateDialog({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      setLoading(true);

      const data = new FormData(event.currentTarget);
      const objFormData = Object.fromEntries(data.entries());

      objFormData.id = uuidv4();

      const res = await fetch('/api/collections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objFormData),
      });

      if (res.ok) {
        // Redirect to unique collection page
        toast.success('Successfully created collection!');
        router.push(`/${objFormData.id}`);
      } else {
        setLoading(false);
        toast.error('Cannot create Collection. Please try again!');
      }
    } catch (error) {
      setLoading(false);
      toast.error('Server Error! Please try again');
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create a new Collection</DialogTitle>
        </DialogHeader>
        <CollectionForm loading={loading} handleSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}

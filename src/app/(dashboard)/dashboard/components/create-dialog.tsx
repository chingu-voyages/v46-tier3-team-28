'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';
import { LuLoader } from 'react-icons/lu';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

export function CreateDialog() {
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
      <DialogTrigger asChild>
        <Button>Create Collection</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create a new Collection</DialogTitle>
        </DialogHeader>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label className="text-sm" htmlFor="title">
              Collection Name
            </Label>
            <Input required name="title" id="title" placeholder="Enter name" />
          </div>
          <div>
            <Label className="text-sm" htmlFor="description">
              Description
            </Label>
            <Textarea
              name="description"
              required
              maxLength={255}
              rows={4}
              id="description"
              placeholder="Type a short description of your collection"
            />
          </div>
          <div className="flex flex-row justify-between">
            <Label className="text-sm" htmlFor="private-state">
              Private
            </Label>
            <Switch name="private" defaultChecked={true} id="private-state" />
          </div>
          <Button className="w-full" type="submit" disabled={loading}>
            {loading && <LuLoader className="animate-spin mr-2" />}
            Create Collection
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

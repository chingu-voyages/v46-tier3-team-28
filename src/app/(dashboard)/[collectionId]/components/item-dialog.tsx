'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuLoader } from 'react-icons/lu';
import { toast } from 'sonner';
import { ItemForm } from './item-form';

export type MetaTags = {
  title: string;
  description: string;
  image: string | null;
  link?: string;
};

type ItemDialogProps = {
  trigger: React.ReactNode;
  collectionId: string;
};

// TODO: Add zod validator to form (useful for url input)

export function ItemDialog({ trigger, collectionId }: ItemDialogProps) {
  const [open, setOpen] = useState(false);
  const [loadingMeta, setLoadingMeta] = useState(false);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState('');
  const [metaTagsData, setMetaTagsData] = useState<MetaTags>();
  const router = useRouter();

  // Reset State when closing modal
  useEffect(() => {
    if (open === false) {
      setMetaTagsData(undefined);
      setLink('');
    }
  }, [open]);

  const fetchMetaData = async () => {
    try {
      setLoadingMeta(true);
      const res = await fetch(`/api/edge/metatags?url=${link}`);
      const metaTags = (await res.json()) as MetaTags;

      if (!res.ok) {
        toast.error('Invalid URL. Please input a valid URL!');
        setLoadingMeta(false);
      }

      if (res.ok) {
        setLoadingMeta(false);
        setMetaTagsData({ ...metaTags, link });
      }
    } catch (error) {
      toast.error('Server Error. Please try again!');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const data = new FormData(e.currentTarget);
      const parsedData = Object.fromEntries(data.entries());

      const res = await fetch(`/api/items/${collectionId}`, {
        method: 'POST',
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
      toast.success('Item added successfully!');
    } catch (error) {
      toast.error('Server error! Please try again.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={cn('p-0', metaTagsData ? 'max-w-4xl' : 'max-w-lg')}>
        {loadingMeta && (
          <div className="absolute bg-secondary w-full h-full opacity-60 grid place-content-center">
            <LuLoader className="animate-spin w-5 h-5" />
          </div>
        )}
        <div>
          <div className="p-6 pb-4">
            <DialogHeader>
              <DialogTitle>Add new Item</DialogTitle>
            </DialogHeader>
          </div>
          {!metaTagsData ? (
            <div className="p-6 pt-2 flex gap-4 justify-between items-end">
              <div className="w-full">
                <Label className="text-sm">Input URL</Label>
                <Input
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && fetchMetaData()}
                  placeholder="https://www.your.cu/stom?link"
                />
              </div>
              <Button onClick={fetchMetaData} className="px-6">
                Add
              </Button>
            </div>
          ) : (
            <ItemForm loading={loading} handleSubmit={handleSubmit} itemData={metaTagsData} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

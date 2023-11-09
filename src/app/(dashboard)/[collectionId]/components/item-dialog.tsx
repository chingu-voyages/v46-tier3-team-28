'use client';

import { FormLabel } from '@/components/form-label';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuLoader } from 'react-icons/lu';
import { toast } from 'sonner';

type MetaTags = {
  title: string;
  description: string;
  image: string | null;
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
        setMetaTagsData(metaTags);
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
      }

      setOpen(false);
      setLoading(false);
      router.refresh();
      toast.success('Item added successfully!');
      console.log(res);
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
                  onKeyDown={(e) => (e.key === 'Enter' && fetchMetaData())}
                  placeholder="https://www.your.cu/stom?link"
                />
              </div>
              <Button onClick={fetchMetaData} className="px-6">
                Add
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-5">
              <form onSubmit={handleSubmit} className="p-6 pt-4 col-span-3 border-t space-y-6">
                <div>
                  <FormLabel>Title</FormLabel>
                  <Input
                    required
                    name="title"
                    className="bg-background"
                    value={metaTagsData.title}
                    onChange={(e) => setMetaTagsData((state) => ({ ...state, title: e.target.value }) as MetaTags)}
                  />
                </div>
                <div>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    className="bg-background"
                    name="description"
                    rows={4}
                    value={metaTagsData.description}
                    onChange={(e) =>
                      setMetaTagsData((state) => ({ ...state, description: e.target.value }) as MetaTags)
                    }
                  />
                </div>
                <div>
                  <FormLabel>URL</FormLabel>
                  <Input
                    required
                    name="url"
                    className="bg-background"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                <div>
                  <FormLabel>Image URL</FormLabel>
                  <Input
                    className="bg-background"
                    name="image"
                    value={metaTagsData.image ?? ''}
                    onChange={(e) => setMetaTagsData((state) => ({ ...state, image: e.target.value }) as MetaTags)}
                  />
                </div>
                <Button className="w-full" disabled={loading}>
                  {loading && <LuLoader className="animate-spin mr-2" />}
                  Create Item
                </Button>
              </form>
              <div className="col-span-2 border-l border-t bg-secondary flex items-center">
                <div className="m-2 border rounded-md">
                  <div>
                    <img
                      width={335}
                      height={185}
                      className="rounded-t-md"
                      onError={(e) => (e.currentTarget.src = '/default-image.jpeg')}
                      alt="Image preview"
                      src={metaTagsData.image ?? ''}
                    />
                  </div>
                  <div className="border-t p-2 bg-background rounded-b-md text-center">
                    <small className="font-medium">Image Preview</small>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

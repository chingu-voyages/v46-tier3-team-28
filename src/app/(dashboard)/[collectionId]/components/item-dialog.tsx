'use client';

import { FormLabel } from '@/components/form-label';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { LuLoader } from 'react-icons/lu';
import { toast } from 'sonner';

type MetaTags = {
  title: string;
  description: string;
  image: string | null;
};

export function ItemDialog({ trigger }: { trigger: React.ReactNode }) {
  const [loadingMeta, setLoadingMeta] = useState(false);
  const [link, setLink] = useState('');
  const [metaTagsData, setMetaTagsData] = useState<MetaTags>();

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
      console.log(metaTags);
    } catch (error) {
      toast.error('Server Error. Please try again!');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-xl w-full p-0">
        {loadingMeta && (
          <div className="absolute bg-secondary w-full h-full opacity-60 grid place-content-center">
            <LuLoader className="animate-spin w-5 h-5" />
          </div>
        )}
        <div className="">
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
                  placeholder="https://www.your.cu/stom?link"
                />
              </div>
              <Button onClick={fetchMetaData}>Add</Button>
            </div>
          ) : (
            <form className="p-6 pt-4 border-t space-y-6 bg-secondary">
              <div>
                <FormLabel>Title</FormLabel>
                <Input required className="bg-background" value={metaTagsData.title} />
              </div>
              <div>
                <FormLabel>Description</FormLabel>
                <Textarea className="bg-background" rows={4} value={metaTagsData.description} />
              </div>
              <div>
                <FormLabel>URL</FormLabel>
                <Input required className="bg-background" value={link} />
              </div>
              <div>
                <FormLabel>Image URL</FormLabel>
                <Input className="bg-background" value={metaTagsData.image ?? ''} />
              </div>
              <Button className="w-full">Create Item</Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

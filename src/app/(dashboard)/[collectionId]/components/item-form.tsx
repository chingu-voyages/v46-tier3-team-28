'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { LuLoader, LuTrash2 } from 'react-icons/lu';
import { MetaTags } from './item-dialog';
import { FormLabel } from '@/components/form-label';

type ItemFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  metaData: MetaTags;
  loading: boolean;
  update?: boolean;
};

export function ItemForm({ handleSubmit, metaData, loading, update }: ItemFormProps) {
  const [metaTagsData, setMetaTagsData] = useState<MetaTags>(metaData);

  return (
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
            onChange={(e) => setMetaTagsData((state) => ({ ...state, description: e.target.value }) as MetaTags)}
          />
        </div>
        <div>
          <FormLabel>URL</FormLabel>
          <Input
            required
            name="url"
            className="bg-background"
            value={metaTagsData.link}
            onChange={(e) => setMetaTagsData((state) => ({ ...state, link: e.target.value }))}
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
        <div className="flex gap-8">
          {update && (
            <Button variant="destructive" disabled={loading}>
              <LuTrash2 className="mr-2" />
              Delete
            </Button>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <LuLoader className="animate-spin mr-2" />}
            {update ? 'Update Item' : 'Create Item'}
          </Button>
        </div>
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
  );
}

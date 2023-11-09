'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { LuLoader } from 'react-icons/lu';
import { Collection } from './collection-card';
import { useEffect, useState } from 'react';

type CollectionFormProps = {
  collection?: Collection['collection'];
  loading: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  buttonText: string;
};

export function CollectionForm({ collection, loading, handleSubmit, buttonText }: CollectionFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);

  useEffect(() => {
    if (collection) {
      setTitle(collection.title);
      setDescription(collection.description);
      setIsPrivate(collection.private ?? true);
    }
  }, []);

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Label className="text-sm" htmlFor="title">
          Collection Name
        </Label>
        <Input
          required
          name="title"
          id="title"
          placeholder="Enter name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-between">
        <Label className="text-sm" htmlFor="private-state">
          Private
        </Label>
        <Switch
          checked={isPrivate}
          onCheckedChange={(e) => setIsPrivate(e)}
          name="private"
          defaultChecked={true}
          id="private-state"
        />
      </div>
      <Button className="w-full" type="submit" disabled={loading}>
        {loading && <LuLoader className="animate-spin mr-2" />}
        {buttonText ?? "Create Collection"}
      </Button>
    </form>
  );
}

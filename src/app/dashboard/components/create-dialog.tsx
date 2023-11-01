'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

export function CreateDialog() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(event);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Collection</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create a new Collection</DialogTitle>
          {/* <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </DialogDescription> */}
        </DialogHeader>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Collection Name</label>
            <Input required id="title" placeholder="Enter name" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Textarea
              required
              maxLength={255}
              rows={4}
              id="description"
              placeholder="Type a short description of your collection"
            />
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="private-state">Private</label>
            <Switch defaultChecked={true} id="private-state" />
          </div>
          <Button className="w-full" type="submit">
            Create Collection
          </Button>
        </form>
        {/* <DialogFooter>
          <Button className="w-full">Create Collection</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}

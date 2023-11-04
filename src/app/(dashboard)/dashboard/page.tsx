import { CollectionList } from './components/collection-list';
import { CreateDialog } from './components/create-dialog';

export default async function Page() {
  return (
    <main className="w-full">
      <div className="border-b bg-background">
        <div className="flex max-w-screen-xl mx-auto flex-row justify-between items-center h-36">
          <h1 className="text-3xl font-bold tracking-tight">My Collections</h1>
          <CreateDialog />
        </div>
      </div>
      <CollectionList />
    </main>
  );
}

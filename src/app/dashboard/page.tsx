import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { Button } from '@/components/ui/button';
import { CollectionList } from './components/collection-list';

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <main className="w-full">
      <div className="border-b bg-background">
        <div className="flex max-w-screen-xl mx-auto flex-row justify-between items-center h-36">
          <h1 className="text-3xl font-bold tracking-tight">My Collections</h1>
          <Button>Create Collection</Button>
        </div>
      </div>
      <CollectionList />
    </main>
  );
}

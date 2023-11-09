import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LuMoreHorizontal } from 'react-icons/lu';
import { CollectionMoreButton } from './collection-more-button';

export type Collection = {
  collection: {
    id: string;
    title: string;
    userId: string;
    description: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    private: boolean | null;
  };
};

export function CollectionCard({ collection }: Collection) {
  return (
    <Card className="hover:shadow-lg h-fit">
      <div className="flex flex-row">
        <Link className="w-full" href={`/${collection.id}`}>
          <CardHeader>
            <CardTitle className="flex flex-row justify-between">{collection.title}</CardTitle>
            <CardDescription>{collection.description}</CardDescription>
          </CardHeader>
        </Link>
        <div className="py-4 pr-6 flex flex-col items-end justify-between">
          {collection.private ? (
            <Badge variant="secondary">Private</Badge>
          ) : (
            <Badge variant="outline" className="text-background bg-foreground">
              Public
            </Badge>
          )}
          <CollectionMoreButton collection={collection} />
        </div>
      </div>
      {/* <CardContent></CardContent> */}
    </Card>
  );
}

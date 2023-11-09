import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { CollectionMoreButton } from './collection-more-button';
import { LuLayers } from 'react-icons/lu';
import { db } from '@/db';
import { eq, sql } from 'drizzle-orm';
import { items } from '@/db/schema';

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

async function getItemNo(collectionId: string) {
  const result = await db
    .select({ count: sql<number>`count(*)` })
    .from(items)
    .where(eq(items.collectionId, collectionId));

  const { count } = result[0];
  return count;
}

export async function CollectionCard({ collection }: Collection) {
  const itemNo = await getItemNo(collection.id);

  return (
    <Card className="hover:shadow-lg h-fit">
      <div className="flex flex-row">
        <Link className="w-full group" href={`/${collection.id}`}>
          <CardHeader>
            <CardTitle className="flex flex-row justify-between">
              <p className="group-hover:underline group-hover:underline-offset-4">{collection.title}</p>
              {collection.private ? (
                <Badge variant="secondary">Private</Badge>
              ) : (
                <Badge variant="outline" className="text-background bg-foreground">
                  Public
                </Badge>
              )}
            </CardTitle>
            <CardDescription>{collection.description}</CardDescription>
          </CardHeader>
          {/* <div className="py-4 pr-6 flex flex-col items-end justify-between"></div> */}
        </Link>
      </div>
      <CardContent className="flex justify-between">
        <div className="flex items-center gap-2.5">
          <LuLayers />
          <p className="text-sm">{itemNo} Items</p>
        </div>
        <CollectionMoreButton collection={collection} />
      </CardContent>
    </Card>
  );
}

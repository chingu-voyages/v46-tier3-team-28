import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

type Collection = {
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
    <Link href={`/${collection.id}`}>
      <Card className="hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex flex-row justify-between">
            {collection.title}
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
        {/* <CardContent></CardContent> */}
      </Card>
    </Link>
  );
}

import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

type Collection = {
  collection: {
    id: number;
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
    <Link href="#">
      <Card className="hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex flex-row justify-between">
            {collection.title}
            <Badge variant="secondary">{collection.private ? 'Private' : 'Public'}</Badge>
          </CardTitle>
          <CardDescription>{collection.description}</CardDescription>
        </CardHeader>
        {/* <CardContent></CardContent> */}
      </Card>
    </Link>
  );
}

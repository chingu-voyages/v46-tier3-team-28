import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

type ItemCardProps = {
  item: {
    id: number;
    image: string | null;
    description: string | null;
    title: string;
    collectionId: string | null;
    url: string | null;
    note: string | null;
  };
};

export function ItemCard({ item }: ItemCardProps) {
  return (
    <Link href="#">
      <Card>
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
        <CardContent>{item.image && <img src={item.image} />}</CardContent>
      </Card>
    </Link>
  );
}

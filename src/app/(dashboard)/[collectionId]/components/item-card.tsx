import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { LuExternalLink } from 'react-icons/lu';

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
    <Card className="relative h-fit hover:shadow-lg group/card">
      <Link target="_blank" href={item.url ?? '#'}>
        <div className="group-hover/card:block hidden p-3 border bg-primary hover:bg-primary/90 rounded-full absolute -right-3.5 -top-3.5">
          <LuExternalLink className="w-5 h-5 text-background" />
        </div>
      </Link>
      <Link href="#">
        <CardHeader className="space-y-2.5">
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
        <CardContent>{item.image && <img src={item.image} />}</CardContent>
      </Link>
    </Card>
  );
}

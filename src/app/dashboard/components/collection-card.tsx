import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export function CollectionCard() {
  return (
    <Link href="#">
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-row justify-between">
            The best songs in the world<Badge variant="secondary">Private</Badge>
          </CardTitle>
          <CardDescription>A collection of the best of the best songs in the world</CardDescription>
        </CardHeader>
        {/* <CardContent></CardContent> */}
      </Card>
    </Link>
  );
}

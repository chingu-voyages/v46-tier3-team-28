'use client';

import { cn } from '@/lib/utils';
import { collectionSchema } from '@/lib/validators/collections';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuCheck, LuChevronsUpDown, LuLoader2 } from 'react-icons/lu';
import { z } from 'zod';
import { buttonVariants } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

type Collection = z.infer<typeof collectionSchema>;

export function CollectionSelect() {
  const [collections, setCollections] = useState<Collection[]>();
  const pathname = usePathname();
  const [collectionName, setCollectionName] = useState<string>();

  useEffect(() => {
    const coll = collections?.filter((collection) => collection.id === pathname.slice(1));
    if (coll?.length) setCollectionName(coll[0].title);
  }, [pathname]);

  useEffect(() => {
    async function getCollectionList() {
      const res = await fetch('/api/collections');

      const data = (await res.json()) as Collection[];
      setCollections(data);
    }

    getCollectionList();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className={cn(buttonVariants({ variant: 'ghost' }), 'flex h-11 items-center space-x-3')}>
          <span className="truncate max-w-[100px] text-sm font-medium sm:max-w-[200px]">
            {pathname.slice(1) === 'dashboard' ? 'Dashboard' : `${collectionName}`}
          </span>
          <LuChevronsUpDown className="stroke-muted-foreground" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="sm:w-48">
        <DropdownMenuLabel>Collections</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {collections ? (
          collections.map((collection) => (
            <Link key={collection.id} href={`/${collection.id}`}>
              <DropdownMenuItem
                className={cn(
                  'flex items-center justify-between cursor-pointer',
                  pathname.slice(1) === collection.id &&
                    'bg-primary text-background hover:text-background hover:bg-primary focus:text-background focus:bg-primary',
                )}
              >
                {collection.title}
                {pathname.slice(1) === collection.id && <LuCheck className="ml-2" />}
              </DropdownMenuItem>
            </Link>
          ))
        ) : (
          <div className="w-full h-10 grid place-content-center">
            <LuLoader2 className="animate-spin w-4 h-4" />
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

'use client';

import { cn } from '@/lib/utils';
import { collectionSchema } from '@/lib/validators/collections';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuCheck, LuChevronsUpDown, LuFolderLock, LuFolderOpen, LuLoader2 } from 'react-icons/lu';
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
import { Skeleton } from '../ui/skeleton';

type Collection = z.infer<typeof collectionSchema>;

export function CollectionSelect() {
  const [collections, setCollections] = useState<Collection[]>();
  const pathname = usePathname();
  const [collectionName, setCollectionName] = useState<string>();
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    const coll = collections?.filter((collection) => collection.id === pathname.slice(1));
    if (coll?.length) {
      setCollectionName(coll[0].title);
    } else {
      setCollectionName(pathname.slice(1));
    }
    setFetching(false);
  }, [pathname, collections]);

  useEffect(() => {
    async function getCollectionList() {
      setFetching(true);
      const res = await fetch('/api/collections');

      const data = (await res.json()) as Collection[];
      setCollections(data);
    }

    getCollectionList();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {fetching || !collectionName ? (
          <Skeleton className="h-11 w-48" />
        ) : (
          <div className={cn(buttonVariants({ variant: 'ghost' }), 'flex h-11 items-center space-x-3')}>
            <span className="truncate max-w-[100px] text-sm font-medium sm:max-w-[200px] capitalize">
              {collectionName}
            </span>
            <LuChevronsUpDown className="stroke-muted-foreground" />
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="sm:w-52">
        <DropdownMenuLabel>Collections</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-52 overflow-y-scroll">
          {collections ? (
            collections.length ? (
              collections.map((collection) => (
                <Link key={collection.id} href={`/${collection.id}`}>
                  <DropdownMenuItem
                    className={cn(
                      'flex items-center justify-between cursor-pointer',
                      pathname.slice(1) === collection.id &&
                        'bg-primary text-background hover:text-background hover:bg-primary focus:text-background focus:bg-primary',
                    )}
                  >
                    <div className="flex items-center gap-4">
                      {collection.private ? <LuFolderLock /> : <LuFolderOpen />}
                      {collection.title}
                    </div>
                    {pathname.slice(1) === collection.id && <LuCheck className="ml-2" />}
                  </DropdownMenuItem>
                </Link>
              ))
            ) : (
              <div>
                <small className="px-2 py-1.5">No collections</small>
              </div>
            )
          ) : (
            <div className="w-full h-10 grid place-content-center">
              <LuLoader2 className="animate-spin w-4 h-4" />
            </div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

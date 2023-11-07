import { nameToInitials } from '@/lib/utils';
import { Session } from 'next-auth';
import { LuLogOut, LuSettings } from 'react-icons/lu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { signOut } from 'next-auth/react';

export function UserOptions({ session }: { session: Session }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={session.user.image ?? undefined} alt={session.user.name ?? undefined} />
          <AvatarFallback>{nameToInitials(session.user.name ?? '')}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2" align="end">
        <DropdownMenuLabel>
          <p className="truncate">{session.user.name}</p>
          <p className="truncate text-sm font-normal text-muted-foreground">{session.user.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <div className="flex items-center space-x-2">
              <LuSettings /> <span>Settings</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer" onClick={() => signOut({ callbackUrl: '/' })}>
            <div className="flex items-center space-x-2">
              <LuLogOut /> <span>Logout</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

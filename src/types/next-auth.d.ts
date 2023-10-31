import { User } from 'next-auth';

type UserID = string;

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserID;
    };
  }
}

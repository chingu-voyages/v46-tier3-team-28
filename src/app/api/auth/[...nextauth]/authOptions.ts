import { db } from '@/db';
import { NextAuthOptions, Session } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  session: { strategy: 'jwt' },
  pages: {
    error: 'api/auth/signin',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'test@example.com' },
        password: { label: 'Password', type: 'password', placeholder: '***************' },
      },
      async authorize(credentials, req) {
        const user = {
          id: '1',
          name: 'Reckson',
          email: credentials?.email,
          username: "someone",
          image: 'url_link',
        };

        const userData = await db.query.users.findFirst({
          where: (users, { eq }) => eq(users.email, credentials?.email as string),
        });

        console.log({ userData });
        // const res = await fetch('/user/endpoint', {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });

        // const user = await res.json();

        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
  // callbacks: {
  //   jwt: async ({ token, user }) => {
  //     if (user) {
  //       token.email = user.email;
  //       token.name = user.name;
  //       token.picture = user.image;
  //     }

  //     return token;
  //   },
  //   session: async ({ session, token }) => {
  //     console.log({ session, token });
  //     if (token) {
  //       const newSession: Session = {
  //         ...session,
  //         user: {
  //           email: token.email,
  //           name: token.name,
  //           image: token.picture,
  //         },
  //       };

  //       return newSession;
  //     }

  //     return session;
  //   },
  // },
};

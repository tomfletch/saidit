import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { env } from '@/lib/env';
import { NextAuthOptions, getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    }),
  ],
  // callbacks: {
  //   session({ session, token, user }) {
  //     return session;
  //   },
  // },
};

export const getAuthSession = () => getServerSession(authOptions);
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { connectToDB } from '@/lib/connectToDB'; // Your DB connection file
import User from '@/models/User.model'; // Your Mongoose user model

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        await connectToDB();

        const user = await User.findOne({ email: credentials.email }).exec();
        if (!user) return null;

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) return null;

        return {
          id: user.id.toString(),
          email: user.email,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token._id = user.id
        token.email = user.email;
      }
      if(account){
        token.accessToken = account.access_token;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        if (!session.user) session.user = {};
        (session.user as { email?: string | null; userId?: string }).userId = token._id as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },

  pages: {
    signIn: '/signin',
    error: '/signin',
  },

  session: {
    strategy: 'jwt',
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };

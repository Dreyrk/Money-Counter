import dbConnection from "@/lib/database";
import Users from "@/lib/models/Users";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        try {
          await dbConnection();
          const user = await Users.findOne({ username });
          if (!user) {
            throw Error("No user in database");
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            throw Error("email/password mismatch");
          }
          return user;
        } catch (e: any) {
          console.error(`Error with credentials: ${e.message}`);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update" && session?.username) {
        token.user.username = session.username;
      }
      if (user) {
        token = {
          ...token,
          user: {
            id: user?._id,
            username: user?.username,
          },
        };
        await Users.findByIdAndUpdate(token.user.id, {
          username: token.user.username,
        });
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

import dbConnection from "@/lib/database";
import Users from "@/lib/models/Users";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "account",
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
            throw Error("email/password mismatch");
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
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

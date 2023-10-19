import "next-auth";
import { User as BaseUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
    } & Session["user"];
  }

  interface User extends BaseUser {
    username?: string;
    _id: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      username: string;
    } & JWT["user"];
  }
}

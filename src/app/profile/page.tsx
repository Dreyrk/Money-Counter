"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignOutButton from "@/components/Button/SignOutButton";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <div className="px-12 flex flex-col gap-10">
      <h1 className="font-bold text-center text-3xl text-primary underline">
        Profile Page
      </h1>
      <h2 className="font-bold text-center text-xl text-primary">
        {session?.user.username}
      </h2>
      <ul>
        <li>Daily Spending :</li>
        <li>Monthly Spending :</li>
        <li>Yearly Spending :</li>
      </ul>
      <SignOutButton />
    </div>
  );
}

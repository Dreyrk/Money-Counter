"use server";

import getSpending from "@/serverActions/getSpending";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SpendingHeader from "@/components/SpendingHeader";
import SpendingDisplay from "@/components/SpendingDisplay";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const spending = await getSpending(session?.user.id);

  return (
    <div className="h-full mt-10">
      <SpendingHeader spending={spending} />
      <SpendingDisplay session={session} spending={spending} />
    </div>
  );
}

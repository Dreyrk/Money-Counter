"use server";

import Users from "@/lib/models/Users";
import { Spending } from "@/types";
import { revalidatePath } from "next/cache";

async function deleteSpending(spendingIds: string[] | string, userId: string) {
  try {
    const currentUser = await Users.findById(userId).select("spending");
    const newSpending = currentUser.spending.filter(
      (spending: Spending, i: number) => {
        spending._id.toString() !== spendingIds[i + 1];
      }
    );

    currentUser.spending = newSpending;

    await currentUser.save();

    revalidatePath("/check");
  } catch (e) {
    console.error("failed to delete spending");
  }
}

export default deleteSpending;

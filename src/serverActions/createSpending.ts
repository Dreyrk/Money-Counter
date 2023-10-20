"use server";

import dbConnection from "@/lib/database";
import Users from "@/lib/models/Users";
import { Spending } from "@/types";
import { revalidatePath } from "next/cache";

async function createSpending(userId: string, newSpending: Spending) {
  try {
    await dbConnection();
    const currentUser = await Users.findById(userId);
    currentUser.spending.push(newSpending);
    await currentUser.save();
    revalidatePath("/check");
    return true;
  } catch (e: any) {
    console.error(e);
    return false;
  }
}

export default createSpending;

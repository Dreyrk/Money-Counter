"use server";

import dbConnection from "@/lib/database";
import Users from "@/lib/models/Users";
import { Spending } from "@/types";

async function getSpending(userId: string) {
  try {
    await dbConnection();
    const userSpending = await Users.findById(userId);
    return userSpending.spending.sort(
      (a: any, b: any) => b.createdAt - a.createdAt
    );
  } catch (e) {
    console.error(e);
  }
}

export default getSpending;

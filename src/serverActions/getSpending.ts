"use server";

import dbConnection from "@/lib/database";
import Users from "@/lib/models/Users";

async function getSpending(userId: string) {
  try {
    await dbConnection();
    const userSpending = await Users.findById(userId);
    return userSpending.spending;
  } catch (e) {
    console.error(e);
  }
}

export default getSpending;
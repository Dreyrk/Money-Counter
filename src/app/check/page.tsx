"use server";

import getSpending from "@/serverActions/getSpending";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import EuroIcon from "@mui/icons-material/Euro";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const spending = await getSpending(session?.user.id);
  const spendingSum = () => {
    const result = [];
    for (let i = 0; i < spending.length; i++) {
      const spend = spending[i];
      result.push(spend.amount);
    }
    return result.reduce((acc, curr) => acc + curr);
  };
  return (
    <div className="h-full mt-10">
      <div className="text-primary flex items-center justify-center gap-6">
        <h1 className="font-bold text-4xl">Spending </h1>
        <select
          className="text-black rounded-md px-2 py-1 text-lg"
          name="period"
          id="time-period">
          <option value="monthly">Monthly</option>
          <option value="daily">Daily</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <h2 className="flex justify-center items-center gap-2 text-3xl text-primary m-10 font-semibold">
        {spendingSum()}
        <EuroIcon fontSize="medium" htmlColor="white" />/ Month
      </h2>
      <div></div>
    </div>
  );
}

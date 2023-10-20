import { redirect } from "next/navigation";
import { Spending } from "@/types";
import EuroIcon from "@mui/icons-material/Euro";

export default function SpendingHeader({ spending }: { spending: Spending[] }) {
  const spendingSum = () => {
    if (spending) {
      const result = [];
      for (let i = 0; i < spending.length; i++) {
        const spend = spending[i];
        result.push(spend.amount);
      }
      return result.reduce((acc, curr) => acc + curr);
    } else {
      redirect("/");
    }
  };
  return (
    <>
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
    </>
  );
}

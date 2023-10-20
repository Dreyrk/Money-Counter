import { Spending } from "@/types";
import EuroIcon from "@mui/icons-material/Euro";

export default function SpendingItem({ spending }: { spending: Spending }) {
  return (
    <li key={spending.title} className="w-full p-2">
      <p>{spending.title}</p>
      <p className="text-lg font-semibold">
        {spending.amount}
        <EuroIcon />
      </p>
      <p>{spending.description}</p>
    </li>
  );
}

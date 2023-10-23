import { Spending } from "@/types";
import EuroIcon from "@mui/icons-material/Euro";

export default function SpendingItem({
  spending,
  deleteMode,
}: {
  spending: Spending;
  deleteMode: boolean;
}) {
  return (
    <li key={spending.title} className="w-full p-4 flex gap-8 shadow-sm">
      {deleteMode && <input type="checkbox" name="" id="" />}
      <div className="flex flex-col">
        <p className="text-lg">{spending.title}</p>
        <p className="text-lg font-semibold flex gap-2 items-center">
          {spending.amount}
          <EuroIcon />
        </p>
        <p className="max-h-[100px] overflow-auto">{spending.description}</p>
        <p className="italic font-light">{spending.date}</p>
      </div>
    </li>
  );
}

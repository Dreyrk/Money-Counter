import { Spending } from "@/types";
import SpendingItem from "@/components/SpendingItem";
import ManageSpending from "./ManageSpending";

export default function SpendingDisplay({
  spending,
}: {
  spending: Spending[];
}) {
  return (
    <div className="mx-2 flex flex-col gap-2 items-center">
      <ManageSpending />
      <ul className="bg-primary w-full rounded-lg min-h-[500px] overflow-auto max-h-[630px]">
        {spending.map((el: Spending) => (
          <SpendingItem spending={el} key={el.title} />
        ))}
      </ul>
    </div>
  );
}

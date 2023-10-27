import { Spending } from "@/types";
import SpendingItem from "@/components/SpendingItem";
import ManageSpending from "./ManageSpending";
import deleteSpending from "@/serverActions/deleteSpending";
import { Session } from "next-auth";

export default function SpendingDisplay({
  spending,
  session,
}: {
  spending: Spending[];
  session: Session;
}) {
  const removeSpending = async (formData: FormData) => {
    "use server";
    const ids = formData.getAll("check");
    await deleteSpending(ids, session?.user.id);
  };

  return (
    <form action={removeSpending}>
      <div className="mx-2 flex flex-col gap-2 items-center">
        <ManageSpending />
        <ul className="bg-primary w-full rounded-lg min-h-[500px] overflow-auto max-h-[630px]">
          {spending.map((el: Spending) => (
            <SpendingItem spending={el} key={el.title} />
          ))}
        </ul>
      </div>
    </form>
  );
}

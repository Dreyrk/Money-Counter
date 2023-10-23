import { Spending } from "@/types";
import SpendingItem from "@/components/SpendingItem";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function SpendingDisplay({
  spending,
}: {
  spending: Spending[];
}) {
  const deleteMode = false;
  return (
    <div className="mx-2 flex flex-col gap-2 items-center">
      <div className="flex justify-between w-4/5 items-center">
        <button type="button" className="bg-slate-700 rounded-md p-0.5">
          <EditIcon fontSize="large" htmlColor="white" />
        </button>
        <button type="button" className="bg-slate-700 rounded-md p-0.5">
          <DeleteIcon fontSize="large" htmlColor="red" />
        </button>
      </div>
      <ul className="bg-primary w-full rounded-lg min-h-[500px] overflow-auto max-h-[630px]">
        {spending.map((el: Spending) => (
          <SpendingItem deleteMode={deleteMode} spending={el} key={el.title} />
        ))}
      </ul>
    </div>
  );
}

"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ManageSpending() {
  return (
    <div className="flex justify-between w-4/5 items-center">
      <button type="button" className="bg-slate-700 rounded-md p-0.5">
        <EditIcon fontSize="large" htmlColor="white" />
      </button>
      <button type="button" className="bg-slate-700 rounded-md p-0.5">
        <DeleteIcon fontSize="large" htmlColor="red" />
      </button>
    </div>
  );
}

"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { categories, periods } from "@/variables";
import capitalize from "@/utils/capitalize";
import EuroIcon from "@mui/icons-material/Euro";
import createSpending from "@/serverActions/createSpending";
import SubmitButton from "./Button/SubmitButton";
import { toast } from "react-toastify";

export default function CreateSpendingForm() {
  const { data: session } = useSession();

  const create = async (formData: any) => {
    const spending: any = {};
    const userId = session?.user.id;
    formData.forEach((value: string | number, key: string) => {
      if (value) {
        spending[key] = value;
      }
    });

    if (userId) {
      const created = await createSpending(userId, spending);
      if (created) {
        toast.success("Created !");
        redirect("/check");
      } else {
        toast.error("Something wrong...");
        console.error("not created");
      }
    }
  };
  return (
    <form action={create} className="flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-2">
        <label
          className="underline text-primary text-lg font-semibold"
          htmlFor="title">
          Title
        </label>
        <input className="rounded-md p-2" type="text" id="title" name="title" />
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="underline text-primary text-lg font-semibold"
          htmlFor="amount">
          Amount
        </label>
        <div className="flex gap-4">
          <input
            className="rounded-md p-2"
            type="number"
            step="0.01"
            id="amount"
            name="amount"
          />
          <EuroIcon fontSize="large" htmlColor="white" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <select
          name="category"
          className="bg-primary rounded-md w-[45%]"
          id="category">
          <option className="text-center" value="">
            --- Category ---
          </option>
          {categories.map((category) => (
            <option
              key={category}
              className="text-center capitalize"
              value={category}>
              {capitalize(category)}
            </option>
          ))}
        </select>
        <span className="text-primary font-semibold">/</span>
        <select
          name="period"
          className="bg-primary rounded-md w-[45%]"
          id="period">
          <option className="text-center" value="">
            --- Period ---
          </option>
          {periods.map((period) => (
            <option
              key={period}
              className="text-center capitalize"
              value={period}>
              {capitalize(period)}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="underline text-primary text-lg font-semibold"
          htmlFor="description">
          Description
        </label>
        <textarea
          className="rounded-md p-2"
          id="description"
          name="description"
        />
      </div>
      <SubmitButton text="Create" />
    </form>
  );
}

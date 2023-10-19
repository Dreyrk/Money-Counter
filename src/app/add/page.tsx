"use client";

import EuroIcon from "@mui/icons-material/Euro";
import createSpending from "@/serverActions/createSpending";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  const create = async (formData: FormData) => {
    const userId = session?.user.id;
    const title = formData.get("title");
    const amount = formData.get("amount");
    const description = formData.get("description");

    const spending = {
      title,
      amount,
      description,
    };

    if (userId) {
      const created = await createSpending(userId, spending);
      if (created) {
        redirect("/check");
      } else {
        console.error("not created");
      }
    }
  };

  return (
    <div className="h-full flex flex-col gap-20">
      <h1 className="m-8 font-bold text-3xl text-center text-primary">
        Create Spending
      </h1>
      <form action={create} className="flex flex-col gap-8 p-4">
        <div className="flex flex-col gap-2">
          <label
            className="underline text-primary text-lg font-semibold"
            htmlFor="title">
            Title
          </label>
          <input
            className="rounded-md p-2"
            type="text"
            id="title"
            name="title"
          />
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
              id="amount"
              name="amount"
            />
            <EuroIcon fontSize="large" htmlColor="white" />
          </div>
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
        <button
          className="bg-btn rounded-lg p-2 mt-10 text-primary"
          type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

import CreateSpendingForm from "@/components/CreateSpendingForm";

export default function Page() {
  return (
    <div className="h-full flex flex-col gap-20">
      <h1 className="m-8 font-bold text-3xl text-center text-primary">
        Create Spending
      </h1>
      <CreateSpendingForm />
    </div>
  );
}

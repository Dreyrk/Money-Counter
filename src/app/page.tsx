import Link from "next/link";
import EuroIcon from "@mui/icons-material/Euro";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

export default function Home() {
  return (
    <main className="h-[90vh] p-16 flex flex-col justify-evenly items-center">
      <Link href="/auth">Login/Register</Link>
      <h1 className="text-6xl w-full text-center text-primary">
        Money Counter
      </h1>
      <ul className="w-full h-56 flex flex-col items-center justify-between">
        <Link
          className="w-60 p-3 rounded-lg text-center text-black bg-primary hover:scale-90"
          href="/check">
          <li className="text-xl flex items-center justify-between w-full">
            Check Spendings
            <EuroIcon />
          </li>
        </Link>
        <Link
          className="w-60 p-3 rounded-lg text-center text-black bg-primary hover:scale-90"
          href="/add">
          <li className="text-xl flex items-center justify-between w-full">
            Add
            <AddIcon />
          </li>
        </Link>
        <Link
          className="w-60 p-3 rounded-lg text-center text-black bg-primary hover:scale-90"
          href="/edit">
          <li className="text-xl flex items-center justify-between w-full">
            Edit
            <EditIcon />
          </li>
        </Link>
      </ul>
    </main>
  );
}

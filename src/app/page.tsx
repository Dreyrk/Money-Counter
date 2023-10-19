import EuroIcon from "@mui/icons-material/Euro";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import HomeLink from "@/components/HomeLink";

const links = [
  {
    href: "/check",
    text: "Check Spending",
    Logo: EuroIcon,
  },
  {
    href: "/add",
    text: "Add",
    Logo: AddIcon,
  },
  {
    href: "/edit",
    text: "Edit",
    Logo: EditIcon,
  },
];

export default function Home() {
  return (
    <main className="h-[90vh] px-16 flex flex-col justify-evenly items-center">
      <h1 className="text-6xl w-full text-center text-primary">
        Money Counter
      </h1>
      <ul className="w-full h-56 flex flex-col items-center justify-between">
        {links.map((link) => (
          <HomeLink
            key={link.href}
            text={link.text}
            href={link.href}
            Logo={link.Logo}
          />
        ))}
      </ul>
    </main>
  );
}

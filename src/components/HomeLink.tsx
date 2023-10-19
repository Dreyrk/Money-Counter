import { HomeLinkProps } from "@/types";
import Link from "next/link";

export default function HomeLink({ text, Logo, href }: HomeLinkProps) {
  return (
    <Link
      className="w-60 p-3 rounded-lg text-center text-black bg-primary hover:scale-90"
      href={href}>
      <li className="text-xl flex items-center justify-between w-full">
        {text}
        <Logo fontSize="large" htmlColor="black" />
      </li>
    </Link>
  );
}

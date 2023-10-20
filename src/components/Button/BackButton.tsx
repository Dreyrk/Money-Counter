"use client";

import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { usePathname } from "next/navigation";

export default function BackButton() {
  const pathname = usePathname();
  return (
    <Link className={`${pathname === "/" && "hidden"}`} href="/" replace={true}>
      <button
        type="button"
        className="hover:scale-90 rounded-full p-1 bg-primary absolute left-6 top-5">
        <ArrowBackIcon fontSize="large" htmlColor="black" />
      </button>
    </Link>
  );
}

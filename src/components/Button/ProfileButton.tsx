"use client";

import Link from "next/link";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LoginIcon from "@mui/icons-material/Login";
import { useSession } from "next-auth/react";

export default function ProfileButton() {
  const { status } = useSession();

  return (
    <Link
      className="absolute right-8 top-6 scale-125"
      href={status === "authenticated" ? "/profile" : "/auth"}>
      {status === "authenticated" ? (
        <AccountCircleOutlinedIcon htmlColor="white" fontSize="large" />
      ) : (
        <LoginIcon htmlColor="white" fontSize="large" />
      )}
    </Link>
  );
}

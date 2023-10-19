"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  const logout = () => {
    signOut({ callbackUrl: "/auth" });
  };

  return (
    <button
      className="bg-delete rounded-lg p-2 text-center text-xl text-primary font-semibold"
      onClick={logout}
      type="button">
      Sign out
    </button>
  );
}

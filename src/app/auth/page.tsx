"use client";

import Login from "@/components/Login";
import Register from "@/components/Register";
import { useState } from "react";

export default function Page() {
  const [registered, setRegistered] = useState(false);

  const handleClick = () => {
    setRegistered(!registered);
  };

  return (
    <div className="h-screen grid place-content-center">
      {registered ? (
        <Login handleClick={handleClick} />
      ) : (
        <Register handleClick={handleClick} />
      )}
    </div>
  );
}

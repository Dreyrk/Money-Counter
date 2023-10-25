"use client";

import { useState } from "react";
import { AuthProps, User } from "@/types";
import FormInput from "./FormInput";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Loader from "./Loader";

export default function Login({ handleClick }: AuthProps) {
  const router = useRouter();
  const [loginUser, setLoginUser] = useState<User>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      ...loginUser,
      redirect: false,
      callbackUrl: "/check",
    });
    if (res?.ok) {
      setLoading(false);
      toast.success("Login Successfully !");
      router.push("/profile");
    }
  };

  const formInputs = [
    {
      id: "username",
      label: "Username",
      value: loginUser.username,
      setValue: setLoginUser,
      logo: BadgeOutlinedIcon,
      type: "text",
    },
    {
      id: "password",
      label: "Password",
      value: loginUser.password,
      setValue: setLoginUser,
      logo: LockPersonIcon,
      type: "password",
    },
  ];

  if (loading) {
    return (
      <div className="h-screen w-screen grid place-content-center">
        <Loader size={38} />
      </div>
    );
  } else {
    return (
      <div className="grid place-content-center my-28">
        <form
          onSubmit={login}
          className="flex flex-col items-center rounded-lg bg-slate-100 max-w-sm justify-center gap-12 p-6">
          <h1 className="m-0 text-2xl font-bold text-black">Sign In</h1>
          {formInputs.map((input) => {
            return (
              <FormInput
                key={input.id}
                id={input.id}
                label={input.label}
                value={input.value}
                setValue={input.setValue}
                Logo={input.logo}
                type={input.type}
              />
            );
          })}
          <button
            type="submit"
            className="px-4 py-1 text-lg font-semibold hover:text-slate-300 text-slate-50 bg-btn rounded-2xl">
            Login
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="underline mb-2 text-black hover:text-slate-300">
            No Account yet ?
          </button>
        </form>
      </div>
    );
  }
}

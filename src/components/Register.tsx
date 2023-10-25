"use client";

import { useState } from "react";
import { AuthProps } from "@/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "./FormInput";
import Loader from "./Loader";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import authFetcher from "@/utils/authFetcher";

export default function Register({ handleClick }: AuthProps) {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });
  const [checkedPassword, setCheckedPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const formInputs = [
    {
      id: "username",
      label: "Username",
      value: newUser.username,
      setValue: setNewUser,
      logo: BadgeOutlinedIcon,
      type: "text",
    },
    {
      id: "password",
      label: "Password",
      value: newUser.password,
      setValue: setNewUser,
      logo: LockPersonIcon,
      type: "password",
    },
    {
      id: "confirm-password",
      label: "Confirm Password",
      value: checkedPassword,
      setValue: setCheckedPassword,
      logo: LockPersonIcon,
      type: "password",
    },
  ];

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (newUser.password === checkedPassword && newUser.username !== "") {
      const res = await authFetcher("register", newUser);
      if (res.success) {
        setLoading(false);
        toast.success(res.message);
        handleClick();
      } else {
        setLoading(false);
        toast.error(res.message);
      }
    } else {
      setLoading(false);
      toast.warn("Please confirm your password.");
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-screen grid place-content-center">
        <Loader size={38} />
      </div>
    );
  } else {
    return (
      <div className="relative grid place-content-center my-8">
        <form
          onSubmit={register}
          className="flex flex-col items-center justify-center gap-12 p-8 max-w-sm bg-slate-100 rounded-lg">
          <h1 className="m-0 text-2xl font-bold text-black">Sign Up</h1>
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
            Register
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="underline mb-2 text-black hover:text-slate-300">
            Already Registered ?
          </button>
        </form>
      </div>
    );
  }
}

"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import Link from "next/link";

const SigninPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const signin = async (payload) => {
    await axios
      .post("https://fakestoreapi.com/auth/login", payload)
      .then((res) => console.log(res))
      .catch((err) => {
        setError("password", { type: "401", message: "inccorect password" });
        setError("username", { type: "401", message: "inccorect username" });
      });
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    signin(data);
  });


  return (
    <main className="w-full h-screen flex flex-col pt-20 items-center bg-slate-400 text-black gap-4">
      <p className="text-3xl">SIGN IN</p>
      <form
        onSubmit={onSubmit}
        className="w-[500px] flex flex-col items-center gap-3"
      >
        <div className="flex flex-col gap-2 w-full">
          <label>Username</label>
          <input
            type="text"
            {...register("username", {
              required: {
                value: true,
                message: "Please enter your username.",
              },
            })}
            className={`p-2 focus:outline-none rounded border-2 ${
              errors?.username?.message ? "border-[#FF0000]" : "border-black"
            }`}
          />
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <label>Password</label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: {
                  value: true,
                  message: "Please enter your password.",
                },
              })}
              className={`w-full p-2 focus:outline-none rounded border-2 ${
                errors?.password?.message ? "border-[#FF0000]" : "border-black"
              }`}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded border border-black w-[100px] items-center"
        >
          SIGN IN
        </button>
      </form>
      <p>
        If you don't have an account yet, click here to{" "}
        <Link href={"/signup"} className="underline cursor-pointer">
          sign up.
        </Link>
      </p>
    </main>
  );
};

export default SigninPage;

"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import Link from "next/link";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const signup = async (payload) => {
    await axios
      .post("https://fakestoreapi.com/users", payload)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      setError("password", { type: "401", message: "password not match" });
      setError("confirmPassword", {
        type: "401",
        message: "password not match",
      });
      return;
    }

    const payload = {
      email: data?.email,
      username: data?.username,
      password: data.password,
      name: {
        firstname: data.firstName,
        lastname: data.lastName,
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",
    };
    signup(payload);
  });

  return (
    <main className="w-full h-screen flex flex-col pt-20 items-center bg-slate-400 text-black gap-4">
      <p className="text-3xl">SIGN UP</p>
      <form
        onSubmit={onSubmit}
        className="w-[500px] flex flex-col items-center gap-3"
      >
        <div className="flex flex-col gap-2 w-full">
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              required: {
                value: true,
                message: "Please enter your email.",
              },
            })}
            className={`p-2 focus:outline-none rounded border-2 ${
              errors?.email?.message ? "border-[#FF0000]" : "border-black"
            }`}
          />
        </div>
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
        <div className="flex flex-col gap-2 w-full ">
          <label>Confirm Password</label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Please enter your password.",
                },
              })}
              className={`w-full p-2 focus:outline-none rounded border-2 ${
                errors?.confirmPassword?.message
                  ? "border-[#FF0000]"
                  : "border-black"
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
        <div className="flex w-full gap-4">
          <div className="flex flex-col gap-2 w-full ">
            <label>First Name</label>
            <input
              type="text"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Please enter your first name.",
                },
              })}
              className={`w-full p-2 focus:outline-none rounded border-2 ${
                errors?.firtName?.message ? "border-[#FF0000]" : "border-black"
              }`}
            />
          </div>
          <div className="flex flex-col gap-2 w-full ">
            <label>Last Name</label>
            <input
              type="text"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Please enter your last name.",
                },
              })}
              className={`w-full p-2 focus:outline-none rounded border-2 ${
                errors?.lastName?.message ? "border-[#FF0000]" : "border-black"
              }`}
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded border-2 border-black w-[150px] items-center"
        >
          SIGN UP
        </button>
      </form>
      <p>
        If you have an account yet, click here to{" "}
        <Link href={"/signin"} className="underline cursor-pointer">
          sign in.
        </Link>
      </p>
    </main>
  );
};

export default SignupPage;

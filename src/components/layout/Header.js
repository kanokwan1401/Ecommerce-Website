"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Bounce.css";

const Header = () => {
  const path = usePathname();
  console.log(path);
  return (
    <header>
      {path === "/" && (
        <nav className="bounce w-full h-9 bg-black text-white text-[14px] flex items-center justify-end pl-8">
          <span>
            Pomotins..Excited to announce a special promotion for various IT
            products, discounts up to 30% !!{" "}
          </span>
        </nav>
      )}
      <nav className="flex flex-col w-full h-[100px] items-center justify-center gap-6 font-outfit border-b border-black">
        <div className="flex w-[70%] justify-between items-center">
          {" "}
          <div className="flex gap-7 items-center">
            <Link
              href={"/"}
              className="text-[40px] font-ubuntu font-medium pr-4"
            >
              SuperShop.
            </Link>
            <Link
              href={"/"}
              className="w-[70px] text-center text-xl hover:border hover:rounded-full hover:p-2 hover:border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-2 :"
            >
              Home
            </Link>
            <div className="w-[96px] text-center relative text-xl hover:border hover:rounded-full hover:p-2 hover:border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-2">
              <Link href={"/product"}>Products</Link>
            </div>
            <div className="w-[70px] text-center relative text-xl hover:border hover:rounded-full hover:p-2 hover:border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-2">
              <Link href={"/cart"}>Cart</Link>
            </div>
          </div>
          <div className="flex gap-6">
            <input
              type="text"
              placeholder="Search Product"
              className=" border border-black w-[300px] rounded-[4px] p-1 pl-4 outline-none"
            />
            <Link
              href={"/"}
              className="text-xl border border-black p-2 rounded-[4px] hover:border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-2"
            >
              Sign In
            </Link>
            <Link
              href={"/"}
              className="text-xl border border-black p-2 rounded-[4px] bg-[#FFE922] hover:border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-2"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

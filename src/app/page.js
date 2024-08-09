"use client";

import Image from "next/image";
import "../app/globals.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import ItemCardCarousel from "@/components/caroucel/ItemCardCarousel";
import Link from "next/link";

function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center font-ubuntu gap-10">
      <section className="w-full h-[500px] relative">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1678060796715-937bc39b90df?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="image"
          fill
          sizes="100%"
          className=" object-cover"
        />
        <div className="absolute w-[600px] h-[320px] bg-white top-0 left-0 translate-x-72 translate-y-20 px-6 py-12 shadow-xl">
          <p className=" text-xl leading-5">
            Simplify Your Shopping Experience
          </p>
          <p className="font-medium text-5xl pt-10">
            Find Everything You{" "}
            <span className=" text-[#FFE922] text-stroke-2 text-6xl">Love</span>{" "}
            in One Place!
          </p>
          <div className="group/item-button">
            <Link href={"/product"}>
              <button className="absolute w-[80px] h-[80px] rounded-full bg-[#FFE922] right-0 bottom-0 -translate-x-2 -translate-y-2 border-dashed border-2 border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-4 hover:-translate-x-4 hover:border-solid hover:border-[1px]">
                <IoIosArrowRoundForward style={{ fontSize: "75px" }} />
              </button>
            </Link>
            <div className="group-hover/item-button:opacity-100 opacity-0 bg-[#FFE922] absolute right-0 bottom-0 translate-x-44 -translate-y-8 p-2 text-xl font-bold cursor-default">
              Go to shop now!
            </div>
          </div>
        </div>
      </section>
      <section className="w-[70%] mb-16">
        <p className="text-3xl font-medium pb-10">Featured Products 🖤</p>
        <ItemCardCarousel />
      </section>
    </main>
  );
}

export default Home;

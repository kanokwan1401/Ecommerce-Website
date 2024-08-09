"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import {
  IoMdStar,
  IoIosStarHalf,
  IoMdStarOutline,
  IoIosArrowRoundForward,
} from "react-icons/io";

const ProductId = () => {
  const { productId } = useParams();
  const [itemData, setItemData] = useState();

  const calculateRating = (rate) => {
    const max = 5;
    let starIcon = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        starIcon.push(<IoMdStar />);
      } else starIcon.push(<IoMdStarOutline />);
    }
    return (
      <div className="flex ">
        {starIcon.map((icon, index) => (
          <div className="text-black" key={index}>
            {icon}
          </div>
        ))}
      </div>
    );
  };

  const fetchItemData = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        console.log(res);
        setItemData(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchItemData();
  }, [productId]);

  console.log(itemData);

  return (
    <main className="w-full h-screen flex justify-center pt-12 font-outfit">
      <section className="w-[70%] h-[700px] bg-white text-black flex">
        <section className=" w-1/2 h-full  border border-black flex justify-center items-center px-6">
          <div className="size-[300px] relative">
            <Image
              src={itemData?.image || ""}
              alt={itemData?.id}
              fill
              sizes="100%"
            />
          </div>
        </section>
        <section className=" w-1/2 flex grow flex-col  border-y border-r border-black">
          <p className=" font-bold text-2xl border-b border-black px-6 py-12">
            {itemData?.title}
          </p>
          <div className="flex grow items-center">
            <p className=" text-lg p-6 ">{itemData?.description}</p>
          </div>
          <div className="flex justify-between items-center p-6 border-y border-black text-xl">
            {/* rating */}
            <div className="flex items-center gap-5">
              <p>({itemData?.rating.count})</p>
              {calculateRating(itemData?.rating.rate)}
            </div>
            {/* price */}
            <div className="">
              <p className=" text-2xl font-bold ">{itemData?.price} $</p>
            </div>
          </div>
          <div className="flex justify-between items-center mx-6 my-8">
            <button
              type="button"
              className="bg-[#FFE922] font-bold rounded-lg px-6 py-4 w-[200px] border border-black text-lg hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:rounded-lg"
              onClick={() => addCart(item.id)}
            >
              ADD TO CART
            </button>
            <Link href={"/product"}>
              <button className="flex items-center gap-2 hover:scale-110">
                Go Back
                <IoIosArrowRoundForward style={{ fontSize: "35px" }} />
              </button>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
};

export default ProductId;

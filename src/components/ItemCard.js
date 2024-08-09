import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { IoMdStar, IoIosStarHalf, IoMdStarOutline } from "react-icons/io";
import axios from "axios";
const ItemCard = ({ item }) => {
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

  const router = useRouter();

  const addCart = async (itemId) => {
    const payload = {
      userId: 2,
      date: "2024-02-03",
      products: [{ productId: itemId, quantity: 1 }],
    };

    await axios
      .post(`https://fakestoreapi.com/carts`, payload)
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <main className="relative group/item-card font-outfit hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:rounded-lg">
      <section
        onClick={() => router.push(`/product/${item.id}`)}
        className="w-[280px] h-[400px] rounded p-4 text-black border border-black "
      >
        <div className="flex w-full h-[180px] relative bg-white">
          <Image
            src={item.image || ""}
            alt={item.title}
            fill
            sizes="100%"
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* item name */}
        <p className="text-xl font-bold text-black truncate mt-6">
          {item.title}
        </p>
        {/* description */}
        <p className="text-lg font-normal text-black line-clamp-2">
          {item.description}
        </p>
        <div className="flex justify-between mt-5 items-center border-t border-black pt-3">
          {/* rating */}
          <div className="flex items-center gap-1">
            <p>({item.rating.count})</p>
            {calculateRating(item.rating.rate)}
          </div>

          {/* price */}
          <div className="relative w-[100px] bg-[#FFE922] h-8 border-[1px] border-black box-border border-r-0">
            <p className=" text-lg font-bold pl-2 w-[calc(100%-16px)] truncate">
              {item.price} $
            </p>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-r-[16px] border-r-black "></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[15px] border-r-white "></div>
          </div>
        </div>
      </section>
      <div className=" text-black group-hover/item-card:opacity-100 flex opacity-0 absolute left-0 bottom-0 w-full h-[100px] bg-gradient-to-t from-black/80 to-black/0  justify-center items-center transition-all duration-500">
        <button
          type="button"
          className="bg-[#FFE922] rounded-lg px-8 py-5 font-bold border-2 border-black"
          onClick={() => addCart(item.id)}
        >
          ADD TO CART
        </button>
      </div>
    </main>
  );
};

export default ItemCard;

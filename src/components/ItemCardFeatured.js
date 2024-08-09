import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const ItemCardFeatured = ({ item }) => {
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

  return (
    <main className="relative group/item-card font-outfit ">
      <section
        onClick={() => router.push(`/product/${item.id}`)}
        className="w-[290px] h-[400px] rounded p-6 text-black border border-black "
      >
        <div className="flex w-full h-[180px] relative bg-white hover:scale-105 cursor-pointer">
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
        <p className="text-xl font-bold text-black truncate mt-6 hover:scale-105 cursor-pointer">
          {item.title}
        </p>
        {/* description */}
        <p className="text-lg font-normal text-black line-clamp-2 cursor-default">
          {item.description}
        </p>
        <div className="flex justify-between mt-5 items-center border-t border-black pt-3 cursor-default">
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
    </main>
  );
};

export default ItemCardFeatured;

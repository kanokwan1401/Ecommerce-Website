"use client";

import React from "react";
import "./carousel.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ItemCardFeatured from "../ItemCardFeatured";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

function ItemCardCarousel() {
  const [items, setItems] = useState([]);
  const OPTIONS = { loop: true, align: "start", slidesToScroll: 4 };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const getProduct = async () => {
    await axios
      .get("https://fakestoreapi.com/products?limit=30")
      .then((res) => {
        console.log(res);
        setItems(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <section className="w-full relative">
      <div className="embla">
        <div className="embla__viewport  " ref={emblaRef}>
          <div className="embla__container ">
            {items
              .filter((x) => x?.rating?.rate >= 4)
              .map((item, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                    <ItemCardFeatured key={item.id} item={item} />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <button
          className=" w-[50px] h-[50px] rounded-full bg-white font-medium text-xl border border-black absolute top-1/2 -translate-y-1/2 left-0 -translate-x-20 flex justify-center items-center hover:bg-[#FFE922] hover:scale-110"
          onClick={scrollPrev}
        >
          <IoIosArrowBack style={{ fontSize: "35px" }} />
        </button>
        <button
          className=" w-[50px] h-[50px] rounded-full bg-white font-medium text-xl border border-black absolute top-1/2 -translate-y-1/2 right-0 translate-x-20 flex justify-center items-center hover:bg-[#FFE922] hover:scale-110"
          onClick={scrollNext}
        >
          <IoIosArrowForward style={{ fontSize: "35px" }} />
        </button>
      </div>
    </section>
  );
}

export default ItemCardCarousel;

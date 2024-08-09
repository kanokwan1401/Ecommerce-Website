"use client";

import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import ItemCard from "@/components/ItemCard";
import axios from "axios";
import "../globals.css";

const ProductPage = () => {
  const [items, setItems] = useState([]);

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

  const getUsers = async () => {
    await axios
      .get("https://fakestoreapi.com/users")
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getProduct();
    getUsers();
  }, []);

  // console.log(items);

  return (
    <main className="flex flex-col gap-5 w-full items-center pt-10">
      <p className=" text-black text-3xl font-outfit font-normal w-[70%]">
        Product
      </p>
      <section className="flex w-[70%] flex-wrap gap-8 justify-center mb-[70px]">
        {items.map((item, index) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
};

export default ProductPage;

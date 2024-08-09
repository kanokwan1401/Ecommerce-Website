"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const CartPage = () => {
  const [cartItems, setCartItmes] = useState([]);

  const getQuantityCart = async () => {
    await axios
      .get("https://fakestoreapi.com/carts/user/1")
      .then((res) => {
        console.log(res);
        setCartItmes(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getQuantityCart();
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white font-outfit p-6 rounded-lg border border-black my-10 text-black ">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 pr-0 md:pr-6">
          {cartItems.map((item, index) => (
            <div
              className="border border-black p-4 rounded-lg mb-4"
              key={index}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Order number</h2>
                <span className="text-lg font-bold">$ 630.00</span>
              </div>
              <div className="text-gray-600 mb-4">#432423-4827532</div>
              <div className="text-gray-600">Import duties included</div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <div className="bg-[#FFE922] rounded-lg border border-black">
            <h2 className="text-xl font-bold mb-4 border-b border-black p-4">
              Order Details
            </h2>
            <div className=" border-b border-black p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-600 font-semibold">Status</span>
                <span className="text-green-600 font-semibold">Complete</span>
              </div>
              <div className="text-gray-600 mb-1">Item Code</div>
              <div className="text-gray-900">432423-4827532</div>
            </div>
            <div className=" border-b border-black p-4">
              <div className="text-gray-600 mb-1">Payment</div>
              <div className="text-gray-900">VISA (Direct Bank)</div>
            </div>
            <div className="text-xl font-bold border-b border-black p-4">
              Total: $ 630.00
            </div>
            <div className="border-b border-black p-4">
              <div className="text-gray-900 mb-2 font-semibold">
                John Terner
              </div>
              <div className="text-gray-600 mb-2">
                {/* <img src="us-flag.png" alt="USA" className="w-6 h-4 inline mr-2"> */}
                United States (USD$)
              </div>
              <div className="text-gray-600 mb-4">
                380-394 11th Ave, New York, NY 10001
              </div>
            </div>
            <button className="bg-black text-white py-2 px-4 rounded m-4">
              ASK A QUESTION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

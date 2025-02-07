"use client";
import React, { useEffect, useState } from "react";
// import CartItem from "../../../components/cartPage/CartItem";
// import CheckoutForm from "../../../components/cartPage/Checkout";
// import CartItem from "../../components/cartPage/CartItem";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  const [cart, setCart] = useState<
    {
      img: any;
      title: string;
      category: string;
      price: number;
      dicountPrice: number;
      href: string;
      quantity: number;
    }[]
  >([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    // setIsLoading(false);
  }, []);

  const handleRemoveItem = (href: string) => {
    const updatedCart = cart.filter((item) => item.href !== href);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleUpdateQuantity = (href: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map((item) =>
      item.href === href ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    window.location.href = "/checkout";
  };

  // const handleContinueShopping = () => {
  //   window.location.href = "/";
  // };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  // const subtotal = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 10.0; // Example shipping cost
  const tax = subtotal * 0.08; // Example tax rate (8%)
  const totalPrice = subtotal + shipping + tax;

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-96">
  //       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col justify-center items-center gap-[50px] py-[10px]">
      <h2 className="text-3xl font-bold">Your Cart has ({totalItems}) items</h2>

      <div className="lg:w-[70vw] w-[85vw] mx-auto gap-[20px] flex flex-col">
        {/* <CartItem />
        <CartItem /> */}
        {cart.map((item) => (
          <div key={item.href} className="flex gap-[10px] lg:gap-[20px] lg:justify-between items-center border shadow lg:pb-[10px]">
            <img
              src={item.img || "/api/placeholder/96/96"}
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9lcsxrF8y6syCvTXgZXwX6M1Bkdm0Q189rQ&s"
              alt=""
              className="w-[100px] h-[100px] object-cover"
            />

            <div className="flex flex-wrap items-start lg:items-center gap-[15px] w-full justify-between">
              <div className="flex flex-col justify-start items-start">
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="text-green-400 text-sm font-semibold">
                  Quantity <span className="text-red-400">{item.quantity}</span>
                </p>
              </div>

              <p>{item.dicountPrice ?? item.price}/-</p>

              <div className="flex gap-0 border justify-center  border-black rounded-2xl w-fit shadow-lg bg-white">
                <button  onClick={() => handleUpdateQuantity(item.href, item.quantity - 1)} className="text-center w-[30px] text-xl hover:font-bold ">
                  -
                </button>
                <input
                  disabled
                  type="number"
                  placeholder={`${item.quantity}`}
                  className="text-center w-[70px] px-2 border border-x-inherit"
                />
                <button  onClick={() => handleUpdateQuantity(item.href, item.quantity + 1)} className="text-center w-[30px] text-xl hover:font-bold">
                  +
                </button>
              </div>
              <p>{totalPrice}</p>
              <button
                onClick={() => handleRemoveItem(item.href)}
                className="text-xs text-red-300 hover:text-red-600 font-bold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-[15px] justify-end items-end lg:w-[70vw] w-[85vw] mx-auto">
        <Link href="/productlist">
          <button className="text-[#B2E3FF] font-bold text-sm bg-[#23A6F0] py-[10px] px-[20px] rounded-full hover:bg-[#B2E3FF] hover:text-[#23A6F0]">
            Continue Shopping
          </button>
        </Link>
        {/* <Link href="/checkout">
          <button className="bg-white font-bold text-sm border border-[#23A6F0] text-[#23A6F0] py-[10px] px-[20px] rounded-full hover:text-white hover:bg-[#23A6F0]">
            Checkout
          </button>
        </Link> */}
      </div>
      {/* <CheckoutForm/> */}

      <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Link href="/checkout"
                onClick={handleCheckout}
                className="text-[#B2E3FF] font-bold text-sm bg-[#23A6F0] py-[10px] px-[20px] rounded-full hover:bg-[#B2E3FF] hover:text-[#23A6F0] my-2"
              >
                Proceed to Checkout
                </Link>
              {/* <button
                onClick={handleContinueShopping}
                className="w-full mt-3 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition duration-200 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </button> */}
            </div>
          </div>
    </div>
  );
}

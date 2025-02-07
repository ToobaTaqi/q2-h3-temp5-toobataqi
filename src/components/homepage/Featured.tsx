// child of FeaturedProduct
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { list } from "postcss";
import { counterContext } from "../../context/context";

interface item {
  title: string;
  href: string;
}

export default function Featured({
  img,
  title,
  category,
  price,
  dicountPrice,
  href,
}: {
  img: any;
  title: string;
  category: string;
  price: number;
  dicountPrice: number;
  href: string;
}) {
  const [product, setProduct] = useState<{
    img: any;
    title: string;
    category: string;
    price: number;
    dicountPrice: number;
    href: string;
  } >();
  const [count, setCount] = useState(1); 
 
  // cart count
  const increase = () => {
    setCount((count)=>count + 1);
  };
  const decrease = () => {
    if (count >= 1) {
      setCount((count)=>count - 1);
    } else {
      setCount(count);
    }
  };

  useEffect(() => {
    console.log(`value of ${title}=${count}`);
  }, [count]);


  useEffect(() => {
    setProduct({
      img,
      title,
      category,
      price,
      dicountPrice,
      href,
    });
  }, [img, title, category, price, dicountPrice, href]);
  
  const handleAddToCart = () => {
    if (!product) return;

    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if product already exists in the cart
    const existingProductIndex = cart.findIndex((item: {
      img: any;
      title: string;
      category: string;
      price: number;
      dicountPrice: number;
      href: string;
    }) => item.href === product.href);

    if (existingProductIndex !== -1) {
      // If product already exists, increase the quantity
      cart[existingProductIndex].quantity += 1;

      console.log(cart)
    } else {
      // If product doesn't exist, add it to the cart with quantity 1
      // cart.push({ ...product, quantity: 1 });
      cart.push({ ...product, quantity: count });

    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart)

    // Optional: Alert user or show confirmation message
    alert("Product added to cart");
  };

  return (
    // <counterContext.Provider value={{ count, setCount }}>
      <div className="hover:bg-gray-100 flex flex-col justify-between gap-8 h-[715px] w-[328px] lg:w-[238px]">
        <Link href={`/product/${href}`} className=" ">
          <Image
            src={`${img}`}
            alt=""
            width={100}
            height={100}
            className=" min-h-[427px] w-[328px] lg:w-[238px] h-[427px] mx-auto object-cover"
          />
        </Link>
        <div className="flex flex-col justify-center items-center text-center gap-[10px] mb-[50px]">
          <h3 className="font-bold leading-6">{title}</h3>
          <p className="text-[#737373] leading-6 font-bold">{category}</p>
          <div className="flex gap-2">
            <p className="text-[#BDBDBD] font-bold leading-6">${price}</p>
            <p className="text-[#23856D] font-bold leading-6">
              ${dicountPrice}
            </p>
          </div>

          {/* <div className="flex gap-[6px]">
          <div className="bg-[#23A6F0] w-[16px] h-[16px] rounded-full"></div>
          <div className="bg-[#23856D] w-[16px] h-[16px] rounded-full"></div>
          <div className="bg-[#E77C40] w-[16px] h-[16px] rounded-full"></div>
          <div className="bg-[#252B42] w-[16px] h-[16px] rounded-full"></div>
        </div> */}

          <div className="flex flex-col gap-[6px]">
            <button onClick={handleAddToCart} className="bg-white font-bold text-xs border border-[#23A6F0] text-[#23A6F0] py-[10px] px-[20px] rounded-full hover:text-white hover:bg-[#23A6F0]">
              Add to cart
            </button>
            {/* <button
              // onClick={toggleWishlist}
              className={` font-bold text-xs border py-[10px] px-[20px] rounded-full hover:text-white hover:bg-[#23A6F0] 
               
              `}

            >
              Add to wishlist
            </button> */}
            <div className="flex gap-0 border justify-center  border-black rounded-2xl w-fit bg-white">
              <button
                onClick={decrease}
                className="text-center w-[30px] text-xl hover:font-bold "
              >
                -
              </button>
              <input
                disabled
                type="number"
                placeholder={`${count}`}
                className="text-center w-[70px] px-2 border border-x-inherit"
              />
              <button
                onClick={increase}
                className="text-center w-[30px] text-xl hover:font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>

      </div>
    //  </counterContext.Provider>
  );
}

"use client";
import React, { useEffect, useState, useContext } from "react";
import { icons, Products } from "../../assets";
import Image from "next/image";
import { useParams } from "next/navigation";
import { counterContext } from "@/context/context";

export default function TheProduct() {
  const [count, setCount] = useState(1); 

  type ProductType = {
    _id: string;
    title: string;
    _updatedAt: string;
    productImage: {
      asset: {
        _id: string;
        url: string;
      };
    };
    price: number;
    dicountPercentage: number;
    category: { title: string; _id: string };
    bestseller: boolean;
    isNew: boolean;
    description: string;
    tags: string[];
  };

  
  const [product, setProduct] = useState<ProductType>();
  // { params }: { params: { id: string } }

  const params = useParams();
  const productId = params.id;

  // console.log("Product ID:", productId);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`/api/product`).then((response) =>
        response.json()
      );
      // console.log(response, "response----");

      const Product = response.find(
        (p: any) => String(p._id) === String(productId)
      );
      // const foundProduct = response.find((p: any) => p.id === productId);
      // console.log(Product, "foudProd");
      setProduct(Product);
    }

    fetchProduct();
  }, []);
  //--------------
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const images: string[] | any[] = [
    product?.productImage?.asset?.url,
    // "https://upload.wikimedia.org/wikipedia/commons/b/bc/Information_example_page_300px.jpg"
    product?.productImage?.asset?.url,
  ];

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleAddToCart = () => {
    if (!product) return;

    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item: ProductType) => item._id === product._id
    );

    if (existingProductIndex !== -1) {
      // If product already exists, increase the quantity
      cart[existingProductIndex].quantity += 1;
      console.log(cart);
    } else {
      // If product doesn't exist, add it to the cart with quantity 1
      cart.push({ ...product, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(cart);

    // Optional: Alert user or show confirmation message
    alert("Product added to cart");
  };

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
      console.log(`value of ${product}=${count}`);
    }, [count]);

  return (
    <section className="w-[85vw] lg:w-[73vw] mx-auto py-[48px] flex flex-col lg:flex-row gap-[30px] ">
      <div className="flex flex-col gap-[30px] lg:w-[510px] lg:h-[546px]">
        <div className=" relative ">
          {/* crousel */}
          <Image
            src={
              images[currentIndex] ||
              "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png"
            }
            alt=""
            width={100}
            height={100}
            className={`w-[348px] h-[277px] lg:w-[510px] lg:h-[450px] mx-auto object-cover ${currentIndex === 1 ? "object-fill" : "object-cover"}`}
          />

          <div className="flex justify-between">
            <button onClick={prev}>
              <Image
                src={icons.crouselPrev}
                alt=""
                width={100}
                height={100}
                className=" w-[24px] absolute left-[40px] top-[118px] lg:top-[258px]"
              />
            </button>
            <button onClick={next}>
              <Image
                src={icons.crouselNext}
                alt=""
                width={100}
                height={100}
                className=" w-[24px] absolute right-[40px] top-[118px] lg:top-[258px]"
              />
            </button>
          </div>
        </div>

        <div className="flex gap-[15px] py-[15px]">
          <Image
            src={images[0]}
            alt=""
            width={100}
            height={100}
            className={`w-[100px] h-[75px] object-cover ${currentIndex === 0 ? "opacity-100" : "opacity-40"}`}
          />
          <Image
            src={images[1]}
            alt=""
            width={100}
            height={100}
            className={`w-[100px] h-[75px] object-cover ${currentIndex === 1 ? "opacity-100" : "opacity-40"}`}
          />
        </div>
      </div>

      <div className="w-[full] lg:w-[510px]  px-[24px] flex flex-col gap-[20px]">
        {/* other content */}
        <h2 className="text-xl text-[#252B42]">
          {/* Floating Phone */}
          {product?.title}
        </h2>

        <div className="flex gap-[10px] items-center">
          <div className="flex gap-[6px]  ">
            <Image src={icons.star} alt="" />
            <Image src={icons.star} alt="" />
            <Image src={icons.star} alt="" />
            <Image src={icons.star} alt="" />
            <Image src={icons.star} alt="" />
          </div>
          <p className="text-[#737373] text-sm font-bold">10 Reviews</p>
        </div>

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

        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[10px] items-center">
            <h3 className="text-[#858585] font-bold line-through ">
              ${product?.price}
              {/* $original price */}
            </h3>
            <h3 className="text-[#252B42] font-bold text-xl">
              {/* $discountprice  */}
              {/* ${product?.dicountPercentage} */}$
              {product?.price && product?.dicountPercentage
                ? (
                    product.price -
                    (product.price * product.dicountPercentage) / 100
                  ).toFixed(2)
                : "N/A"}
            </h3>
          </div>

          <div className="flex gap-[5px] text-sm font-bold items-center">
            <h4 className="text-[#737373]">Condition :</h4>
            <p className="text-[#23A6F0]">
              {/* In Stock  */}
              {product?.isNew === false ? "Old" : "New"}
            </p>
          </div>
        </div>

        <p className="text-sm text-justify text-[#858585]">
          {product?.description}
        </p>

        <div className="w-full h-[2px] bg-[#858585]"></div>

        <div className="flex gap-[10px]">
          {/* <button>
            <Image
              src={icons.heart2}
              alt=""
              className="bg-white border rounded-full p-[5px] w-[30px] h-[30px] hover:bg-[#23A6F0]"
            />
          </button> */}
          <button onClick={handleAddToCart}>
            <Image
              src={icons.cart2}
              alt=""
              className="bg-white border rounded-full p-[5px] w-[30px] h-[30px] hover:bg-[#23A6F0]"
            />
          </button>
          {/* <button>
            <Image
              src={icons.eye}
              alt=""
              className="bg-white border rounded-full p-[5px] w-[30px] h-[30px] hover:bg-[#23A6F0]"
            />
          </button> */}
        </div>

        <div className="flex flex-wrap text-xs ">
          {product?.tags?.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-200 rounded">
              {tag}
            </span>
          ))}

        </div>
      </div>
    </section>
  );
}

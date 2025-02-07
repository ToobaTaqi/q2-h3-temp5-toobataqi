"use client";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { Products, icons } from "../../assets";
import CategoryCard from "../globalComponents/CategoryCard";
import Link from "next/link";

export default function ShopCategories() {
  const [categories, setCategories] = useState<
    {
      _id: string;
      image: {
        asset: {
          _id: string;
          url: string;
        };
      };
      title: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/category").then((response) =>
          response.json()
        );
        // console.log("ShopCategories", response);
        setCategories(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCategories();
  }, []);

  // console.log("outer", categories);

  return (
    <section className="bg-[#FAFAFA] ">
      <div className="w-[80vw] mx-auto flex flex-col items-center lg:flex-row lg:pb-[48px] gap-[18px] lg:gap-[15px] py-7">
        {categories.map((category, index) => (
          <Link href={`category/${category._id}`} key={index}>
            <CategoryCard
              img={category.image?.asset?.url}
              title={category.title}
            />
          </Link>
        ))}

        {/* <Image src={Products.productList1} alt="" className="lg:w-[205] lg:h-[223] object-cover"/>
        <Image src={Products.productList2} alt="" className="lg:w-[205] lg:h-[223] object-cover"/>
        <Image src={Products.productList3} alt="" className="lg:w-[205] lg:h-[223] object-cover"/>
        <Image src={Products.productList4} alt="" className="lg:w-[205] lg:h-[223] object-cover"/>
        <Image src={Products.productList5} alt="" className="lg:w-[205] lg:h-[223] object-cover"/> */}
      </div>
    </section>
  );
}

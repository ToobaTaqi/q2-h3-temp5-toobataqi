// parent of Product
"use client";
import React, { useEffect, useState } from "react";
// import Product from "./Product";
import { Products } from "../../assets";
import Link from "next/link";
import Product from "./Product";

export default function Editors() {
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
        setCategories(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

 

  return (
    <section className=" py-24  bg-[#FAFAFA]">
      <div className="min-w-[333px] w-[80vw] mx-auto flex flex-col justify-center items-center gap-14">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="font-bold text-2xl ">EDITOR'S PICK</h2>
          <p className="text-sm text-[#737373]">
            Problems trying to resolve <br className="lg:hidden" /> the conflict
            between
          </p>
        </div>

        <div className=" flex flex-col items-center justify-center lg:flex-row gap-5 lg:w-[75vw] lg:h-[34vw] mx-auto ">
          {categories.map((category, index) => (
            // <Link href={`/category/${category._id}`}>
            <Product
              key={index}
              href={`/category/${category._id}`}
              p={category.image.asset.url}
              text={category.title}
            />
            // </Link>
          ))}

          {/* <Product p={Products.p1} text="MEN" />
          <Product p={Products.p2} text="WOMEN" />
          <Product p={Products.p4} text="KIDS" /> */}
        </div>
      </div>
    </section>
  );
}

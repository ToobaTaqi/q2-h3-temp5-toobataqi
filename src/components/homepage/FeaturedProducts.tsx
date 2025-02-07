"use client";
import React, { useEffect, useState } from "react";
import { Products } from "../../assets";
import Featured from "./Featured";

export default function FeaturedProducts() {
  const [bestSeller, setBestSeller] = useState<
    {
      _id: string;
      title: string;
      productImage: { asset: { url: string } };
      bestseller: boolean;
      price: number;
      dicountPercentage: number;
      category: { title: string } | null;
    }[]
  >([]);

  useEffect(() => {
    const fetchBestSeller = async () => {
      try {
        const response: {
          _id: string;
          productImage: {
            asset: {
              url: string;
            };
          };
          title: string;
          bestseller: boolean;
          price: number;
          dicountPercentage: number;
          category?: { title: string } | null;
        }[] = await fetch("/api/product").then((response) => response.json());
        // console.log("object", response);

        setBestSeller(
          response
            .filter((item) => item.bestseller)
            .map((item) => ({
              ...item,
              category: item.category?.title
                ? item.category
                : { title: "WOMEN" },
            }))
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchBestSeller();
  }, []);

  // console.log("outerbestseller", bestSeller);

  return (
    <section className="min-w-[333px] w-[80vw] mx-auto py-24 flex flex-col gap-14">
      <div className="flex flex-col gap-3 text-center">
        <h2 className=" text-xl leading-[30px] text-[#737373]">
          Featured Products
        </h2>
        <h3 className="font-bold text-2xl ">
          BESTSELLER <br className="lg:hidden" /> PRODUCTS
        </h3>
        <p className="text-sm text-[#737373]">
          Pronlems trying to resolve <br className="lg:hidden" /> the conflict
          between
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-[30px] lg:justify-center lg:items-center mx-auto ">
        {bestSeller.map((item, index) => (
          <Featured
            key={index} href={item._id}
            img={item.productImage?.asset.url}
            title={item.title}
            category={item.category?.title ?? "WOMEN"}
            price={item.price}
            dicountPrice={item.dicountPercentage}
          />
        ))}

        {/* <Featured img={Products.p5} title={} updateDate={} price={} discountPercentage={}/> */}
        {/* <Featured img={Products.p6} />
        <Featured img={Products.p7} />
        <Featured img={Products.p8} />
        <Featured img={Products.p9} />
        <Featured img={Products.p10} />
        <Featured img={Products.p10} />
        <Featured img={Products.p1} /> */}
      </div>
    </section>
  );
}

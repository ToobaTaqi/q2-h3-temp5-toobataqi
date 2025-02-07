"use client";
import React, { useEffect, useState } from "react";
import Featured from "../homepage/Featured";

export default function BestSeller() {
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
  return (
    <section className="bg-white lg:w-[73vw] mx-auto flex flex-col py-[48px] gap-[24px] items-center lg:items-start">
      <h3 className="text-[#252B42] text-2xl font-bold lg:text-start">
        BESTSELLER PRODUCTS
      </h3>
      <div className="flex flex-col gap-[24px] items-center lg:flex-row">
        {bestSeller.map((item, index) => (
          <Featured
            key={index}
            href={item._id}
            img={item.productImage?.asset.url}
            title={item.title}
            category={item.category?.title ?? "WOMEN"}
            price={item.price}
            dicountPrice={item.dicountPercentage}
          />
        ))}
        {/* <Featured href=""
          title="{product.title}"
          img={
            "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png"
          }
          category="{product._updatedAt}"
          price={23}
          dicountPrice={23}
        />
        <Featured
          title="{product.title}"
          img={
            "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png"
          }
          updateDate="{product._updatedAt}"
          price={23}
          discountPrice={23}
        />
        <Featured
          title="{product.title}"
          img={
            "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png"
          }
          updateDate="{product._updatedAt}"
          price={23}
          discountPrice={23}
        />
        <Featured
          title="{product.title}"
          img={
            "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png"
          }
          updateDate="{product._updatedAt}"
          price={23}
          discountPrice={23}
        /> */}
      </div>
    </section>
  );
}

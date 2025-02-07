"use client";
import React, { useEffect, useState } from "react";
// import CategoryCard from "../globalComponents/CategoryCard";
import Link from "next/link";
import CategoryCard from "../globalComponents/CategoryCard";

export default function AllCategories() {
  const [categories, setCategories] = useState<
    {_id:string,
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
        console.log(".", response);
        setCategories(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <section>
      <div className="w-[80vw] mx-auto flex flex-col items-center lg:flex-row lg:pb-[48px] gap-[18px] lg:gap-[15px] py-7">
        {categories.map((category, index) => (
          <Link href={`category/${category._id}`} key={index}>
            <CategoryCard
              img={category.image?.asset?.url}
              title={category.title}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

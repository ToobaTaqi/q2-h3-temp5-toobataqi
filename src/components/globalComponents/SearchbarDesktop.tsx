"usestate";
import { NavbarDesktop } from "../../assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchbarDesktop() {
  const [query, setQuery] = useState<string>(""); // User input
  const [results, setResults] = useState<any[]>([]); // Search results
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const [productsRes, categoriesRes] = await Promise.all([
        fetch(`/api/product`),
        fetch(`/api/category`),
      ]);

      const productsData = await productsRes.json();
      const categoriesData = await categoriesRes.json();

      // Assign "WOMEN" to products with category == null
      const processedProducts = productsData.map((p: any) => ({
        ...p,
        category: p.category || "women",
      }));

      setProducts(processedProducts);
      setCategories(categoriesData);
    }

    fetchData();
  }, []);

  // Filter results based on user input
  useEffect(() => {
    if (query.length >= 1) {
      const filteredProducts = products.filter(
        (p: any) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          //   p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.tags?.some((tag: string) =>
            tag.toLowerCase().includes(query.toLowerCase())
          )
      );

      const filteredCategories = categories.filter((c: any) =>
        c.title.toLowerCase().includes(query.toLowerCase())
      );

      setResults([...filteredCategories, ...filteredProducts]);
    } else {
      setResults([]);
    }
  }, [query, products, categories]);

  // Handle search selection
  const handleSelect = (item: any) => {
    if (!item.category) {
      router.push(`/category/${item._id}`);
    } else {
      router.push(`/product/${item._id}`);
    }
    setQuery("");
    setResults([]);
  };

  return (
    <div className="relative px-[15px] gap-2 rounded-full border border-[#23A6F0] py-[5px] flex w-fit justify-center items-center">
      <input
        type="text"
        placeholder="Search"
        className="w-fit"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <Image
          src={NavbarDesktop.Search}
          alt=""
          className="w-[16px] h-[16px]"
        />
      </button>

      {results.length > 0 && (
        <ul className="absolute bg-white top-0 left-0 border mt-10 mr-6 w-fit shadow-md rounded-md max-h-60 overflow-y-auto z-10">
          {results.map((item, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(item)}
            >
              {item.title} {item.category ? "(Product)" : "(Category)"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

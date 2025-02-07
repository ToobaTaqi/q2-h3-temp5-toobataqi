"usestate";
import { NavbarMobile } from "../../assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchBar() {
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

  //   const handleSelect = (item: any) => {
  //     if (item.category) {
  //       router.push(`/product/${item._id}`); // Redirect to product page
  //     } else {
  //       router.push(`/category/${item._id}`); // Redirect to category page
  //     }
  //     setQuery(""); // Clear input
  //     setResults([]); // Hide suggestions
  //   };

  return (
    <div className="relative flex w-[200px] px-[10px] py-[5px] mr-[5px] rounded-full justify-between border border-[#23A6F0] ">
      <input
        type="text"
        placeholder="Search anything"
        className="w-[150px] px-[10px] py-[5px]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <Image
          src={NavbarMobile.search}
          alt=""
          width={10}
          height={10}
          className="w-[24px] h-[24px] "
        />
      </button>
      {/* Dropdown with Results */}
      {results.length > 0 && (
        <ul
        //   className="absolute top-[110%] left-0 bg-white border w-full min-w-[200px] shadow-md rounded-md max-h-60 overflow-y-auto z-10"
         className="absolute bg-white border mt-10 mr-6 w-fit shadow-md rounded-md max-h-60 overflow-y-auto z-10"
        >
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

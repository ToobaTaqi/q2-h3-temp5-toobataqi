// "use client";
// import React, { useEffect, useState } from "react";
// import { icons, Products } from "@/app/assets";
// import Image from "next/image";
// import { useParams } from "next/navigation";

// export default function TheCategory() {
//   type CategoryType = {
//     _id: string;
//     title: string;
//     // _updatedAt: string;
//     image: {
//       asset: {
//         _id: string;
//         url: string;
//       };
//     };
//     price: number;
//     dicountPercentage: number;
//     category: { title: string; _id: string };
//     bestseller: boolean;
//     isNew: boolean;
//     description: string;
//     tags: string[];
//   };
//   const [category, setCategory] = useState<CategoryType>();
//   // { params }: { params: { id: string } }

//   const params = useParams();
//   const categoryId = params.id;

//   console.log("Product ID:", categoryId);

//   useEffect(() => {
//     async function fetchProduct() {
//       const response = await fetch(`/api/category`).then((response) =>
//         response.json()
//       );
//       console.log(response, "response----");

//       const Category = response.find(
//         (c: any) => String(c._id) === String(categoryId)
//       );
//       // const foundProduct = response.find((p: any) => p.id === productId);
//       console.log(Category, "foudProd");
//       setCategory(Category);
//     }

//     fetchProduct();
//   }, []);
//   //--------------
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const images: string[] | any[] = [
//     category?.image?.asset?.url,
//     // "https://upload.wikimedia.org/wikipedia/commons/b/bc/Information_example_page_300px.jpg"
//     category?.image?.asset?.url,
//   ];

//   const prev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const next = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   return (
//     <section className="w-[85vw] lg:w-[73vw] mx-auto py-[48px] flex flex-col lg:flex-row gap-[30px] ">
//       <div className="flex flex-col gap-[30px] lg:w-[510px] lg:h-[546px]">
//         <div className=" relative ">
//           {/* crousel */}
//           <Image
//             src={
//               images[currentIndex] ||
//               "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png"
//             }
//             alt=""
//             width={100}
//             height={100}
//             className={`w-[348px] h-[277px] lg:w-[510px] lg:h-[450px] mx-auto object-cover ${currentIndex === 1 ? "object-fill" : "object-cover"}`}
//           />

//           <div className="flex justify-between">
//             <button onClick={prev}>
//               <Image
//                 src={icons.crouselPrev}
//                 alt=""
//                 width={100}
//                 height={100}
//                 className=" w-[24px] absolute left-[40px] top-[118px] lg:top-[258px]"
//               />
//             </button>
//             <button onClick={next}>
//               <Image
//                 src={icons.crouselNext}
//                 alt=""
//                 width={100}
//                 height={100}
//                 className=" w-[24px] absolute right-[40px] top-[118px] lg:top-[258px]"
//               />
//             </button>
//           </div>
//         </div>

//         <div className="flex gap-[15px] py-[15px]">
//           <Image
//             src={images[0]}
//             alt=""
//             width={100}
//             height={100}
//             className={`w-[100px] h-[75px] object-cover ${currentIndex === 0 ? "opacity-100" : "opacity-40"}`}
//           />
//           <Image
//             src={images[1]}
//             alt=""
//             width={100}
//             height={100}
//             className={`w-[100px] h-[75px] object-cover ${currentIndex === 1 ? "opacity-100" : "opacity-40"}`}
//           />
//         </div>
//       </div>

//      <div>
// <h2>{category?.title}</h2>
//      </div>
//     </section>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { icons, Products } from "../../assets";
import Image from "next/image";
import { useParams } from "next/navigation";
import Featured from "../homepage/Featured";
// import Featured from "../../homepage/Featured";

export default function TheCategory() {
  type ProductType = {
    _id: string;
    title: string;
    productImage: {
      asset: {
        _id: string;
        url: string;
      };
    };
    price: number;
    dicountPercentage: number;
    category: {
      title: string;
      _id: string;
    };
    bestseller: boolean;
    isNew: boolean;
    description: string;
    tags: string[];
  };

  type CategoryType = {
    _id: string;
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
    title: string;
  };

  // State for category and products
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [products, setProducts] = useState<ProductType[]>([]);

  // Get category ID from URL
  const params = useParams();
  const categoryId = params.id;
  //   console.log("current category", categoryId);

  useEffect(() => {
    // Fetch category details
    async function fetchCategory() {
      const categoryResponse = await fetch(`/api/category`);
      const categories = await categoryResponse.json();

      const selectedCategory = categories.find(
        (category: any) => String(category._id) === String(categoryId)
      );
      console.log("selectedCategory", selectedCategory);
      setCategory(selectedCategory);
    }

    async function fetchProducts() {
      const productsResponse = await fetch(`/api/product`);
      const allProducts = await productsResponse.json();
      console.log(allProducts, "----------");

      let matchedProducts = [];
      for (let i = 0; i < allProducts.length; i++) {
        const product = allProducts[i];

        // If the product's category is not null and matches the categoryId
        if (product.category && product.category._id === categoryId) {
          console.log("matched", product);
          matchedProducts.push(product);
        }
        // If the category is null, assume it's in the "WOMEN" category
        else if (product.category === null) {
          product.category = {
            title: "WOMEN",
            _id: "b4471ca0-17ae-4b02-9e50-f95639e2fc18",
          }; // Assign WOMEN category
          console.log("category is null, assuming WOMEN", product);
          matchedProducts.push(product);
        }
      }

      // Set the matched products after the loop finishes
      console.log(matchedProducts, "final matched products");
      setProducts(matchedProducts);
    }

    fetchCategory();
    fetchProducts();
  }, []);

  return (
    <section className="w-[85vw] lg:w-[80vw] mx-auto py-[48px] flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] lg:w-[510px] lg:h-[546px]">
        <h2 className="text-2xl text-[#252B42] uppercase font-bold">
          {category?.title}
        </h2>
        {/* <div className=""> */}
        <Image
          src={
            category?.image?.asset?.url ||
            "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png"
          }
          alt=""
          width={100}
          height={100}
          className={`w-[348px] h-[277px] lg:w-[510px] lg:h-[450px] mx-auto object-cover`}
        />
        {/* </div> */}
      </div>

      {/* Product List under the Category */}
      <div className="w-full px-[24px] flex flex-col lg:flex-row lg:flex-wrap gap-[20px] ">
        <h2>Product bwlonged to the current category</h2>
        {/* Render products under this category */}
        <div className="grid grid-cols-1 lg:grid-cols-4 px-[10px] gap-[20px] justify-center items-center ">
          {products.length > 0 ? (
            products.map((item, index) => (
              <Featured
                key={index}
                href={item._id}
                img={item.productImage?.asset.url}
                title={item.title}
                category={item.category?.title}
                price={item.price}
                dicountPrice={item.dicountPercentage}
              />
            ))
          ) : (
            <p>
              Are you sure this category contains products? then wait, the data
              is <span className="font-bold text-green-300">loading.....</span> 
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

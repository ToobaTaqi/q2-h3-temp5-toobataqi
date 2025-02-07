// src/app/api/product/route.ts
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
  const query = `*[_type == "product"]
  {_id, description,isNew, tags,
             title,
             _updatedAt,
             productImage{
               asset->{
                 _id,
                 url
               }
             },
             price,
             dicountPercentage,
             category->{title, _id},
             bestseller}
        
  `;
  const products = await client.fetch(query);

  return NextResponse.json(products);
}

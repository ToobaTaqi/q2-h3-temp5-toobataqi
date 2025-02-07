// src/app/api/product/route.ts
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
  const query = `*[_type == "category"]
   {_id,
             title,
             image{
               asset->{
                 _id,
                 url
               }
             },
            }
  `;
  const categories = await client.fetch(query);

  return NextResponse.json(categories);
}

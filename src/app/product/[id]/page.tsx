import React from 'react'
import BestSeller from "../../../components/productPage/BestSeller";
import Header from "../../../components/productPage/Header";
import TheProduct from "../../../components/productPage/TheProduct";
import Clients from "../../../components/shopPage/Clients";

export default function page() {
  return (
     <section className="bg-[#FAFAFA]">
          <div className="w-[84vw] mx-auto ">
            <Header />
            <TheProduct />
            <BestSeller />
            <Clients/>
          </div>
        </section>
  )
}

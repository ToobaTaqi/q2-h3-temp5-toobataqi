import React from 'react'
import Header from "../../../components/productPage/Header";
import TheCategory from '../../../components/allCategoriesPage/TheCategory';

export default function page() {
  return (
     <section className="bg-[#FAFAFA]">
              <div className="w-[84vw] mx-auto ">
                <Header />
                <TheCategory/>
              </div>
            </section>
  )
}

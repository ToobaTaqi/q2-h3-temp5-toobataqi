import Image from "next/image";
import React from "react";
import { footerIcons } from "../../assets";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-24 lg:pt-0 flex flex-col gap-20">
      {/* footer header */}
      <div className=" bg-[#FAFAFA] pt-5">
        <div className="flex flex-col gap-[12px] w-[80vw] mx-auto py-10">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold">Bandage</h1>
          </Link>
          <div className="flex gap-[20px]">
            <Image src={footerIcons.facebook} alt="" />
            <Image src={footerIcons.instagram} alt="" />
            <Image src={footerIcons.twitter} alt="" />
          </div>
        </div>
      </div>

      {/* footer body */}

      <div className="w-[80vw] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-[30px]">
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold">Company info</h3>
          <div className="flex flex-col gap-[10px] text-[#737373] text-sm font-bold">
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/productlist">All Products</Link>
            <Link href="/allcategories">All Categories</Link>
            <Link href="/team">Our Team</Link>
            <Link href="/pricing">Pricing Plans</Link>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold">Legal</h3>
          <div className="flex flex-col gap-[10px] text-[#737373] text-sm font-bold">
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup/Register</Link>
            <Link href="contact">Contact Us</Link>
            <Link href="/team">Meet Our Team</Link>
            <Link href="/">Home</Link>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold">Features</h3>
          <div className="flex flex-col gap-[10px] text-[#737373] text-sm font-bold">
            <Link href="/productlist">Filter Products By Price</Link>
            <Link href="/">Best Sellers</Link>
            <Link href="/">New Arrivals</Link>
            <Link href="/contact">Unlimited Support</Link>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold">Resources</h3>
          <div className="flex flex-col gap-[10px] text-[#737373] text-sm font-bold">
            <Link href="https://www.facebook.com/" target="blank">
              Facebook
            </Link>
            <Link href="https://www.instagram.com/" target="blank">
              Instagram
            </Link>
            <Link href="https://www.linkedin.com/" target="blank">
              LinkedIn
            </Link>
            <Link href="/api/category/" target="blank">
              /api/category/
            </Link>
            <Link href="/api/product/" target="blank">
              /api/product/
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold">Get In Touch</h3>
          <div className="flex flex-col gap-[10px] text-[#737373] text-sm font-bold">
            <div className="w-[322px] flex justify-between border border-[#E6E6E6] rounded">
              <input
                type="email"
                name=""
                placeholder="Your Email"
                id=""
                className="bg-[#F9F9F9] pl-5"
              />
              <button className="bg-[#23A6F0] text-sm text-white p-5 rounded">
                Subscribe
              </button>
            </div>
            <p className="text-xs">This Input doesnot work yet</p>
          </div>
        </div>
      </div>

      {/* bottom of footer */}
      <div className="text-[#737373] font-bold text-sm bg-[#FAFAFA] flex flex-col gap-1 text-center py-7">
        <p>Made With Love By </p>
        <p>
          <Link
            href="https://www.linkedin.com/in/mernstackwebdeveloper/"
            target="blank"
            className="hover:text-gray-900"
          >
            Tooba
          </Link>{" "}
          All Right Reserved{" "}
        </p>
      </div>
    </footer>
  );
}

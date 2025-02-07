import Image from "next/image";
import React from "react";
import { footerIcons } from "../../assets";

export default function Footer() {
  return (
    <footer className="pt-24 lg:pt-0 flex flex-col gap-20">
      {/* footer header */}
      <div className=" bg-[#FAFAFA] pt-5">
        <div className="flex flex-col gap-[12px] w-[80vw] mx-auto py-10">
          <h1 className="text-2xl font-bold">Bandage</h1>
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
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold">Legal</h3>
          <div className="flex flex-col gap-[10px] text-[#737373] text-sm font-bold">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold">Features</h3>
          <div className="flex flex-col gap-[10px] text-[#737373] text-sm font-bold">
            <p>Business Marketing</p>
            <p>User Analytics</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold">Resources</h3>
          <div className="flex flex-col gap-[10px] text-[#737373] text-sm font-bold">
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
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
            <p className="text-xs">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>

      {/* bottom of footer */}
      <div className="text-[#737373] font-bold text-sm bg-[#FAFAFA] flex flex-col gap-1 text-center py-7">
        <p>Made With Love By </p>
        <p>Tooba All Right Reserved </p>
      </div>
    </footer>
  );
}

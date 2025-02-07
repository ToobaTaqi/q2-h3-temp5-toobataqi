"use client";
import React, { useEffect, useState } from "react";
import { NavbarMobile, NavbarDesktop } from "../../assets";
import Image from "next/image";
import Link from "next/link";
// import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { icons } from "../../assets";
import Logout from "./Logout";
import SearchBar from "./SearchBar";

export default function NavBarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check localStorage or any authentication logic
    const user = localStorage.getItem("authenticated"); // Modify this based on your actual auth setup
    setIsLoggedIn(!!user);
  }, []);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full pb-[20px] lg:hidden">
      {/* nav div except menu*/}

      <div className="w-full flex flex-col items-end ">
        <div className="w-full flex justify-between items-center py-7 px-5">
          <Logo />
          <div className="flex w-fit gap-[20px] justify-between items-center ">
            <Link href="/wishlist">
              <button>
                <Image
                  src={icons.heart2}
                  alt=""
                  width={10}
                  height={10}
                  className="w-[24px] h-[24px]"
                />
              </button>
            </Link>
            <Link href="/cart">
              <button>
                <Image
                  src={NavbarMobile.cart}
                  alt=""
                  width={10}
                  height={10}
                  className="w-[24px] h-[24px]"
                />
              </button>
            </Link>
            <button onClick={openMenu}>
              <Image
                src={NavbarMobile.menu}
                alt=""
                width={10}
                height={10}
                className="w-[24px] h-[13.71px]"
              />
            </button>
          </div>
        </div>
        <div className="px-[10px]">
          <SearchBar />
        </div>
      </div>

      {/* menu */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } text-[#737373] text-2xl font-semibold text-center justify-center items-center flex-col gap-7 py-16 lg:hidden`}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/allcategories">All Categories</Link>
        <Link href="/productlist">All Product</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/pricing">Our Team</Link>
        <Link href="/contact">Contact</Link>

        {isLoggedIn ? (
          <Logout />
        ) : (
          <div className="text-[#23A6F0] flex justify-center items-center text-center w-fit gap-2">
            <Image
              src={NavbarDesktop.user}
              alt=""
              width={10}
              height={10}
              className="w-[12px] h-[12px]"
            />
            <Link href="/login" className="font-semibold text-xl">
              Login / Register
            </Link>
          </div>
        )}
        {/* <div className="text-[#23A6F0] flex justify-center items-center text-center w-fit gap-2">
          <Image
            src={NavbarDesktop.user}
            alt=""
            width={10}
            height={10}
            className="w-[12px] h-[12px]"
          />
          <Link href="/login" className="font-semibold text-xl">
            Login / Register
          </Link>
        </div>
        <Logout/> */}
      </div>
    </div>
  );
}

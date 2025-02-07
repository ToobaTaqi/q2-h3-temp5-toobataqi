"use client";
import React, { useEffect, useState } from "react";
import { NavbarDesktop } from "../../assets";
import Image from "next/image";
import Link from "next/link";
// import SearchBar from "./SearchBar";
import Logo from "./Logo";
// import SearchbarDesktop from "./SearchbarDesktop";
import Logout from "./Logout";
import SearchbarDesktop from "./SearchbarDesktop";

export default function NavBarDesktop() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check localStorage or any authentication logic
    const user = localStorage.getItem("authenticated"); // Modify this based on your actual auth setup
    setIsLoggedIn(!!user);
  }, []);
  // const openMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <nav className="w-full hidden lg:block">
      {/* nav div */}
      <div className="flex justify-between items-start py-7 px-5">
        {/* logo */}
        <Logo />

        <div className=" w-full mx-auto hidden lg:flex justify-between items-center">
          {/* menu  */}
          <div className="flex text-[#737373] font-semibold gap-4 justify-between items-center text-base ">
            <Link href="/">Home</Link>
            <div className="flex justify-center items-center min-w-[63px] w-fit gap-2 ">
              <Link href="/allcategories">Categories</Link>
              <Image
                src={NavbarDesktop.shop}
                alt=""
                width={10}
                height={10}
                className=""
              />
            </div>
            <Link href="/productlist">All Products</Link>
            <Link href="/about">About</Link>
            {/* <p>Categories</p> */}
            <Link href="/contact">Contact</Link>
            <Link href="/team">Team</Link>
            <Link href="/pricing">Pricing</Link>
            {/* <p>Pages</p> */}
          </div>

          {/* icons  */}
          <div className=" w-fit text-[#23A6F0] flex gap-4 justify-between items-center">
            <div className="flex items-center w-fit gap-2">
              {/* <Image
                src={NavbarDesktop.user}
                alt=""
                width={10}
                height={10}
                className="w-[12px] h-[12px]"
              /> */}
              {/* <Link href="/login" className="font-semibold text-sm">
                Login / Register
              </Link> */}

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
                  <Link href="/login" className="font-semibold text-sm">
                    Login / Register
                  </Link>
                </div>
              )}
            </div>

            <SearchbarDesktop />

            <Link href="/cart" className="flex items-center gap-2 w-fit">
              <Image
                src={NavbarDesktop.Cart}
                alt=""
                className="w-[16px] h-[16px]"
              />
              <p className="text-sm hidden">1</p>
            </Link>
            {/* <Link href="/wishlist" className="flex items-center gap-2 w-fit">
              <Image
                src={NavbarDesktop.heart}
                alt=""
                className="w-[16px] h-[16px]"
              />
              <p className="text-sm hidden">1</p>
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

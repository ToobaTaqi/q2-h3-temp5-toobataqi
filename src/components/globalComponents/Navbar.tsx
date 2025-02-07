"use client";
import React, { useState } from "react";
import { NavbarMobile, NavbarDesktop } from "../../assets";
import Image from "next/image";
import Link from "next/link";
import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";
// import SearchBar from "./SearchBar";
// import NavBarMobile from "./NavBarMobile";
// import NavBarDesktop from "./NavBarDesktop";

export default function Navbar() {
  return (
    <nav>
      <NavBarMobile />
      <NavBarDesktop />
    </nav>
  );
}

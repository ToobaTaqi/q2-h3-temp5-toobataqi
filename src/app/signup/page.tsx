import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="flex flex-col justify-center text-center border border-black gap-[30px] py-[50px] px-[30px] w-[85vw] lg:w-[60vw] mx-auto rounded-lg bg-[#252B42] text-white my-10">
      <h2 className="font-bold text-4xl">Signup</h2>
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <span className="text-xl text-red-500 ">
          This page is not working yet
        </span>
        <span className="text-sm text-gray-500 ">
          Please enter your details
        </span>
        <input
          type="email"
          placeholder="Email"
          className="border border-black px-[20px] py-[10px] rounded-full text-[#252B42]"
        />
        <input
          type="tel"
          placeholder="33-33333333"
          className="border border-black px-[20px] py-[10px] rounded-full text-[#252B42]"
        />
        <input
          type="text"
          placeholder="Username"
          className="border border-black px-[20px] py-[10px] rounded-full text-[#252B42]"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-white px-[20px] py-[10px] rounded-full text-[#252B42]"
        />
        <div className="flex flex-col gap-[10px]">
          <p className="text-xs underline font-bold">Forgot password? </p>
          <p className="text-sm">
            Already have an account?
            <Link href="/login">
              <span className="font-bold text-[#B2E3FF] opacity-80 hover:underline hover:text-opacity-100">
                Login
              </span>
            </Link>
          </p>
        </div>
        <button className="bg-[#B2E3FF] font-bold text-sm text-[#23A6F0] py-[10px] px-[20px] rounded-full hover:text-[#B2E3FF] hover:bg-[#23A6F0]">
          Login
        </button>
      </div>
    </section>
  );
}

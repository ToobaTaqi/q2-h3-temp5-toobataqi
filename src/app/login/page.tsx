"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");
    if (isAuthenticated === "true") {
      router.push("/user");
    }
  }, [router]);

  const handleLogin = () => {
    const hardcodedUser = {
      username: "tooba",
      password: "password123",
    };

    if (
      username === hardcodedUser.username &&
      password === hardcodedUser.password
    ) {
      localStorage.setItem("authenticated", "true");
      console.log("authenticated")
      router.push("/user");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <section className="flex flex-col justify-center text-center border border-black gap-[30px] py-[50px] px-[30px] w-fit lg:w-[60vw] mx-auto rounded-lg bg-[#252B42] text-white my-10">
      <h2 className="font-bold text-4xl">Login</h2>
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <span className="text-sm text-red-300 ">
          Note: I used Hard Coded Credentials for now <br />Try username : tooba, password: password123
        </span>
        <span className="text-sm text-gray-500 ">
          Please enter your login and password
        </span>
        <input
          type="text"
          placeholder="Username / Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-black px-[20px] py-[10px] rounded-full text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-black px-[20px] py-[10px] rounded-full text-black"
        />
        <div className="flex flex-col gap-[10px]">
          <p className="text-xs underline font-bold">Forgot password? </p>
          <p className="text-sm">
            Don't have an account?{" "}
            <Link href="/signup">
              <span className="font-bold text-[#B2E3FF] opacity-80 hover:underline hover:text-opacity-100">
                Signup
              </span>
            </Link>
          </p>
        </div>
        {/* <div className="flex flex-col lg:flex-row text-white text-xs gap-[10px]">
          <div className="flex gap-[6px] justify-center items-center">
            <input type="radio" name="role" id="customer" value="customer" />
            <label htmlFor="customer">Customer</label>
          </div>
          <div className="flex gap-[6px] justify-center items-center">
            <input type="radio" name="role" id="admin" value="admin" />
            <label htmlFor="admin">Admin</label>
          </div>
        </div> */}
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <button
          onClick={handleLogin}
          className="bg-[#B2E3FF] font-bold text-sm text-[#23A6F0] py-[10px] px-[20px] rounded-full hover:text-[#B2E3FF] hover:bg-[#23A6F0]"
        >
          Login
        </button>
      </div>
    </section>
  );
}

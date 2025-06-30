"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/utils/cn";

const HomePage = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const current = localStorage.getItem("theme") || "dark";
    setTheme(current);
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center min-h-[100vh] w-full overflow-hidden  antialiased px-4 sm:px-20 dark:bg-black dark:text-white bg-white text-black pb-20">
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 z-60"
        fill={theme === "dark" ? "white" : "black"}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto flex flex-col-reverse lg:flex-row items-center  gap-5 mt-50 p-10 justify-center dark:bg-transparent bg-white shadow-2xl">
        {/* Text Section */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-4 max-w-xl">
          <span className="text-base sm:text-lg light:text-gray-300">
            Explore the latest in movie industries
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Unlimited Movies, TV Shows, & More.
          </h1>
          <p className="text-sm sm:text-base light:text-gray-400 max-w-md">
            Discover top-rated movies and dramas with catchy subtitles — your
            ultimate guide to binge-worthy content.
          </p>
          <Link href="/movies">
            <button className="mt-4 bg-red-500 hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-lg transition duration-300  cursor-pointer dark:hover:border-none hover:border ease-in-out transform hover:scale-105">
              Explore Now
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1579445710183-f9a816f5da05?q=80&w=729&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Movie Poster"
            width={600}
            height={800}
            className="rounded-xl h-full w-auto object-cover shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;

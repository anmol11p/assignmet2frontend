"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const MovieCard = ({ Title, Poster, imdbID }) => {
  const [imgSrc, setImgSrc] = useState(
    Poster !== "N/A" ? Poster : "/fallback.jpg"
  );

  return (
    <li className="flex flex-col items-center dark:bg-black bg-white rounded-md shadow-md text-red-600 p-2 my-4 w-full justify-center dark:shadow-2xl">
      <div className="relative w-full h-110 mb-2">
        <Image
          src={imgSrc}
          alt={Title}
          fill
          className="object-cover rounded-md"
          onError={() => setImgSrc("/fallback.jpg")}
        />
      </div>

      <Link
        href={`/movies/${imdbID}`}
        className="w-full flex items-center justify-center p-2 rounded-b-md 
        bg-black text-white 
        dark:bg-white dark:text-black 
        hover:bg-gray-800 hover:text-white 
        dark:hover:bg-transparent dark:hover:text-white dark:hover:border-white 
        border border-transparent 
        transition-all duration-200"
      >
        Watch
      </Link>
    </li>
  );
};

export default MovieCard;

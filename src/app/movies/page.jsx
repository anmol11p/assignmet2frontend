"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { cn } from "@/utils/cn";
import { SparklesCore } from "@/components/ui/Sparkles";
import { useTheme } from "next-themes";
import { getApiData } from "@/data/getApiDetail";

import SkeletonCard from "@/components/SkeletonCard";
import MovieCard from "@/components/MovieCard";

const MoviePage = () => {
  const { resolvedTheme } = useTheme();
  const [movieData, setMovieData] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const searchTimeoutRef = useRef();
  const [isPending, startTranistion] = useTransition();
  const fetchMovies = async () => {
    try {
      const resp = await getApiData();
      if (resp.Response === "True") {
        startTranistion(() => {
          setMovieData(resp.Search);
        });
      }
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleOnchange = async (event) => {
    event.preventDefault();
    const { value } = event.target;

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(async () => {
      setHasSearched(true);
      try {
        const resp = await getApiData(value);
        if (resp.Response === "True") {
          startTranistion(() => {
            setMovieData(resp.Search);
          });
        } else {
          setMovieData([]);
        }
      } catch (error) {
        setMovieData([]);
      }
    }, 500);
  };

  const particleColor = resolvedTheme === "light" ? "#000000" : "#FFFFFF";

  return (
    <div className="relative w-full min-h-screen overflow-hidden dark:bg-black bg-white text-black dark:text-white">
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0 select-none",
          "[background-size:40px_40px]",
          "dark:[background-image:linear-gradient(to_right,#2e2e2e_1px,transparent_1px),linear-gradient(to_bottom,#2e2e2e_1px,transparent_1px)]",
          "light:[background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]"
        )}
      />

      {/* Sparkles */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-[20rem] h-20 z-10">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor={particleColor}
        />
        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>

      {/* Content */}
      <main className="relative z-20 flex flex-col items-center pt-32 pb-20">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center mb-12">
          Movies
        </h1>

        <form
          action="#"
          className="pb-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            placeholder="search movie eg titanic.."
            className="dark:border-white border rounded border-black px-3 py-1 text-sm outline-none"
            onChange={handleOnchange}
          />
        </form>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full lg:px-40 px-8">
          {isPending ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : movieData.length > 0 ? (
            movieData.map((movie, index) => (
              <MovieCard
                key={index}
                Title={movie.Title}
                Poster={movie.Poster}
                imdbID={movie.imdbID}
              />
            ))
          ) : hasSearched ? (
            <div className="col-span-full animate-bounce text-center text-red-500 font-semibold text-2xl g mt-5">
              Movie not found 😢
            </div>
          ) : null}
        </ul>
      </main>
    </div>
  );
};

export default MoviePage;

"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getMovieDetailsInside } from "@/data/getMovieDetails";
import Image from "next/image";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const [movie, setMovie] = useState(null);
  const [imgSrc, setImgSrc] = useState(""); // ✅ for dynamic image fallback

  useEffect(() => {
    const fetchApi = async () => {
      const resp = await getMovieDetailsInside(id);
      if (resp?.Response === "True") {
        setMovie(resp);
        if (resp?.Poster && resp.Poster !== "N/A") {
          setImgSrc(resp.Poster);
        } else {
          setImgSrc("/fallback.jpg");
        }
      } else {
        console.error("Movie not found:", resp?.Error || "Unknown error");
      }
    };
    fetchApi();
  }, [id]);

  if (!movie)
    return (
      <div className="h-screen grid place-items-center">
        <div className="h-20 w-20 rounded-full border-4 border-t-red-400 border-gray-200 animate-spin"></div>
      </div>
    );

  const {
    Title,
    Actors,
    Country,
    DVD,
    Language,
    Plot,
    Runtime,
    Genre,
    BoxOffice,
  } = movie;

  const runtimeMinutes = parseInt(Runtime?.split(" ")[0]) || 0;
  const hours = Math.floor(runtimeMinutes / 60);
  const minutes = runtimeMinutes % 60;

  return (
    <div className="container mx-auto py-8 lg:px-20">
      <div className="flex flex-col gap-10 items-center lg:flex-row pt-30">
        <div className="imagesection lg:w-lg">
          <Image
            src={imgSrc}
            alt={Title}
            width={300}
            height={450}
            className="w-auto h-100 object-contain rounded-sm mb-2"
            onError={() => setImgSrc("/fallback.jpg")} // ✅ fallback logic
          />
        </div>
        <div className="descSec flex flex-col gap-2 shadow-xl mx-10 lg:mx-0 bg-white dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">{Title}</h2>
          <p>
            <strong>Actors:</strong> {Actors}
          </p>
          <p>
            <strong>Country:</strong> {Country}
          </p>
          {DVD && (
            <p>
              <strong>DVD Release:</strong> {DVD}
            </p>
          )}
          <p>
            <strong>Language:</strong> {Language}
          </p>
          <p>
            <strong>Runtime:</strong>{" "}
            {Runtime && Runtime !== "N/A" ? (
              <>
                {hours > 0 && `${hours} hour`} {minutes} minutes
              </>
            ) : (
              "Not Available"
            )}
          </p>
          <p>
            <strong>Genre:</strong> {Genre}
          </p>
          <p>
            <strong>Plot:</strong> {Plot}
          </p>
          {BoxOffice && BoxOffice !== "N/A" && (
            <p>
              <strong>Collection:</strong>
              <span className="bg-pink-700 px-1 py-1 ml-2 rounded-xl">
                {BoxOffice}
              </span>
            </p>
          )}
          <button
            className="bg-pink-400 mt-5 py-1 rounded-b-lg cursor-pointer hover:bg-pink-600"
            onClick={() => router.back()}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

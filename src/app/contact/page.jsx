"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { cn } from "@/utils/cn";
import { BackgroundBeams } from "@/components/ui/Beams";

const Page = () => {
  const [form, setForm] = useState({
    title: "",
    genre: "",
    rating: "",
    review: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, genre, rating, review } = form;

    if (!title || !genre || !rating || !review) {
      toast.error("Please fill all fields", {
        duration: 3000,
        position: "bottom-center",
        className: "text-white bg-red-300",
      });
      return;
    }

    toast.success("Your review has been submitted", {
      duration: 3000,
      position: "bottom-center",
    });

    setForm({ title: "", genre: "", rating: "", review: "" });
  };

  return (
    <div className="relative w-full min-h-screen dark:bg-black dark:text-white bg-white text-black overflow-hidden">
      {/* Grid Background Overlay */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "pointer-events-none [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center px-4 pt-40 pb-10 ">
        <Toaster />
        <div className="w-full max-w-xl p-6 sm:p-10 rounded-xl dark:bg-black dark:text-white  pt-10 text-black dark:backdrop-blur-md  bg-white border border-white/10 shadow-2xl">
          <h2 className="text-2xl md:text-4xl text-center font-bold mb-4">
            Submit a Movie Review
          </h2>
          <p className="text-sm md:text-base text-center text-gray-400 mb-6">
            Share your thoughts on the latest movies you've watched. Let the
            world know what to watch next!
          </p>

          <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="px-4 py-3 border dark:bg-gray-700 bg-white rounded-xl placeholder-gray-500"
              placeholder="Movie Title"
            />

            <input
              name="genre"
              value={form.genre}
              onChange={handleChange}
              className="px-4 py-3 border dark:bg-gray-700 bg-white rounded-xl placeholder-gray-500"
              placeholder="Genre (e.g., Action, Comedy, Drama)"
            />

            <input
              name="rating"
              type="number"
              min="1"
              max="10"
              value={form.rating}
              onChange={handleChange}
              className="px-4 py-3 border dark:bg-gray-700 bg-white rounded-xl placeholder-gray-500"
              placeholder="Rating (1-10)"
            />

            <textarea
              name="review"
              value={form.review}
              onChange={handleChange}
              className="px-4 py-3  text-black dark:text-white rounded-md w-full h-32 md:h-40 border dark:bg-gray-700 bg-white   placeholder-gray-500 resize-none"
              placeholder="Write your review..."
            ></textarea>

            <div className="py-5 grid place-items-center">
              <button className="bg-gradient-to-r cursor-pointer from-purple-700 to-blue-700 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-white font-semibold py-3 px-6 rounded-md">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Background Meteors */}
      <BackgroundBeams />
    </div>
  );
};

export default Page;

// Card-hover-effect.tsx

"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <ul
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-red-400 ",
        className
      )}
    >
      {items.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative group w-full"
        >
          <Link href={item.link} className="block h-full w-full">
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-md z-0"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            {/* Wrapping the card in a relative container */}
            <div className="relative z-10">
              <Card poster={item.poster}>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <WatchButton />
              </Card>
            </div>
            <div className="relative z-10">
              <Card poster={item.poster}>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <WatchButton />
              </Card>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const Card = ({ poster, children }) => {
  return (
    <div className="flex z-10 flex-col items-center bg-white dark:bg-black rounded-md shadow-md text-black dark:text-white overflow-hidden h-full">
      <img
        src={poster}
        alt="Movie Poster"
        className="w-full h-80 object-cover rounded-t-md"
      />
      <div className="flex flex-col justify-between h-full w-full p-4">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => (
  <h4 className={cn("text-lg font-bold text-center mb-2", className)}>
    {children}
  </h4>
);

export const CardDescription = ({ className, children }) => (
  <p
    className={cn(
      "text-sm text-zinc-600 dark:text-zinc-400 text-center",
      className
    )}
  >
    {children}
  </p>
);

export const WatchButton = () => (
  <div className="mt-4">
    <div className="bg-black text-white w-full text-center py-2 rounded-md hover:bg-gray-900 transition">
      Watch
    </div>
  </div>
);

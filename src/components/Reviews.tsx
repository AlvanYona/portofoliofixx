import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

// Data reviews
const Reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

// Membagi reviews menjadi dua bagian
const firstRow = Reviews.slice(0, Reviews.length / 2);
const secondRow = Reviews.slice(Reviews.length / 2);

// Komponen ReviewCard yang Responsif
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <div
      id="Review"
      className="bg-[#ffbf28] rounded-xl mb-5 p-4 w-full max-w-xs md:max-w-md lg:max-w-lg"
    >
      <figure
        className={cn(
          "relative h-full cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-gray-200 bg-gray-100 hover:bg-gray-200",
          "dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full w-10 h-10"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          {body}
        </blockquote>
      </figure>
    </div>
  );
};

// Komponen utama MarqueeDemo yang responsif
export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden p-4">
      <Marquee pauseOnHover className="flex flex-wrap gap-4 [--duration:15s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="flex flex-wrap gap-4 [--duration:15s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-50"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-50"></div>
    </div>
  );
}

export default MarqueeDemo;

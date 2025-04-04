"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Pitch = () => {
  const [isExpanded,setIsExpanded] = useState(false)
  return (
    <div className="flex flex-col items-center gap-4 text-center px-4">
      <h4
        className={`md:w-full text-black text-center 
        text-xl leading-7 tracking-widest md:text-[1.3rem] font-normal
        `}
      >
        Queen Of Hearts - Chennai&apos;s crown jewel of partywear, where lightweight doesn&apos;t mean low on drama.
      </h4>
      <p
        className={`text-gray-500 font-normal text-sm max-w-[90%] lg:max-w-[80%] tracking-widest leading-[1.7] ${isExpanded ? "line-clamp-none" : "line-clamp-1"}
        `}
      >
        With 20 years of expertise, Khwaahish now introduces Queen of Hearts - a curated galleria of lightweight fine jewellery crafted for the modern lifestyle. We believe in jewellery that speaks for itself—bold, beautiful, and effortless. Our handpicked collections are designed to make you shine, without weighing you down. At Queen Of Hearts, every piece tells a story—and that story is yours.
      </p>
      <button
  onClick={() => setIsExpanded((prev) => !prev)}
  className="cursor-pointer rounded-lg text-sm text-black bg-gray-100 px-4 py-2 
             transition-colors duration-300 hover:bg-black hover:text-white"
>
  {isExpanded ? "View Less" : "View More"}
</button>
    </div>
  );
};

export default Pitch;

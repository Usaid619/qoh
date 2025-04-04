"use client";
import { usePathname } from "next/navigation";

const Pitch = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center px-4">
      <h4
        className={`md:w-full text-black text-center 
        text-[18px] md:text-[26px] font-semibold
        `}
      >
        Queen Of Hearts - Chennai&apos;s crown jewel of partywear, where lightweight doesn&apos;t mean low on drama.
      </h4>
      <p
        className={`text-gray-500 font-normal lg:text-lg text-[16px] max-w-[90%] lg:max-w-[80%]
        `}
      >
        With 20 years of expertise, Khwaahish now introduces Queen of Hearts - a curated galleria of lightweight fine jewellery crafted for the modern lifestyle. We believe in jewellery that speaks for itself—bold, beautiful, and effortless. Our handpicked collections are designed to make you shine, without weighing you down. At Queen Of Hearts, every piece tells a story—and that story is yours.
      </p>
     <button className="cursor-pointer text-gray-500 bg-gray-100 px-3 py-1">View More</button>
    </div>
  );
};

export default Pitch;

"use client";

import { useRef, useState } from "react";
import useMarquee from "@/src/hooks/useMarquee";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Marquee = () => {
  const location = usePathname();
  let [animation, setAnimation] = useState();
  const marqueeRef1 = useRef();
  const marqueeRef2 = useRef();
  const marqueeRef3 = useRef();

  useMarquee(setAnimation, marqueeRef1, marqueeRef2, marqueeRef3);

  const pauseMarquee = () => {
    animation.pause();
  };

  const resumeMarquee = () => {
    animation.play();
  };

  return (
    <div className="bg-black flex flex-col justify-center items-center content-center md:flex-row">
      {location !== "/" && (
        <Link
          href="/"
          className="w-full uppercase cursor-pointer text-black text-xs lg:text-sm 3xl:text-lg 4xl:text-3xl 4xl:py-2 bg-white text-center md:bg-black md:text-white py-1 px-3 inline-flex items-center justify-center whitespace-nowrap"
        >
          <span className="border-b border-b-transparent hover:border-b-black md:hover:border-b-white transition-all duration-200">
            Visit Brand Website
          </span>
        </Link>
      )}
      <div
        onMouseOver={pauseMarquee}
        onMouseOut={resumeMarquee}
        className=" max-w-[95%] flex whitespace-nowrap overflow-hidden py-1 text-white tracking-widest select-none "
      >
        <span
          ref={marqueeRef1}
          className="inline-block text-xs lg:text-sm 3xl:text-lg 4xl:text-3xl 4xl:py-2"
        >
          We Ship Worldwide | Free Shipping Across India. For further details,
          Please call:{" "}
          <Link href="tel:919884039111" className="text-white no-underline">
            +91 9884039111{" "}
          </Link>{" "}
          | We design, manufacture &amp; retail jewellery using NATURAL DIAMONDS
          only | All our Jewels are BIS Hallmarked &amp; Diamonds are ethically
          sourced &amp; certified by world-renowned Gemological Institutes.
        </span>
        <span
          ref={marqueeRef2}
          className="inline-block text-xs lg:text-sm 3xl:text-lg 4xl:text-3xl 4xl:py-2"
        >
          We Ship Worldwide | Free Shipping Across India. For further details,
          Please call:{" "}
          <Link href="tel:919884039111" className="text-white no-underline">
            +91 9884039111{" "}
          </Link>{" "}
          | We design, manufacture &amp; retail jewellery using NATURAL DIAMONDS
          only | All our Jewels are BIS Hallmarked &amp; Diamonds are ethically
          sourced &amp; certified by world-renowned Gemological Institutes.
        </span>
        <span
          ref={marqueeRef3}
          className="inline-block text-xs lg:text-sm 3xl:text-lg 4xl:text-3xl 4xl:py-2"
        >
          We Ship Worldwide | Free Shipping Across India. For further details,
          Please call:{" "}
          <Link href="tel:919884039111" className="text-white no-underline">
            +91 9884039111{" "}
          </Link>{" "}
          | We design, manufacture &amp; retail jewellery using NATURAL DIAMONDS
          only | All our Jewels are BIS Hallmarked &amp; Diamonds are ethically
          sourced &amp; certified by world-renowned Gemological Institutes.
        </span>
      </div>
    </div>
  );
};

export default Marquee;

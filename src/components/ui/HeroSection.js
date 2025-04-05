"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {

  const dotsRef = useRef([])

  useGSAP(() => {
    gsap.fromTo(
      dotsRef.current,
      { y: 0 },
      {
        y: -10,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
        ease: "power1.inOut",
        duration: 0.6,
      }
    );
  }, []);
  return (
    <>
        <video
          className=" sm:hidden block w-full h-full object-cover min-h-screen"
          muted
          autoPlay
          loop
          playsInline
          src='/assets/videos/gulz vertical.mp4'
        ></video>

        <video
          className="hidden sm:block w-full h-full object-cover min-h-screen"
          muted
          autoPlay
          loop
          playsInline
          src='/assets/videos/gulz wide.mp4'

          
        ></video>

<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
  <h1 className="uppercase text-lg font-gothic tracking-wide mb-3 cursor-pointer relative group ">
  Explore
  <span className="absolute bottom-0.5 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
</h1>
    <div className="flex flex-col items-center gap-2">
          {[0, 1, 2].map((_, index) => (
            <span
              key={index}
              ref={(el) => (dotsRef.current[index] = el)}
              className="w-1.5 h-1.5 rounded-full bg-white"
            ></span>
          ))}
        </div>
  </div>
      </>
  );
};

export default HeroSection;
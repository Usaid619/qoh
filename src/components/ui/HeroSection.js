"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
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
      </>
  );
};

export default HeroSection;
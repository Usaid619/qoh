"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
    });

    const handleScroll = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(handleScroll);
    };

    requestAnimationFrame(handleScroll);

    return () => {
      lenis.destroy();
    };
  });
};

export default useLenis;

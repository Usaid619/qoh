"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const useMarquee = (setAnimation, marqueeRef1, marqueeRef2, marqueeRef3) => {
  useGSAP(() => {
    setAnimation(
      gsap.to([marqueeRef1.current, marqueeRef2.current, marqueeRef3.current], {
        xPercent: -100,
        duration: 30,
        repeat: -1,
        ease: "linear",
      }),
    );
  }, []);
};

export default useMarquee;

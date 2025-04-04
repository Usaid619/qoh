"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const useHamburgerAnimation = (hamburgerOpen, hamburgerRef) => {
  useGSAP(() => {
    if (hamburgerOpen) {
      gsap.fromTo(
        hamburgerRef.current,
        {
          scaleY: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          duration: 0.3,
          ease: "power2.out",
        },
      );
    }
  }, [hamburgerOpen]);
};

export default useHamburgerAnimation;

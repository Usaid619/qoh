"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const useHamburgerAnimation = (hamburgerOpen, hamburgerRef) => {
  useGSAP(() => {
    if (!hamburgerRef.current) return;

    // Animate in or out based on the state
    gsap.to(hamburgerRef.current, {
      x: hamburgerOpen ? 0 : "-100%",
      duration: 0.4,
      ease: "power2.inOut",
    });
  }, [hamburgerOpen]);
};

export default useHamburgerAnimation;

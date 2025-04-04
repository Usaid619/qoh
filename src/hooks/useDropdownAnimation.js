"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const useDropdownAnimation = (dropdownOpen, dropdownRef) => {
  useGSAP(() => {
    if (dropdownOpen && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        {
          scaleY: 0,
          opacity: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
      );
    } else{
      gsap.fromTo(
        dropdownRef.current,
        {
          scaleY: 1,
         
        },
        {
          scaleY: 0,
          opacity: 0,
          duration: 0.5,
          transformOrigin: "top",
          ease: "power2.out",
        },
      );
    }
  }, [dropdownOpen]);
};

export default useDropdownAnimation;

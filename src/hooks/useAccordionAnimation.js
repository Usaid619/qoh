// 'use client'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const useAccordionAnimation = (isOpen, contentRef) => {
  useGSAP(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);
};

export default useAccordionAnimation;

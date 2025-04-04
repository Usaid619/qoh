"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const useSearchAnimation = (searchbtn, searchDropdownRef) => {
  useGSAP(() => {
    if (searchbtn && searchDropdownRef.current) {
      gsap.set(searchDropdownRef.current,{
        yPercent:-100,
        opacity:1
      })
      gsap.to(searchDropdownRef.current,
       {
        yPercent:0,
        duration: 0.4,
        ease:"power1.inOut"
      })
    } else{
      gsap.to(searchDropdownRef.current, {
        yPercent: -100, 
        duration: 0.4,
        ease:"power1.inOut"
      });
    }
  }, [searchbtn]);
};

export default useSearchAnimation;
"use client";

import { useGSAP } from "@gsap/react";

const lineHeight = 9.2;

const useHamburgerSvg = (
  hamburgerTimeline,
  topLine,
  middleLine,
  bottomLine,
) => {
  useGSAP(() => {
    hamburgerTimeline.current
      .to(
        topLine.current,
        {
          duration: 0.1,
          y: lineHeight,
        },
        "start",
      )
      .to(
        bottomLine.current,
        {
          duration: 0.1,
          y: -lineHeight,
        },
        "start",
      )
      .to(
        middleLine.current,
        {
          duration: 0.1,
          opacity: 0,
        },
        "start",
      )
      .to(
        topLine.current,
        {
          rotate: 45,
          duration: 0.1,
          transformOrigin: "50% 50%",
        },
        "cross",
      )
      .to(
        bottomLine.current,
        {
          rotate: -45,
          duration: 0.1,
          transformOrigin: "50% 50%",
        },
        "cross",
      );
  }, []);
};

export default useHamburgerSvg;

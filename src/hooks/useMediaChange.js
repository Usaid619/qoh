"use client";

import { useEffect } from "react";

const useMediaChange = (
  hamburgerTimeline,
  setHamburgerOpen,
  setDropdownOpen,
) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1024px)");
    const mobileQuery = window.matchMedia("(max-width: 1023px)");

    const handleMediaChange = (e) => {
      if (e.matches) {
        hamburgerTimeline.current.reverse();
        setHamburgerOpen(false);
        setDropdownOpen(false);
      }
    };

    if (mediaQuery.matches) {
      setHamburgerOpen(false);
    }
    if (mobileQuery.matches) {
      setDropdownOpen(false);
    }

    mediaQuery.addEventListener("change", handleMediaChange);
    mobileQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      mobileQuery.removeEventListener("change", handleMediaChange);
    };
  }, [setHamburgerOpen, setDropdownOpen]);
};

export default useMediaChange;

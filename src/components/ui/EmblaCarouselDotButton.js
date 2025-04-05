// EmblaCarouselDotButton.js
"use client";

import React, { useCallback, useEffect, useState } from "react";

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [animationState, setAnimationState] = useState(0);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  // Animation for the three dots
  useEffect(() => {
    let animationInterval = setInterval(() => {
      setAnimationState((prev) => (prev + 1) % 6); // 6 states for the full animation cycle
    }, 400);

    return () => clearInterval(animationInterval);
  }, []);

  // Helper function to determine dot positions based on animation state
  const getDotTransform = (dotIndex) => {
    // Animation sequence for three dots
    const positions = [
      // State 0: All dots in neutral position
      [0, 0, 0],
      // State 1: First dot moves forward
      [10, 0, 0],
      // State 2: Second dot moves forward
      [10, 10, 0],
      // State 3: Third dot moves forward
      [10, 10, 10],
      // State 4: First dot moves back
      [0, 10, 10],
      // State 5: Second dot moves back
      [0, 0, 10],
      // Then back to state 0 where third dot moves back
    ];

    // Always animate all three dots
    return positions[animationState][dotIndex] || 0;
  };

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
    getDotTransform,
    animationState,
  };
};

export const DotButton = (props) => {
  const { children, dotIndex, transform, ...restProps } = props;

  return (
    <div
      style={{
        width: "4px", // Increased size for visibility
        height: "4px", // Increased size for visibility
        backgroundColor: props.className?.includes("bg-black")
          ? "#000000"
          : "transparent",
        transform: `translateX(${transform}px)`,
        transition: "transform 0.3s ease-in-out",
        borderRadius: "50%", // Ensure rounded dots
        display: "inline-block", // Ensure visibility
        border: "1px solid black", // Ensure border is visible
        margin: "0 4px", // Add spacing
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};

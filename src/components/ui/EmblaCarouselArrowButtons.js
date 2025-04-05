"use client";

import React, { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    // Scroll one slide at a time
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    // Scroll one slide at a time
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, className, ...restProps } = props;

  // Style based on layout requirements
  const buttonStyle = {
    width: "31px",
    height: "31px",
    top: "2336px",
    left: "645px",
    borderRadius: "0.5px",
    transform: "rotate(-180deg)",
  };

  return (
    <button
      name="prevButton"
      className={`
        embla__button embla__button--prev
        flex items-center justify-center
        border-2 border-black
        ${
          props.disabled
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-white cursor-pointer"
        }
        ${className || ""}
      `}
      type="button"
      style={buttonStyle}
      {...restProps}
    >
      <svg
        className="embla__button__svg"
        viewBox="0 0 532 532"
        width="16"
        height="16"
      >
        <path
          fill={props.disabled ? "#666666" : "currentColor"}
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, className, ...restProps } = props;

  // Style based on layout requirements but without rotation
  const buttonStyle = {
    width: "31px",
    height: "31px",
    top: "2336px",
    left: "645px",
    borderRadius: "0.5px",
  };

  return (
    <button
      name="nextButton"
      className={`
        embla__button embla__button--next
        flex items-center justify-center
        border-2 border-black
        ${
          props.disabled
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-white cursor-pointer"
        }
        ${className || ""}
      `}
      type="button"
      style={buttonStyle}
      {...restProps}
    >
      <svg
        className="embla__button__svg"
        viewBox="0 0 532 532"
        width="16"
        height="16"
      >
        <path
          fill={props.disabled ? "#666666" : "currentColor"}
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};

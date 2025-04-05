"use client";

import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

const BBCCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    slidesToScroll: 1, // Set to scroll 1 slide at a time
    loop: false,
  });

  const { selectedIndex, getDotTransform } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla mt-2 flex flex-col gap-4 w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex -mx-3">
          {slides.map((slide, index) => (
            <Link
              href={`/${slide?.name?.toLowerCase().replaceAll(" ", "-")}` || "#"}
              key={slide?._id || index}
              className="relative px-3 w-full md:w-1/3 flex-shrink-0 overflow-hidden group"
            >
              <div className="overflow-hidden">
                <Image
                  width={1536}
                  height={1536}
                  alt="description"
                  loading="eager"
                  className="h-full w-full object-cover object-center block transition-transform duration-500 ease-in-out group-hover:scale-110"
                  src={slide?.image?.url || "/"}
                />
              </div>
              <h2
                className="uppercase text-center absolute bottom-0 left-3 right-3 text-2xl tracking-widest text-black bg-white/70 bg-opacity-60 py-3 px-4"
      
              >
                {slide?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        {/* Updated navigation controls to be centered like in the second image */}
        <div className="embla__buttons flex items-center justify-center gap-4 px-2">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="flex items-center justify-center h-8 w-8"
          />

          <div className="embla__dots flex items-center justify-center space-x-4">
            {/* Static dots with animation */}
            <DotButton
              key={0}
              dotIndex={0}
              transform={getDotTransform(0)}
              className={`embla__dot h-2 w-2 lg:h-2 lg:w-2 3xl:h-3 3xl:w-3 4xl:h-4 4xl:w-4 border border-black rounded-full ${
                0 === selectedIndex % 3 ? "bg-black" : "bg-black"
              }`}
            />
            <DotButton
              key={1}
              dotIndex={1}
              transform={getDotTransform(1)}
              className={`embla__dot h-2 w-2 lg:h-2 lg:w-2 3xl:h-3 3xl:w-3 4xl:h-4 4xl:w-4 border border-black rounded-full ${
                1 === selectedIndex % 3 ? "bg-black" : "bg-black"
              }`}
            />
            <DotButton
              key={2}
              dotIndex={2}
              transform={getDotTransform(2)}
              className={`embla__dot h-2 w-2 lg:h-2 lg:w-2 3xl:h-3 3xl:w-3 4xl:h-4 4xl:w-4 border border-black rounded-full ${
                2 === selectedIndex % 3 ? "bg-black" : "bg-black"
              }`}
            />
          </div>

          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="flex items-center justify-center h-8 w-8"
          />
        </div>
      </div>
    </div>
  );
};

export default BBCCarousel;

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

const BBCCarousel = ({slides}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    slidesToScroll: "auto",
    loop:true
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    // Adjust to slide 3 images per slide
    <div className="embla mt-2 flex flex-col gap-4 w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex -mx-3">
        {slides.map((slide, index) => (
            <Link
            href={slide?.link || "#"}
              key={slide?._id || index}
              className="relative px-3 w-full md:w-1/3 flex-shrink-0 group"
            >
              <Image
                width={1536}
                height={1536}
                alt="description"
                loading="eager"
                className="h-full w-full object-cover object-center block "
                src={slide?.imageUrl}
              />
            
            <h2 className="uppercase text-center absolute bottom-0 left-3 right-3 text-white bg-black/20 py-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[16px] lg:text-[24px]">
                {slide?.title}
              </h2>
              
            </Link>
          ))}
        </div>
      </div>
      <div className={"embla__controls"}>
        <div className="embla__buttons md:justify-center">
          <PrevButton
            className="flex items-center md:justify-center justify-start h-16 w-16 3xl:h-20 3xl:w-20 4xl:h-32 4xl:w-32"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot h-2 w-2 3xl:h-3 3xl:w-3 4xl:h-4 4xl:w-4 border border-black rounded-full".concat(
                  index === selectedIndex
                    ? "embla__dot--selected h-2 w-9 3xl:h-3 3xl:w-14 4xl:h-4 4xl:w-[76px]"
                    : "",
                )}
              />
            ))}
          </div>
          <NextButton
            className="flex items-center md:justify-center justify-end h-16 w-16 3xl:h-20 3xl:w-20 4xl:h-32 4xl:w-32"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default BBCCarousel;

"use client";

import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Logic to be written
const CertificationMarquee = ({ options }) => {
  const location = usePathname();
  const [emblaRef, emblaApi] = useEmblaCarousel(options,[
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      startDelay: 0,
      speed: 1.4,
    }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const slides=[{
    imageUrl:"/assets/images/certifications/certification-1.png"},
    {imageUrl:"/assets/images/certifications/certification-2.png"},
    {imageUrl:"/assets/images/certifications/certification-3.png"},
    {imageUrl:"/assets/images/certifications/certification-4.png"},
    {imageUrl:"/assets/images/certifications/certification-5.png"},
    {imageUrl:"/assets/images/certifications/certification-6.png"}]

  return (
    <div className="cursor-grab embla w-full">
      <div className="embla__viewport overflow-hidden relative" ref={emblaRef}>
        <div className=" embla__container flex">
          {slides.map((slide, index) => (
            <div
              className=" flex-shrink-0 flex-grow-0 basis-2/4 md:basis-1/4"
              key={index}
            >
              <div className="relative h-14 w-full xs:h-[70px] xs:w-full 3xl:h-[90px] 3xl:w-full 4xl:h-36 4xl:w-full">
                <Image
              fill
              className="object-contain"
              alt="certification"
              src={slide.imageUrl} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationMarquee;

"use client";
import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";
import { data } from 'autoprefixer';
const BrandsPromise = () => {
  const data = {
    items: [
      {
        image: "/assets/Khwaahish-Store-img.webp",
        title: "Legacy of Khwaahish ",
        description: "20+ Years of Crafting Unforgettable Jewellery—Blending Tradition with Modern Flai ", 
        className:'flex-row'
      },
      {
        image: "/assets/Curators-Tale-with-watermark-img.webp",
        title: "Curator's Tale",
        description: "Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you.Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.",
        className:'flex-row'
      },

    ],
  };

  const data2 = {
    list: [
      {
        image: "/assets/promiseicon/1742984055942_325190_Promise-Sec-Icons-1.png",
        title: "BIS Hallmarked",
      },
      {
        image: "/assets/promiseicon/1742984154353_95542_Promise-Sec-Icons-2.png",
        title: "Assured time maintanance",
      },
      {
        image: "/assets/promiseicon/1742984221431_901608_Promise-Sec-Icons-3.png",
        title: "Life time Exchange",
      },
      {
        image: "/assets/promiseicon/1742984273264_14761_Promise-Sec-Icons-4.png",
        title: "Free 1 year warranty",
      },
      {
        image: "/assets/promiseicon/1742984342416_505983_Promise-Sec-Icons-5.png",
        title: "Different by Design Unique designs with a World",
      },
      {
        image: "/assets/promiseicon/1742984389102_309064_Promise-Sec-Icons-6.png",
        title: "0% Deduction old Gold exchange",
      },
      {
        image: "/assets/promiseicon/1742984450384_339793_Promise-Sec-Icons-7.png",
        title: "Free and insured shipping across India",
      },
      {
        image: "/assets/promiseicon/1742984498841_972356_Promise-Sec-Icons-8.png",
        title: "Personalized Shopping Experience",
      },
      {
        image: "/assets/promiseicon/1743067170250_651289_Promise-Sec-Icons-9.webp",
        title: "“Natural Diamonds” Certification by International Gemological Laboratories",
      },
    ],
    title: "The Brand Promise",
    description: "Pure, Natural Diamonds. Designed to Reflect the Real You.",
  };



  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: false, align: 'center', slidesToScroll: 1  },
    [AutoPlay({ delay: 10000, stopOnInteraction: false })],
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  const renderSlide = (
    src,
    alt,
    title,
    description,
    // additionalDescription = "",
    key,
    className,
  ) => (
    <div key={key} className="embla__slide flex-[0_0_70%] min-w-0 mx-2 ">
      <div className=" p-2">

        <div className={`flex flex-col md:${className} md:flex bg-neutral-100 w-[80%] mx-auto`}>
          <div className="w-full md:w-2/3 relative h-[300px] sm:h-[400px] md:h-[540px]  ">
            <Image
              src={src}
              alt={alt}
              fill
              priority={alt === "Slide 1"}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-8">
            <h3 className="text-2xl font-gothic md:text-start text-center mb-4 tracking-widest md:px-3 leading-[1.8]">
              {title}
            </h3>
            <p className="text-gray-500 font-gothic md:text-start text-center typo-body tracking-widest leading-[1.7] md:px-2">
              {description}
            </p>
            {/* {additionalDescription && (

            <p className="text-gray-500 font-gothic typo-body tracking-wider leading-7 text-center mt-5">
              {additionalDescription}
            </p>
          )} */}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPromiseIcon = (index, icon, text, isLarge = false) => (
    <div
      key={`promise-icon-${index}`}
      className={`border-[0.0005rem] border-gray-300 ${index % 2 ? "bg-neutral-100" : "bg-white"} flex flex-col items-center justify-center`}
    >
      <Image
        src={icon}
        alt={`Icon ${index + 1}`}
        width={isLarge ? 112 : 40}
        height={isLarge ? 36 : 40}
      />
      <p className="text-xs mt-2 px-6">{text}</p>
    </div>
  );

  return (
    <section className=" bg-gray-100 w-full h-full pb-5 font-gothic">
      <div className="flex flex-col justify-center items-center my-7 gap-5">


        <h1 className="uppercase text-2xl lg:text-4xl tracking-wide font-medium text-center">The Brand&apos;s Promise</h1>
        <p className="text-[16px] text-center"> Pure,Natural diamonds. Designed to reflect the real you</p>

      </div>
      <div className="">

        <div className="relative">
          {/* Desktop version */}
          <div className=" lg:flex-col gap-6 lg:flex">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex gap-5 hover:cursor-grab active:cursor-grabbing">
                {data?.items?.slice(0,1).map((slide, index) => (
                  renderSlide(
                    slide.image,
                    slide.title,
                    slide.title,
                    slide.description,
                    `slide-${index}`,
                    slide.className,
                  )
                ))}

                <div className="embla__slide flex-[0_0_100%] min-w-0">
                  <div className="flex flex-col md:flex-row items-center md:w-[50%] bg-white md:py-0 py-4 h-auto md:h-full md:justify-center justify-start text-center mx-auto">
                    <div className="grid grid-cols-3 gap-x-4 gap-y-0 w-[95%] md:h-[95%] h-[40%]">
                      {data2?.list?.map((hallmark, index) => (
                        <div
                          key={index}
                          className={`${index % 2 == 0 ? "bg-gray-200" : "bg-[#F7F7F7]"} flex flex-col justify-center items-center md:p-6 p-1 text-center border border-gray-200 border-solid flex-1 basis-1/2 md:h-auto h-[140px]
      gap-0 md:gap-4 
      `}
                        >
                          <img
                            className="object-contain object-center
        md:w-2/3
        h-[30px] w-20
        sm:h-10 sm:w-20
        md:h-[50px]
        3xl:w-24 3xl:h-14
        4xl:w-32 4xl:h-24
        filter grayscale brightness-0
        "
                            src={hallmark.image}
                            alt={hallmark.title}
                          />
                          <span
                            className="text-center md:text-md text-[11px] text-black
        typo-nano
        "
                          >
                            {hallmark.title}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {data?.items?.slice(1,2).map((slide, index) => (
                  renderSlide(
                    slide.image,
                    slide.title,
                    slide.title,
                    slide.description,
                    `slide-${index}`,
                    slide.className,
                  )
                ))}

              </div>
            </div>

            {/* <div className="left-0 right-0 flex justify-center items-center space-x-1 z-10">
              <button
                name="prevSlide"
                className="w-8 h-8"
                onClick={scrollPrev}
                disabled={activeIndex === 0}
              >
                <Image
                  src="/assets/back.png"
                  alt="Previous"
                  width={20}
                  height={20}
                  className={`${activeIndex === 0 ? "opacity-100" : ""} cursor-pointer`}
                />
              </button>
              {[...Array(len)].map((_, index) => (
                <button
                  name="dots"
                  key={`dot-${index}`}
                  className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-7 bg-black" : "w-2 bg-gray-900"
                    }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              <button
                name="nextSlide"
                className="w-8 h-8"
                onClick={scrollNext}
                disabled={activeIndex === len}
              >
                <Image
                  src="/assets/next.png"
                  alt="Next"
                  width={20}
                  height={20}
                  className={`${activeIndex === 0 ? "opacity-100" : ""} cursor-pointer`}
                />
              </button>
            </div> */}
          </div>

          {/* Mobile version */}
          {/* <div className="lg:hidden flex flex-col gap-10">
            {data?.items?.map((slide, index) => (
              <div key={index} className="flex flex-col items-center bg-neutral-100 shadow-md w-[93%] justify-center text-center mx-auto">
                <div className="relative w-full h-[280px] sm:h-[390px] md:h-[530px]">
                  <Image
                    src={slide?.image}
                    alt={slide?.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1026px) 93vw"
                  />
                </div>
                <div className="w-full p-4 flex flex-col ~gap-4/8 sm:p-6 text-center">
                  <h3 className="text-[30px] text-4xl mb-2 tracking-widest text-center font-bigilla">
                    {slide?.title}
                  </h3>
                  <p className="text-gray-500 typo-body tracking-wider leading-5 font-gothic">
                    {slide?.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex flex-col items-center shadow-md w-[93%] justify-center text-center mx-auto">
              <div className="flex flex-col md:flex-row items-center bg-neutral-100 w-full h-full justify-center text-center mx-auto">
                <div className="flex flex-wrap justify-items-stretch gap-x-0 gap-y-0 w-full h-full items-stretch md:grid md:grid-cols-hallmark">
                  {data2?.list?.map((hallmark, index) => (
                    <div
                      key={index}
                      className={`${index % 2 !== 0 ? "bg-gray-50" : "bg-white"} flex flex-col justify-center items-center md:p-6 p-5 text-center border border-gray-200 border-solid flex-1 basis-1/2
              gap-2 md:gap-4
              `}
                    >
                      <img
                        className="object-contain object-center
                 h-[30px] w-20
                 sm:h-10 sm:w-20
                 md:w-20 md:h-[50px]
                 3xl:w-24 3xl:h-14
                 4xl:w-32 4xl:h-24
                "
                        src={hallmark.image}
                        alt={hallmark.title}
                      />
                      <span
                        className="text-center text-black
                typo-nano
                
              "
                      >
                        {hallmark.title}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-full md:w-1/3 p-4 md:p-8">
                  <h3 className="text-[30px] text-4xl mb-2 tracking-widest text-center font-bigilla">
                    {data2?.title}
                  </h3>
                  <p className="text-gray-500 typo-body tracking-wider leading-[1.7] text-center font-gothic md:mt-5">
                    {data2?.description}
                  </p>
                </div>
              </div>
              {/* <div className="w-full p-4 flex flex-col ~gap-4/8 text-2xl sm:p-6 text-center">
                <h3 className="text-2xl mb-3 font-medium tracking-wider leading-tight font-bigilla">
                  The Brand Promise
                </h3>
                <p className="text-gray-500 typo-body tracking-wider leading-5 font-gothic">
                  Pure, Natural Diamonds. Designed to Reflect the Real You.
                </p>
              </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};


export default BrandsPromise

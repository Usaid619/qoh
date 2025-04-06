"use client";


import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";


import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import BrandPromise2 from "./BrandPromise2";
import Philosophycarousel from "./Philosophycarousel";

const BrandsPromise = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 }, [Autoplay()])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const data = [
    {
      image: "/img/fina1.svg",
      title: "Curator's Tale ",
      description: "With two decades of excellence behind Chennai’s most cherished diamond jewellery brand — Khwaahish, we set forth to redefine the meaning of affordable luxury.  ",
      description2: "Queen of Hearts is our latest pursuit — a refined destination for the modern woman to discover jewellery that is precious, aspirational, yet accessible.  ",

    },
    {
      image: "/img/Browse by brand (1)-cropped (1).svg",
      title: "Design Philosophy",
      description: " We celebrate creativity and boldness in design, pushing the boundaries of what jewellery can be. Our design team embraces innovation to create jewellery that feels fresh and exciting-we offer pieces that are versatile, fun and irresistibly chic. ",
      description2: "QOH is where the art of jewellery meets individuality, allowing our customers to discover something they can call their own. ",
    },
  ]

  const data2 = {
    list: [
      {
        image: "/assets/promiseicon/1742984055942_325190_Promise-Sec-Icons-1.png",
        title: "BIS Hallmarked",
      },
      // {
      //   image: "/assets/promiseicon/1742984154353_95542_Promise-Sec-Icons-2.png",
      //   title: "Assured time maintanance",
      // },
      {
        image: "/assets/promiseicon/1742984221431_901608_Promise-Sec-Icons-3.png",
        title: "Life time Exchange",
      },
      // {
      //   image: "/assets/promiseicon/1742984273264_14761_Promise-Sec-Icons-4.png",
      //   title: "Free 1 year warranty",
      // },
      {
        image: "/assets/promiseicon/1742984342416_505983_Promise-Sec-Icons-5.png",
        title: "Different by Design ",
      },
      // {
      //   image: "/assets/promiseicon/1742984389102_309064_Promise-Sec-Icons-6.png",
      //   title: "0% Deduction old Gold exchange",
      // },
      // {
      //   image: "/assets/promiseicon/1742984450384_339793_Promise-Sec-Icons-7.png",
      //   title: "Free and insured shipping across India",
      // },
      {
        image: "/assets/promiseicon/1742984498841_972356_Promise-Sec-Icons-8.png",
        title: "Personalized Shopping Experience",
      },
      {
        image: "/assets/Vector.png",
        title: "“Natural Diamonds” ",
      },
      {
        image: "/assets/image 31.png",
        title: " competitive and transparent pricing",
      },
    ],
    title: "The Brand Promise",
    description: "Pure, Natural Diamonds. Designed to Reflect the Real You.",
  };



  return (
    <>
      {/* desktop of curtour card */}
      <div className='md:block hidden w-full'>
        <div className='lg:flex flex flex-col-reverse lg:flex-row w-[90%] mx-auto font-gothic shadow-md border border-gray-200 rounded-[15px]'>
          <div className='lg:w-[35%] flex flex-col px-[23px] gap-2 md:pt-8 md:pb-0 pb-2' >
            <h1 className='md:text-[36px] text-[24px] text-center'>Curator's Tale</h1>
            <p className=" lg:tracking-[3px] px-4  text-center md:text-[14px] text-[12px] lg:leading-[1.5] text-wrap">Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you.
            </p>
            <p className='mt-4 lg:tracking-[3px] px-4 text-center md:text-[14px] text-[12px] lg:leading-[1.5] text-wrap'>Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.</p>
          </div>
          <div className="lg:w-[64%] w-full md:py-[15px] md:px-0 py-4 px-4 " >
            <Image src={data[0].image} alt="Curator's Tale" width="1" height='1' className="md:object-cover object-center w-full md:h-auto  rounded-[15px] " />
          </div>
        </div>
      </div>
      <div className='md:block hidden'>
        <div className='lg:flex lg:flex-row-reverse flex flex-col-reverse w-[90%] mx-auto font-gothic shadow-md border border-gray-200 rounded-[15px]'>
          <div className='lg:w-[35%] flex flex-col md:gap-3 gap-1 px-[23px] pt-4 md:pb-0 pb-2' >
            <h1 className='md:text-[36px] text-[20px]  lg:text-[34px] xl:text-[32px] text-center'>{data[1].title}</h1>
            <p className=" lg:tracking-[3px]  text-center md:text-[14px] text-[12px] lg:leading-[1.5] text-wrap">We celebrate creativity and boldness in design, pushing the boundaries of what jewellery can be. Our design team embraces innovation to create jewellery that feels fresh and exciting – we offer pieces that are versatile, fun and irresistibly chic.
            </p>
            <p className='lg:leading-[1.5] text-center lg:tracking-[3px] md:text-[14px] text-[12px] text-wrap'>QOH is where the art of jewellery meets individuality, allowing our customers to discover something they can call their own.</p>
          </div>
          <div className="lg:w-[64%] lg:py-[15px] py-4 md:px-0 px-4 " >
            <Image src={data[1].image} alt="Curator's Tale" width="1" height='1' className="md:object-cover object-center w-full md:h-auto  rounded-[15px] " />
          </div>
        </div>
      </div>


      {/* mobile of curtour */}
      <div className='md:hidden block w-full'>
      <h1 className="md:text-[40px] mb-3 text-[20px] lg:text-[34px] xl:text-[32px] text-center">
                    {data[0].title}
                  </h1>
        <div className="relative flex flex-col gap-8 md:max-w-6xl max-w-[89%] mx-auto">

          {/* Carousel Wrapper */}
          <div className="overflow-hidden rounded-[15px] border border-gray-200 shadow-md " ref={emblaRef}>
            <div className="flex gap-5">

              <div className="flex-[0_0_100%]">
                <div className="w-full">
                  <Image
                    src={data[0].image}
                    alt={data[0].title}
                    width="1"
                    height="1"
                    className="object-center w-full rounded-[15px]"
                  />
                </div>
              </div>
              
              <div className="flex-[0_0_100%]">
              <div className="lg:w-[35%] flex flex-col px-[2px] gap-[2px] md:pt-8 ">
                  {/* <h1 className="md:text-[40px] mt-3 text-[20px] lg:text-[34px] xl:text-[32px] text-center">
                    {data[0].title}
                  </h1> */}
                  <p className="mt-1 text-center md:text-[14px] text-[11px]  leading-[1.5] text-wrap">
                    {data[0].description}
                  </p>
                  <p className=" text-center lg:tracking-[3px] leading-[1.5] text-[11px] text-wrap">
                    {data[0].description2}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute -left-3 md:-left-6 md:top-[65%] top-[50%] -translate-y-1/2"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
          >
            <FontAwesomeIcon icon={faChevronLeft} className='md:text-4xl text-xl' />
          </button>
          <button
            className="absolute -right-3 md:-right-6 md:top-[65%] top-[50%] -translate-y-1/2"
            onClick={() => emblaApi && emblaApi.scrollNext()}
          >
            <FontAwesomeIcon icon={faChevronRight} className='md:text-4xl text-xl' />
          </button>

        </div>
      </div>

<Philosophycarousel data={data}/>

      {/* Brand Promise */}

      <BrandPromise2 data2={data2} />
    </>
  );
};


export default BrandsPromise

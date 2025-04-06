"use client";


import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";
import { data } from 'autoprefixer';

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


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
      className: 'md:flex-row'

    },
    {
      image: "/img/Browse by brand (1)-cropped (1).svg",
      title: "DESIGN PHILOSoPHY",
      description: " We celebrate creativity and boldness in design, pushing the boundaries of what jewellery can be. Our design team embraces innovation to create jewellery that feels fresh and exciting-we offer pieces that are versatile, fun and irresistibly chic. ",
      description2: "QOH is where the art of jewellery meets individuality, allowing our customers to discover something they can call their own. ",
      className: 'md:flex-row-reverse'

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
        title: "“Natural Diamonds” Certification by International Gemological Laboratories",
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
      {/* <section className=" w-full h-full pb-5 font-gothic glass-effect">
        <div className="flex flex-col justify-center items-center my-7 gap-5 ">
          <h1 className=" uppercase md:text-[30px] text-white text-[18px]">The Brand Promise</h1>
          <p className=" text-white md:text-[16px] text-[14px] text-center md:px-0 px-4">
            Pure,Natural diamonds. Designed to reflect the real you
          </p>

        </div>
        <div className="">

          <div className="relative">
            <div className="flex flex-wrap flex-row items-center md:w-[50%] w-full  py-4 h-auto md:h-full md:justify-center justify-start text-center mx-auto">
              <div className=" flex flex-wrap md:grid-cols-3 md:grid  md:gap-x-4 gap-y-0 w-[95%] md:h-[95%] h-[40%] mx-auto">
                {data2?.list?.map((hallmark, index) => (
                  <div
                    key={index}
                    className={`${index % 2 == 0 ? "bg-gray-200" : "bg-[#F7F7F7]"} flex flex-col justify-center items-center md:p-6 p-1 text-center border md:border-gray-200 border-gray-300 border-solid flex-1 basis-1/2 md:h-auto h-[140px] gap-0 md:gap-4 `}>
                    <img
                      className="object-contain object-center md:w-2/3 h-[30px] w-20 sm:h-10 sm:w-20 md:h-[50px] 3xl:w-24 3xl:h-14 4xl:w-32 4xl:h-24 filter grayscale brightness-0 "
                      src={hallmark.image}
                      alt={hallmark.title}
                    />
                    <span
                      className="text-center text-wrap md:text-md text-[11px] text-black typo-nano ">
                      {hallmark.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div className='block md:hidden'>
      <div className=' -mt-8 flex flex-col gap-8'>
        {data.map((d, i) => (
          <div key={i} className={`md:w-[50%] md:flex flex flex-col justify-center md:px-0 px-[4%] mx-auto ${d.className} rounded-lg md:rounded-none `}>
            <div className=" md:w-[50%] flex-col justify-start items-start rounded-lg md:rounded-none">
              <Image src={d.image} alt="Curator's Tale" width="50" height='25' className=" w-full md:h-[600px] object-cover border md:rounded-tl-lg md:rounded-bl-lg " />
            </div>
            <div className='md:w-[50%] w-full pr-[10px] md:py-[80px] py-4 px-5 md:text-start text-center flex flex-col md:gap-10 gap-7 text-[15px]  border bg-gray-100 rounded-bl-md rounded-br-md md:rounded-tr-lg md:rounded-br-lg shadow-lg'>
              <h1 className='md:text-[25px] text-[30px] uppercase' >{d.title}</h1>
              <p className=" text-center font-normal text-gray-500 


max-w-full text-sm tracking-[1.3px] leading-[1.8] 
lg:max-w-[55%] px-2
3xl:text-xl 3xl:leading-[1.7]
4xl:text-3xl 4xl:leading-[1.7]
">{d.description} </p>
              <p className=" text-center font-normal text-gray-500 


max-w-full text-sm tracking-[1.3px] leading-[1.8] 
lg:max-w-[55%] px-2
3xl:text-xl 3xl:leading-[1.7]
4xl:text-3xl 4xl:leading-[1.7]
">{d.description2}</p>
            </div>
          </div>
        ))}
      </div>
</div> */}

      <div className='lg:flex flex flex-col-reverse lg:flex-row w-[90%] mx-auto font-gothic shadow-md border border-gray-200 rounded-[15px]'>
        <div className='lg:w-[35%] flex flex-col md:gap-7 gap-2 px-[23px] md:pt-8 md:pb-0 pb-2' >
          <h1 className='md:text-[40px] text-[24px] text-center'>Curator&apos;s Tale</h1>
          <p className="lg:tracking-[3px] md:text-start text-center md:text-[14px] text-[12px] lg:leading-[1.5] text-wrap">Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you.
          </p>
          <p className='lg:tracking-[3px] md:text-start text-center md:text-[14px] text-[12px] lg:leading-[1.5] text-wrap'>Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.</p>
        </div>
        <div className="lg:w-[64%] w-full md:py-[15px] md:px-0 py-4 px-4 " >
          <Image src={data[0].image} alt="Curator's Tale" width="1" height='1' className="md:object-cover object-center w-full md:h-auto  rounded-[15px] " />
        </div>
      </div>


      <div className='lg:flex lg:flex-row-reverse flex flex-col-reverse w-[90%] mx-auto font-gothic shadow-md border border-gray-200 rounded-[15px]'>
        <div className='lg:w-[35%] flex flex-col md:gap-7 gap-1 px-[23px] md:pt-8 md:pb-0 pb-2' >
          <h1 className='md:text-[40px] text-[20px] lg:text-[34px] xl:text-[32px] text-center'>DESIGN PHILOSOPHY</h1>
          <p className="lg:tracking-[3px] md:text-start text-center md:text-[14px] text-[12px] lg:leading-[1.5] text-wrap">We celebrate creativity and boldness in design, pushing the boundaries of what jewellery can be. Our design team embraces innovation to create jewellery that feels fresh and exciting – we offer pieces that are versatile, fun and irresistibly chic. 
          </p>
          <p className='lg:leading-[1.5] md:text-start text-center lg:tracking-[3px] md:text-[14px] text-[12px] text-wrap'>QOH is where the art of jewellery meets individuality, allowing our customers to discover something they can call their own.</p>
        </div>
        <div className="lg:w-[64%] lg:py-[15px] py-4 md:px-0 px-4 " >
          <Image src={data[1].image} alt="Curator's Tale" width="1" height='1' className="md:object-cover object-center w-full md:h-auto  rounded-[15px] " />
        </div>
      </div>


      <div className="relative flex flex-col gap-8 md:max-w-6xl max-w-[89%] mx-auto">

        <h2 className="md:text-[38px] text-[24px] font-gothic  tracking-wide text-center">THE BRAND PROMISE</h2>
        <p className="text-gray-500 md:text-[16px] tracking-wide md:px-[15%] px-[2%] text-center">Along with a large range of exciting designs, we have benchmarked the highest quality standards & certifications because we value for your trust & relations and strive to be your favourite jeweller for all occasions. </p>

        {/* Carousel Wrapper */}
        <div className="overflow-hidden rounded-md border border-gray-200 shadow-md p-2 " ref={emblaRef}>
          <div className="flex">
            {data2.list.map((slide, index) => (
              <div className="md:flex-[0_0_20%] flex-[0_0_50%] p-[10px] " key={index}>
                <div className="bg-gray-200 md:rounded-xl rounded-3xl  shadow-md flex flex-col gap-5 h-[200px] justify-center items-center overflow-hidden ">
                  <div className='h-[70%] flex flex-col items-center justify-center'>
                  <img src={slide.image} alt={slide.heading} className="md:w-[80px] w-[65px] object-cover  filter grayscale brightness-0" />
                  </div>
                  <p className="text-center md:text-[14px] text-[12px] h-[30%]">{slide.title}</p>
                  {/* <DotLottieReact
                    src={slide.image}
                    loop
                    autoplay
                  /> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute -left-3 md:-left-6 md:top-[65%] top-[73%]  -translate-y-1/2  "
          onClick={() => emblaApi && emblaApi.scrollPrev()}
        >
          <FontAwesomeIcon icon={faChevronLeft} className='md:text-4xl text-xl' />
        </button>
        <button
          className="absolute -right-3 md:-right-6 md:top-[65%] top-[73%] -translate-y-1/2  "
          onClick={() => emblaApi && emblaApi.scrollNext()}
        >
          <FontAwesomeIcon icon={faChevronRight} className='md:text-4xl text-xl' />
        </button>
      </div>
    </>
  );
};


export default BrandsPromise

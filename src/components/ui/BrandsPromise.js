"use client";
import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";
import { data } from 'autoprefixer';
const BrandsPromise = () => {
  const data = [
    {
      image: "/img/curator's tale image 1.svg",
      title: "Curator's Tale ",
      description: "With two decades of excellence behind Chennai’s most cherished diamond jewellery brand — Khwaahish, we set forth to redefine the meaning of affordable luxury.  ",
      description2: "Queen of Hearts is our latest pursuit — a refined destination for the modern woman to discover jewellery that is precious, aspirational, yet accessible.  ",
      className: 'md:flex-row'

    },
    {
      image: "/img/image 28.svg",
      title: "DESIGN PHILOSPHY",
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



  return (
    <>
      <section className=" w-full h-full pb-5 font-gothic glass-effect">
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
      </section>

<div className='block md:hidden mt-5'>
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
</div>

      <div className='md:block hidden'>

        <div className="font-gothic escape flex lg:pl-[10px] lg:pr-[100px] lg:pt-[50px] pl-[30px] pr-[60px]">
          <div className="w-full lg:flex lg:items-center lg:justify-center gap-4 relative
 before:content-[''] before:w-full lg:before:w-[85%] lg:before:top-[-40px] lg:before:right-0 before:h-full before:border before:border-black before:border-solid before:absolute before:-z-10 before:translate-x-8 lg:before:translate-x-0 ">
            {/* Image */}
            <div className=" flex flex-col  lg:flex-row lg:items-center lg:w-[48%]">
              <h2
                className='self-end relative tracking-[4px] text-xl md:text-[22px] 3xl:text-3xl 4xl:text-5xl my-[10px] lg:my-0 text-gray-600 lg:self-auto lg:-rotate-90 '>
                {data[0].title}
              </h2>
              {/* style :before div */}
              <Image
                width={879}
                height={534}
                className="w-full object-cover"
                alt="curator's thought"
                src={data[0].image} />
            </div>
            {/* Text */}
            <div className="flex flex-col gap-6 3xl:gap-8 py-[30px] pl-[80px] lg:w-[60%] lg:pl-[130px] ">
              <h2
                className='relative tracking-[4px] text-xl md:text-[25px] 3xl:text-3xl 4xl:text-5xl after:content-[""] after:h-[1px] after:w-10 3xl:after:w-14 4xl:after:w-20 after:bg-black after:absolute  after:top-[70%] uppercase'
              >
                {data[0].title}
              </h2>
              <p className="typo-body lg:w-[78%] text-gray-500 leading-[1.7]">
                {data[0].description}
              </p>
              <p className="typo-body lg:w-[78%] text-gray-500 leading-[1.7]">
                {data[0].description2}
              </p>
            </div>
          </div>
        </div>



        <div className="font-gothic escape flex lg:pr-[10px] lg:pl-[100px] lg:pt-[50px] pl-[30px] pr-[60px] mt-10">
          <div className="w-full lg:flex lg:items-center lg:justify-center gap-4 relative before:content-[''] before:w-full lg:before:w-[85%] lg:before:top-[-40px] lg:before:left-0  before:h-full before:border before:border-black before:border-solid before:absolute before:-z-10 before:-translate-x-8 lg:before:translate-x-0 ">
            {/* Text */}
            <div className="flex flex-col gap-6 3xl:gap-8 py-[30px] pl-[80px] lg:w-[60%] lg:pl-[150px]">
              <h2
                className='relative tracking-[4px] text-xl md:text-[25px] 3xl:text-3xl 4xl:text-5xl after:content-[""] after:h-[1px] after:w-10 3xl:after:w-14 4xl:after:w-20 after:bg-black after:absolute  after:top-[70%] uppercase'
              >
                {data[1].title}
              </h2>
              <p className="typo-body lg:w-[78%] text-gray-500 leading-[1.7]">
                {data[1].description}
              </p>
              <p className="typo-body lg:w-[78%] text-gray-500 leading-[1.7]">
                {data[1].description2}
              </p>
            </div>
            {/* Image */}
            <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:w-[48%]">
              <h2
                className='self-end relative tracking-[4px] text-xl md:text-[22px] 3xl:text-3xl 4xl:text-5xl my-[10px] lg:my-0 text-gray-600 lg:self-auto lg:rotate-90 '>
                {data[1].title}
              </h2>
              <Image
                width={879}
                height={534}
                className="w-full object-cover"
                alt="design philosophy"
                src={data[1].image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default BrandsPromise

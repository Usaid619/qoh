'use client'

import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import api from "@/utils/api";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Recommendation = () => {
  const [recommendedList,setRecommendedList]=useState([])
  const pathName = usePathname()

  const getRecommendeds = async()=>{
    try {
      const res = await api.get("/store/eshop/recommended/get-all-recommended")
      const data = await res.data
      setRecommendedList(data)
    } catch (error) {
      console.log(error)
    }
  }

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      align:'center',
      holdDrag: true
    },
    [AutoScroll({ playOnInit: true, speed:1.5 ,stopOnInteraction: false, stopOnMouseEnter:true})]
  );

  useEffect(()=>{
    getRecommendeds()
  },[])

  return (
    <section className=" py-8 w-full font-gothic  font-light " aria-label="Jewelry Recommendations">
      <div className="flex flex-col gap-4 items-center justify-center">
           <h2 className="uppercase text-2xl lg:text-5xl font-medium">
          Browse by Recommendation
        </h2>
        <span className="capitalize text-[16px] md:text-[20px]">Handpicked Favourites, Just For you!</span>
        </div>
      
      <div className=" relative w-full h-[22vh] lg:h-[170px]  md:h-[25vh]  mx-auto mt-6 sm:mt-8 md:mt-10">

        <div className="relative w-full  h-full overflow-hidden bg-gray-100" role="region" aria-label="Jewellery style recommendations carousel">
          
          
          <div className="embla w-full hover:cursor-pointer active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-10  md:gap-28 px-14  sm:px-14 lg:gap-24 md:px-28  lg:mt-8 mt-[35px]">
              {recommendedList?.map((item) => (
                <div
                  key={item?._id}
                  className="flex flex-col justify-center items-center gap-5 flex-shrink-0 "                  
                  role="listitem"
                  aria-label={item?.name}
                >
                  <Link href={`/shop?recommended=${item?.name?.toLowerCase()}`} className="flex  justify-center flex-col items-center">
                    <div className="w-14  h-14 lg:w-[70px] lg:h-[70px]  md:w-[8.2vw] md:h-[8.2vw] rounded-full bg-[#e7e7e7] flex items-center justify-center">
                      <div className=" w-10  h-8 lg:w-[40px] lg:h-[40px] md:w-8  md:h-8 sm:h-8 sm:w-8 relative">
                        <Image 
                          src={item?.image?.url || "/"}
                          alt={item?.name}
                          fill
                          sizes="(max-width: 1024px) 32px, 2.5vw"
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="uppercase text-center text-xs md:text-base tracking-[0.3em] mt-2 text-gray-700">
                      {item?.name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Recommendation;

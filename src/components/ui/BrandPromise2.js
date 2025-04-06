"use client";
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";
import { data } from 'autoprefixer';

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


function BrandPromise2({data2}) {
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
  return (
    <>
    <div className="w-full">
    <div className="relative flex flex-col gap-8 md:max-w-6xl max-w-[89%] mx-auto">

<h2 className="md:text-[38px] text-[24px] font-gothic  tracking-wide text-center">THE BRAND PROMISE</h2>
<p className="text-gray-500 md:text-[16px] tracking-wide md:px-[15%] px-[2%] text-center">Along with a large range of exciting designs, we have benchmarked the highest quality standards & certifications because we value for your trust & relations and strive to be your favourite jeweller for all occasions. </p>

{/* Carousel Wrapper */}
<div className="overflow-hidden rounded-md border border-gray-200 shadow-md p-2 " ref={emblaRef}>
  <div className="flex">
    {data2?.list?.map((slide, index) => (
      <div className="md:flex-[0_0_20%] flex-[0_0_50%] p-[10px] " key={index}>
        <div className="bg-gray-200 md:rounded-xl rounded-3xl  shadow-md flex flex-col gap-5 h-[200px] justify-center items-center overflow-hidden ">
          <div className='h-[70%] flex flex-col items-center justify-center'>
            <img src={slide.image} alt={slide.title} className="md:w-[80px] w-[65px] object-cover  filter grayscale brightness-0" />
          </div>
          <p className="text-center md:text-[14px] text-[12px] h-[30%]">{slide.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Navigation Buttons */}
<button
  className="absolute -left-3 md:-left-6 md:top-[70%] top-[73%]  -translate-y-1/2  "
  onClick={() => emblaApi && emblaApi.scrollPrev()}
>
  <FontAwesomeIcon icon={faChevronLeft} className='md:text-4xl text-xl' />
</button>
<button
  className="absolute -right-3 md:-right-6 md:top-[70%] top-[73%] -translate-y-1/2  "
  onClick={() => emblaApi && emblaApi.scrollNext()}
>
  <FontAwesomeIcon icon={faChevronRight} className='md:text-4xl text-xl' />
</button>
</div>

</div>
    </>
  )
}

export default BrandPromise2
"use client";


import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";


import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


function Philosophycarousel({ data }) {
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
            <div className='md:hidden block w-full'>
                <h1 className="md:text-[40px] mb-3 text-[20px] lg:text-[34px] xl:text-[32px] text-center">
                    {data[1].title}
                </h1>
                <div className="relative flex flex-col gap-8 md:max-w-6xl max-w-[89%] mx-auto">

                    {/* Carousel Wrapper */}
                    <div className="overflow-hidden rounded-[15px] border border-gray-200 shadow-md " ref={emblaRef}>
                        <div className="flex gap-5">

                            <div className="flex-[0_0_100%]">
                                <div className="w-full ">
                                    <Image
                                        src={data[1].image}
                                        alt={data[1].title}
                                        width="1"
                                        height="1"
                                        className="object-center w-full rounded-[15px]"
                                    />
                                </div>
                            </div>

                            <div className="flex-[0_0_100%]">
                            <div className="flex-[0_0_100%]">
                                <div className="lg:w-[35%] flex flex-col gap-1 px-[1px] md:pt-8 ">
                                    {/* <h1 className="md:text-[40px] mt-3 text-[20px] lg:text-[34px] xl:text-[32px] text-center">
                        {data[1].title}
                      </h1> */}
                                    <p className="mt-2 lg:tracking-[3px] text-center text-[10px] leading-[1.4] text-wrap">
                                        {data[1].description}
                                    </p>
                                    <p className="leading-[1.4] text-center lg:tracking-[3px] text-[10px] text-wrap">
                                        {data[1].description2}
                                    </p>
                                </div>
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
        </>
    )
}

export default Philosophycarousel
'use client'
import React from 'react'
import { FaShoppingCart, FaExchangeAlt, FaVideo, FaStar, FaClipboardList } from "react-icons/fa";
import { TbCalendarClock } from "react-icons/tb";
import { DotButton, useDotButton } from "../../components/ui/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../components/ui/EmblaCarouselArrowButtons"
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";


const benefits = [
  { title2: '10+1 ', title: "  MONTHLY INSTALMENT", description: "Purchase your desired jewelry with monthly rewards.", pos: "items-start" },

  { icon: <FaStar size={35} />, title: "REWARD POINTS", description: "Reward Points. Save more. Shop more.", pos: "items-end" },
  { icon: <FaVideo size={35} />, title: "VIDEO SHOPPING", description: "Now shop with us from anywhere.", pos: "items-start" },
  { title: "EXCHANGE ", title4: 'OLD ➝ NEW', description: "Get 100% Buy back on your old gold.", pos: "items-end" },

  { icon: <TbCalendarClock size={35} />, title: "FREE MAINTENANCE WARRANTY", description2: "Relax, enjoy your jewellery! We offer free product maintenance for a year.", pos: "items-start" },

];
const ShoppingBenifit = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
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

    <div className="text-center w-full md:py-12 flex flex-col md:gap-8 gap-4 font-gothic">
      <h2 className="md:text-[38px] text-[24px] font-gothic  tracking-wide ">SHOPPING BENEFITS</h2>
      <p className="text-gray-500 md:text-[16px] text-[14px] tracking-wide md:px-[23%] px-[2%]">Apart from a fabulous range of jewellery designs & a premium shopping experience, we strive to be your favourite jewellers with the added benefits for that extra delight.</p>

      <div className="embla relative mt-2 flex flex-col items-center gap-4 w-full select-none">
      {/* <PrevButton
          className="absolute z-10 top-1/2 -translate-y-1/2 left-14 3xl:left-44 4xl:left-64 md:left-36 h-5 w-5 3xl:h-8 3xl:w-8 4xl:h-10 4xl:w-10"
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <NextButton
          className="absolute z-10 top-1/2 -translate-y-1/2 right-14 3xl:right-44 4xl:right-64 md:right-36 h-5 w-5 3xl:h-8 3xl:w-8 4xl:h-10 4xl:w-10"
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        /> */}

        <div className="embla__viewport border border-gray-200 shadow-md  rounded-full py-5 h-[120px] w-[85%]" ref={emblaRef}>
          <div className="embla__container object-cover cursor-grab -mx-2 ">
            {benefits.map((slide, index) => {
              return (
                <div key={index} className="flex flex-col gap-2 items-center flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] ">
                  <div className='h-[70%] flex flex-col justify-center items-center'>
                    {slide.icon}
                    <p className=' text-2xl'>{slide.title2}</p>
                    <p className=' text-xl'>{slide.title4}</p>
                  </div>
                  <div className='h-[30%] flex flex-col justify-center items-center'>
                    <p className="4xl:text-2xl 3xl:text-xl text-[14px] text-wrap w-[150px]">{slide.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>




      </div>



    </div>
  );
}


export default ShoppingBenifit
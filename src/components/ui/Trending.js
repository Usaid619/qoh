import React from 'react'
import Image from 'next/image'

const Trending = () => {
  return (
    <div className='relative flex flex-col lg:flex-row items-center justify-center lg:gap-36 gap-5 px-6 py-10 w-full'>

<h1 className='lg:hidden uppercase text-2xl lg:text-4xl tracking-wide font-medium'>
          what&apos;s trending?
        </h1>
      {/* Left Image Section */}
      <div className=" relative flex-shrink-0">
        <img
          src="/assets/images/trending.png"
          alt="Trending diamond rings collection"
          className='object-cover w-[430px] h-[490px] rounded-sm'
        />
        <img
        className='lg:block hidden absolute top-[40%] -translate-y-1/2 left-[70%] w-[288px] h-[306px]  rotate-6'
        src='/assets/images/ring.png'
        alt='Floating ring'
      />
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4 lg:gap-9 max-w-xl">
        <h1 className='hidden lg:block uppercase text-2xl lg:text-5xl tracking-wide font-medium'>
          what&apos;s trending?
        </h1>
        <span className=' text-[16px] md:text-lg text-gray-700'>
          Find your wardrobe essential or a new everyday favourite with our array of diamond rings. From classic styles to trendy designs, to dazzling ones and minimalist ones for understated elegance, you will find many to suit your signature style.
        </span>
        <div className='flex justify-center lg:justify-end w-full relative'>
           <button className='lg:mt-12 uppercase text-[16px] border border-gray-300 tracking-wider py-4 px-28  transition-colors duration-300 hover:bg-black hover:text-white'>
          Explore
        </button>
        {/* Floating Ring Image */}
      <img
        className='lg:hidden block absolute top-1/2 -translate-y-1/2 right-2 h-[86px] w-[86px] lg:w-[288px] lg:h-[306px] rotate-1'
        src='/assets/images/ring.png'
        alt='Floating ring'
      />
        </div>
       
      </div>
    </div>
  )
}

export default Trending

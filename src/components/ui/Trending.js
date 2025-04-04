import React from 'react'
import Image from 'next/image'

const Trending = () => {
  return (
    <div className='relative flex flex-col lg:flex-row items-center justify-center lg:gap-44 gap-5 px-6 py-10 w-full'>

<h1 className='lg:hidden uppercase text-2xl lg:text-5xl font-medium'>
          what's trending?
        </h1>
      {/* Left Image Section */}
      <div className="flex-shrink-0">
        <img
          src="/assets/images/trending.png"
          alt="Trending diamond rings collection"
          className='object-cover w-[430px] h-[490px] rounded-sm'
        />
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4 lg:gap-9 max-w-xl">
        <h1 className='hidden lg:block uppercase text-2xl lg:text-5xl font-medium'>
          what's trending?
        </h1>
        <span className=' text-[16px] md:text-[20px] text-gray-700'>
          Find your wardrobe essential or a new everyday favourite with our array of diamond rings. From classic styles to trendy designs, to dazzling ones and minimalist ones for understated elegance, you will find many to suit your signature style.
        </span>
        <button className='lg:self-end lg:mt-12 uppercase text-[16px] border border-gray-300 tracking-wider py-4 px-32'>
          Explore
        </button>
      </div>

      {/* Floating Ring Image */}
      <img
        className='absolute bottom-6 right-1/12 h-[86px] w-[86px] lg:w-[288px] lg:h-[306px] lg:top-[15%] lg:left-[29%] rotate-1'
        src='/assets/images/ring.png'
        alt='Floating ring'
      />
    </div>
  )
}

export default Trending



import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
// import Autoplay from 'embla-carousel-autoplay'

// Logic to be written
const CertificationMarquee = ({slides,options}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true , stopOnInteraction: false, startDelay:0, speed:1.6,})
  ])
  // const [isPlaying, setIsPlaying] = useState(false)

  

  return (
    <div className="cursor-grab embla sm:w-9/12 w-full relative 3xl:py-7">
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="  embla__container">
          {slides.map((slide,index) => (
            <div className=" flex-shrink-0 flex-grow-0 basis-2/4 flex justify-center md:basis-1/4" key={index}>

              <img src={slide.imageUrl} alt='images' className='h-14 sm:h-16' />

            </div>
          ))}
        </div> 
        {/* <div className=" bg-gradient-to-r from-gray-50 from-40% to-gray-100/10 w-2/12  sm:w-1/12 left-0 top-0  absolute inset-0"></div> */}
        {/* <div className=" bg-gradient-to-r from-gray-100/10 to-40% to-gray-50  w-2/12  sm:w-1/12 h-full top-0 right-0  absolute "></div> */}
      </div>
    </div>
  )
}

export default CertificationMarquee

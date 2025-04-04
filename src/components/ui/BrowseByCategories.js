import React from 'react'
import dynamic from 'next/dynamic';
// import { landingSlides } from '@/src/data/constants';
// const DashedText = dynamic(()=> import("@/src/components/ui/DashedText"))
const BBCCarousel = dynamic(() => import("./BBCCarousel"))

const BrowseByCategories = ({data}) => {
   const landingSlides = [
  {
    imageUrl: "/assets/images/model-1.png",
    title:"Diamond Necklace"
  },
  {
    imageUrl: "/assets/images/model-2.png",
    title:"Diamond Necklace"
  },
  {
    imageUrl: "/assets/images/model-3.png",
    title:"Diamond Necklace"
  },
  {
    imageUrl: "/assets/images/model-1.png",
    title:"Diamond Necklace"
  },
  {
    imageUrl: "/assets/images/model-2.png",
    title:"Diamond Necklace"
  },
  {
    imageUrl: "/assets/images/model-3.png",
    title:"Diamond Necklace"
  },
];
  return (
     
     <div className=" md:-mx-[30px] lg:-mx-[57px] 3xl:-mx-[100px] flex flex-col items-center gap-4 w-full">
     {/* <DashedText text={data?.title} /> */}
     <h2 className='uppercase text-2xl lg:text-4xl tracking-wide font-medium'>browse by category</h2>
     <span className='capitalize text-[16px] md:text-[20px]'>find the perfect piece for every ocassion!</span>
     <BBCCarousel slides={landingSlides} />
    
   </div>

  )
}

export default BrowseByCategories

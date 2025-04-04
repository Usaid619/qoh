import BrandsPromise from '@/components/ui/BrandsPromise'
import BrandStore from '@/components/ui/BrandStore'
import BrowseByCategories from '@/components/ui/BrowseByCategories'
import Hallmarks from '@/components/ui/Hallmarks'
import HeroSection from '@/components/ui/HeroSection'
import Pitch from '@/components/ui/Pitch'
import Recommendation from '@/components/ui/Recommendation'
import ShoppingBenifit from '@/components/ui/ShoppingBenifit'
import Styles from '@/components/ui/Styles'
import Trending from '@/components/ui/Trending'
import React from 'react'
import Footer from '@/components/ui/Footer'
import Testimonial from '@/components/ui/Testimonial'

const page = () => {
  return (
    <div className='flex flex-col items-center gap-8 font-gothic select-none'>
      <HeroSection/>
      <Pitch/>
      <Hallmarks/>
      <BrowseByCategories/>
      <Styles/>
      <Recommendation/>
      <Trending/>
      {/* What's Trending */}
      <ShoppingBenifit/>
      <BrandsPromise/>
      <BrandStore/>
      <Testimonial/>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default page
import BrandsPromise from '@/components/ui/BrandsPromise'
import BrandStore from '@/components/ui/BrandStore'
import BrowseByCategories from '@/components/ui/BrowseByCategories'
import Hallmarks from '@/components/ui/Hallmarks'
import HeroSection from '@/components/ui/HeroSection'
import Pitch from '@/components/ui/Pitch'
import ShoppingBenifit from '@/components/ui/ShoppingBenifit'
import Trending from '@/components/ui/Trending'
import React from 'react'
import Testimonial from '@/components/ui/Testimonial'
import BrowseByRecommendation from '@/components/BrowseByRecommendation'
import BrowseByStyle from '@/components/BrowseByStyle'

const page = () => {
  return (
    <div className="flex flex-col items-center gap-8 font-gothic select-none">
      <HeroSection />
      <Pitch />
      <Hallmarks />
      <BrowseByCategories />
      <BrowseByStyle />
      <BrowseByRecommendation />
      <Trending />
      <ShoppingBenifit />
      <BrandsPromise />
      <BrandStore />
      <Testimonial />
    </div>
  );
}

export default page
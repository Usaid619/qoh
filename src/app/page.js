import BrowseByCategories from '@/components/ui/BrowseByCategories'
import Hallmarks from '@/components/ui/Hallmarks'
import HeroSection from '@/components/ui/HeroSection'
import Pitch from '@/components/ui/Pitch'
import Recommendation from '@/components/ui/Recommendation'
import Styles from '@/components/ui/Styles'
import Trending from '@/components/ui/Trending'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <HeroSection/>
      <Pitch/>
      <Hallmarks/>
      <BrowseByCategories/>
      <Styles/>
      <Recommendation/>
      <Trending/>
      {/* What's Trending */}
      {/* Benefits */}
      {/* Promise Carousel */}
      {/* Store */}
      {/* Testimonials */}
      {/* Footer */}
    </div>
  )
}

export default page
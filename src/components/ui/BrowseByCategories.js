"use client"
// BrowseByCategories.js
import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
// import { landingSlides } from '@/src/data/constants';
// const DashedText = dynamic(()=> import("@/src/components/ui/DashedText"))
const BBCCarousel = dynamic(() => import("./BBCCarousel"));

const BrowseByCategories = ({ data }) => {
  const {data:categories}=useSelector((state)=>state.category)
  return (
    <div className=" md:-mx-[30px] lg:-mx-[57px] 3xl:-mx-[100px] flex flex-col items-center gap-4 w-full">
      {/* <DashedText text={data?.title} /> */}
      <h2 className="uppercase text-2xl lg:text-4xl tracking-wide font-medium text-center">
        browse by category
      </h2>
      <span className="text-[16px] text-center">
        Find the perfect piece for every ocassion!
      </span>
      <BBCCarousel slides={categories} />
    </div>
  );
};

export default BrowseByCategories;

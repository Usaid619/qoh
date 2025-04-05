// BrowseByCategories.js
import React from "react";
import dynamic from "next/dynamic";
// import { landingSlides } from '@/src/data/constants';
// const DashedText = dynamic(()=> import("@/src/components/ui/DashedText"))
const BBCCarousel = dynamic(() => import("./BBCCarousel"));

const BrowseByCategories = ({ data }) => {
  const landingSlides = [
    {
      imageUrl: "/assets/images/model-1.png",
      title: "Diamond Rings",
    },
    {
      imageUrl: "/assets/images/model-2.png",
      title: "Diamond Earrings",
    },
    {
      imageUrl: "/assets/images/model-3.png",
      title: "Diamond Necklace",
    },
    {
      imageUrl: "/assets/images/model-1.png",
      title: "Diamond Bracelets",
    },
  ];
  return (
    <div className=" md:-mx-[30px] lg:-mx-[57px] 3xl:-mx-[100px] flex flex-col items-center gap-4 w-full">
      {/* <DashedText text={data?.title} /> */}
      <h2 className="uppercase text-2xl lg:text-4xl tracking-wide font-medium text-center">
        browse by category
      </h2>
      <span className="text-[16px] text-center">
        Find the perfect piece for every ocassion!
      </span>
      <BBCCarousel slides={landingSlides} />
    </div>
  );
};

export default BrowseByCategories;

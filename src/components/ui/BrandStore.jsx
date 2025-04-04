import React from "react";

// Common Components
import DashedText from "@/components/ui/DashedText";
import Image from "next/image";

const BrandStore = () => {

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 3xl:gap-6 4xl:gap-7 justify-center items-center ">
          <DashedText text='The Khwaahish Store' />
          <p
            className="w-full text-center text-[#5b5a5a] text-base 3xl:text-xl 4xl:text-3xl tracking-widest
          "
          >
            Khwaahish Diamond Jewellery, Chennai
          </p>
          <p
            className=" text-center font-normal text-gray-500 
          

          max-w-full text-sm tracking-[1.3px] leading-[1.8] 
          lg:max-w-[75%]
        3xl:text-xl 3xl:leading-[1.7]
         4xl:text-3xl 4xl:leading-[1.7]
          "
          >
            You can visit our store to examine our wide collection or connect with us for Customisations, Video Shopping, Door delivery & Payment options. Our Jewellery range starts from 25k and all our products are BIS Hallmarked Certified Natural Diamonds, authenticated by International Labs.
          </p>
        </div>
      </div>



      <div className="md:flex justify-center w-full h-[620px]  z-20 relative">
        <Image
          src='/assets/1743153040822_286027_khwaahish-inner-view.webp'
          alt="brand store"
          height={1250}
          width={1920}
          className="md:w-1/2 w-full md:h-[550px] h-[300px] object-cover md:absolute bottom-0 left-0"
        />
        <iframe
          title="brand-store-location"
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.0700044617133!2d80.256889!3d13.031214000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4fceee85310a87f!2sKhwaahish%20Diamond%20Jewellery!5e0!3m2!1sen!2sin!4v1637654255510!5m2!1sen!2sin'
          className=" w-full md:h-full h-[300px]"
        ></iframe>
        <div className=" w-full opacity-70 h-[70px] bg-black p-2 absolute top-0 z-10  text-white md:text-lg flex justify-center items-center text-center">Visit our store now to view this collection</div>
        <div className="absolute md:bottom-0 bottom-[50%] z-10 w-full">
          <div className=" md:w-1/2 opacity-80 md:h-[80px] h-[50px] bg-[#BDBDBD] p-2 text-black md:text-3xl text-md flex justify-center items-center text-center">Khwaahish Diamond Jewellery, Chennai</div></div>
      </div>

    </div>
  );
};

export default BrandStore;

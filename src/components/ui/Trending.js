import React from "react";

const Trending = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center lg:gap-36 gap-5 px-6 py-10 w-full">
      <h1 className="lg:hidden uppercase text-2xl lg:text-4xl tracking-wide font-medium  text-center">
        what&apos;s trending?
      </h1>
      {/* Left Image Section */}
      <div className=" relative flex-shrink-0">
        <img
          src="/assets/images/trending.png"
          alt="Trending diamond rings collection"
          className="object-cover w-[430px] h-[490px] rounded-sm"
        />
        <div className="lg:block hidden absolute top-[40%] -translate-y-1/2 left-[70%] w-[288px] h-[306px]">
          <span
            className="absolute inset-0 rounded-full blur-md h-3"
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%)",
              transform: "translateY(230px) scale(0.9)",
              zIndex: 0,
            }}
          ></span>
          <img
            src="/assets/images/ring.png"
            alt="Floating ring"
            className="absolute inset-0 w-full h-full rotate-6 z-10"
          />
        </div>
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4 lg:gap-9 max-w-xl">
        <h1 className="hidden lg:block uppercase text-2xl lg:text-4xl tracking-wide font-medium text-center">
          what&apos;s trending?
        </h1>
        <span className="text-[16px] leading-[1.9] text-gray-700">
          Find your wardrobe essential or a new everyday favourite with our
          array of diamond rings. From classic styles to trendy designs, to
          dazzling ones and minimalist ones for understated elegance, you will
          find many to suit your signature style.
        </span>
        <div className="flex justify-center lg:justify-end w-full relative">
          <button className="relative overflow-hidden group lg:mt-12 uppercase text-[16px] border border-gray-300 tracking-wider py-4 px-28">
            <span className="absolute inset-0 translate-y-full bg-black group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
            <span className="relative z-10 text-gray-800 group-hover:text-white transition-colors duration-500">
              Explore
            </span>
          </button>

          {/* Floating Ring Image */}
          {/* <img
            className="lg:hidden block absolute top-1/2 -translate-y-1/2 right-2 h-[86px] w-[86px] lg:w-[288px] lg:h-[306px] rotate-1"
            src="/assets/images/ring.png"
            alt="Floating ring"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Trending;

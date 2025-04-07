"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import api from "@/utils/api";

const BrowseByRecommendation = () => {
  const [recommendationList, setRecommendationList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch recommendations from API
  const getRecommendations = async () => {
    try {
      setLoading(true);
      const res = await api.get("/store/eshop/recommended/get-all-recommended");
      const data = await res.data;
      setRecommendationList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Setup embla carousel with auto-scroll
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      align: "center",
      holdDrag: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 0.8,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  useEffect(() => {
    getRecommendations();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto overflow-hidden py-4 sm:py-6 px-2 sm:px-4 font-gothic">
      <div className="mb-2 sm:mb-3">
        <h2 className="uppercase text-2xl lg:text-4xl tracking-wide font-medium text-center">
          BROWSE BY RECOMMENDATION
        </h2>
      </div>
      <div className="text-center mb-6 text-sm sm:text-base md:text-xl">
        <span className="text-[16px] text-center">
          Handpicked favourites - Just for you
        </span>
      </div>

      <div className="relative overflow-hidden p-5 bg-gray-100">
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div
            className="embla w-full hover:cursor-pointer active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex gap-10 md:gap-10 px-14 sm:px-14 lg:gap-10 md:px-14">
              {recommendationList.map((item) => (
                <div
                  key={item?._id}
                  className="flex flex-col items-center flex-shrink-0"
                  role="listitem"
                  aria-label={item?.name}
                >
                  <Link
                    href={`/shop?recommended=${item?.name?.toLowerCase()}`}
                    className="flex justify-center flex-col items-center"
                  >
                    <div className="bg-gray-200 rounded-full p-3 sm:p-4 mb-2 sm:mb-3 w-16 h-16 flex items-center justify-center">
                      <div className="w-10 h-8 lg:w-[50px] lg:h-[50px] md:w-8 md:h-8 sm:h-8 sm:w-8 relative">
                        <Image
                          src={item?.image?.url || "/"}
                          alt={item?.name}
                          fill
                          sizes="(max-width: 1024px) 40px, 2.5vw"
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="uppercase text-center text-xs tracking-[0.3em]  text-gray-700">
                      {item?.name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseByRecommendation;

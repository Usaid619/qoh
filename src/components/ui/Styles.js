"use client";
import Link from "next/link";
import { useState, useRef, useEffect, use } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import api from "@/utils/api";
import { usePathname } from "next/navigation";

const Styles = () => {
  const [activeButton, setActiveButton] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const pathName = usePathname()

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      align: "start",
      holdDrag: true,
    },
    [AutoScroll({ playOnInit: true, speed: -1, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const getActiveData = () => {
    categoryList?.map((category) => {
      if (category.name === activeButton) {
        setActiveData(category);
      }
    });
  };

  const getCategoriesAndStyle = async () => {
    try {
      const res = await api.get("/store/eshop/categories/get-all-categories");
      const data = await res.data;
      setCategoryList(data);
      setActiveButton(data[0]?.name);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllStyleData = ()=>{
    const name = activeData?.name?.toLowerCase()
    if(name?.includes("earring")){
      let obj = {url:"/assets/earrings/All-Earrings.avif",name:"All Earrings"}
      return obj
    }else if(name?.includes("bracelet")){
      let obj = {url:"/assets/bracelet/All-Bracelets.avif",name:"All Bracelets"}
      return obj
    }else if(name?.includes("necklace")){
      let obj = {url:"/assets/necklaces/All-Necklaces.avif",name:"All ecklaces"}
      return obj
    }else if(name?.includes("ring")){
      let obj = {url:"/assets/rings/All-Rings.avif",name:"All Rings"}
      return obj
    }
    return null
  }

  useEffect(() => {
    getCategoriesAndStyle();
  }, []);
  useEffect(() => {
    getActiveData();
  }, [activeButton]);

  return (
    <section className="w-full">
      <div className="font-gothic flex flex-col gap-4 py-4 w-full  font-light p-3 md:p-6" aria-label="Recommendations">
        <div className="flex flex-col gap-4 items-center justify-center">
           <h2 className="uppercase text-2xl lg:text-5xl font-medium">
          Browse by Style
        </h2>
        <span className="capitalize text-[16px] md:text-[20px]">Timeless Classics To Modern Trends. All In One Piece!</span>
        </div>
       

        <div className="flex w-full mx-auto px-10 sm:px-10 md:px-12 lg:px-12 space-x-4 gap-1 overflow-x-hidden no-scrollbar justify-center items-center lg:py-0 md:py-0 sm:py-0 py-2 mb-4">
          {categoryList.map((category) => (
            <div key={category._id} onClick={() => setActiveButton(category?.name)} className={` cursor-pointer h-full flex-shrink-0  flex flex-col justify-center items-center rounded-md border border-gray-300 py-1 px-5 shadow ${activeButton === category?.name ? "bg-gray-200 border border-black" : ""}`}>


              <p className="text-amber-950 font-light text-xl">{category?.name.replace("Diamond", "")}</p>
            </div>
          ))}
        </div>

        <div className={`${pathName=== '/' ? 'bg-[#F9F9F9] border border-gray-400' : 'bg-[#fbf6f5] border border-amber-950'} w-full p-4 bg-#f9f4f3 rounded-2xl relative left-1/2 -translate-x-1/2 mt-2 overflow-hidden inset-shadow-xs`} role="tabpanel" id={`${activeButton}-panel`} aria-label={`${activeButton} styles carousel`}>
          <div className="embla hover:cursor-pointer active:cursor-grabbing" ref={emblaRef}>
            <div className="embla__container  flex items-center">
              <div className={` ${getAllStyleData()?.url?"":"hidden"} min-w-0 px-8`}>
                <Link href={`/${activeData?.name?.toLowerCase().replaceAll(" ", "-")}`}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <div className="relative w-20 h-20  md:w-28 md:h-28">
                      <Image src={getAllStyleData()?.url || "/"} alt={`All ${activeData?.name}`} fill sizes="(max-width: 768px) 80px, 112px" className="rounded-full object-cover" draggable="false" />
                    </div>
                    <p className="uppercase text-center  text-xs md:text-sm tracking-[0.4em] text-amber-950">{getAllStyleData()?.name}</p>
                  </div>
                </Link>
              </div>
              {activeData &&
                activeData?.styles?.map((item, index) => (
                  <div key={index} className="embla__slide min-w-0 px-8">
                    <Link href={`/${activeData?.name?.toLowerCase().replaceAll(" ", "-")}?style=${item.name?.toLowerCase().replaceAll(" ", "-")}`}>
                      <div className="flex flex-col justify-center items-center gap-2">
                        <div className="relative w-20 h-20  md:w-28 md:h-28">
                          <Image src={item.image?.url || "/"} alt={item.name} fill sizes="(max-width: 768px) 80px, 112px" className="rounded-full object-cover" draggable="false" />
                        </div>
                        <p className="uppercase text-center  text-xs md:text-sm tracking-[0.4em] text-amber-950">{item.name}</p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Styles;

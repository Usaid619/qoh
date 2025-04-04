"use client";
import Link from "next/link";
import { useState, useRef, useEffect, use } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import api from "@/utils/api";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Styles = () => {
  const [activeButton, setActiveButton] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const pathName = usePathname()

  const [index, setIndex] = useState(0);
  const visibleCount = 4;
  const maxIndex = categoryList.length - visibleCount;

  const handleNext = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

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
    <section className="w-full ">
      <div className="font-gothic flex flex-col gap-4 py-4 w-full  font-light p-3 md:p-6 " aria-label="Recommendations">
        <div className="flex flex-col gap-4 items-center justify-center">
           <h2 className="uppercase text-2xl lg:text-4xl tracking-wide font-medium text-center">
          Browse by Style
        </h2>
        <span className=" text-[16px] md:text-[20px] text-center">Timeless classics to modern trends. All in one piece!</span>
        </div>
       

        <div className="flex items-center justify-center relative w-full px-10">
      {/* Navigation Arrows */}
      <button
  onClick={handlePrev}
  className={`absolute left-0 z-10 top-1/2 -translate-y-1/2 p-2 cursor-pointer flex items-center justify-center transition-opacity duration-300 ${
    index === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
  }`}
  disabled={index === 0}
>
  <FontAwesomeIcon className="w-5 h-5" icon={faChevronLeft} />
</button>
<button
  onClick={handleNext}
  className={`absolute right-0 z-10 top-1/2 -translate-y-1/2 p-2 cursor-pointer flex items-center justify-center transition-opacity duration-300 ${
    index === maxIndex ? 'opacity-0 pointer-events-none' : 'opacity-100'
  }`}
  disabled={index === maxIndex}
>
  <FontAwesomeIcon className="w-5 h-5" icon={faChevronRight} />
</button>

      {/* Main Scroll Container */}
      <div className="overflow-hidden w-full">
        <div
          className="flex items-center flex-nowrap transition-transform duration-300 ease-in-out gap-14"
          style={{ transform: `translateX(-${index * 25}%)` }}
        >
          {categoryList.map((category) => (
            <div
              key={category._id}
              onClick={() => setActiveButton(category?.name)}
              className={`[width:calc((100%-10.5rem)/4)] flex-shrink-0 cursor-pointer h-full flex flex-col justify-center items-center rounded-md border border-gray-300 py-3 px-5 shadow-lg transition-colors duration-300 hover:bg-black hover:text-white ${
                activeButton === category?.name
                  ? "bg-black text-white border border-black"
                  : ""
              }`}
            >
              <p className="font-medium md:text-xl text-sm whitespace-nowrap uppercase">
                {category?.name.replace("Diamond", "")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

        <div className={`${pathName=== '/' ? 'bg-[#F9F9F9] border border-gray-400' : 'bg-[#fbf6f5] border border-amber-950'} w-full p-4 bg-#f9f4f3 rounded-2xl relative left-1/2 -translate-x-1/2 mt-2 overflow-hidden shadow-[inset_0_0px_30px_rgba(0,0,0,0.2)]`} role="tabpanel" id={`${activeButton}-panel`} aria-label={`${activeButton} styles carousel`}>
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
                  <div key={index} className="flex flex-[0_0_20%] min-w-0 px-8">
                    <Link href={`/${activeData?.name?.toLowerCase().replaceAll(" ", "-")}?style=${item.name?.toLowerCase().replaceAll(" ", "-")}`}>
                      <div className="flex flex-col justify-center items-center gap-2 ">
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

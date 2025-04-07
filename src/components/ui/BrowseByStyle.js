"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useSelector } from "react-redux";
import Link from "next/link";

const BrowseByStyle = () => {
  const {data:categoryList} = useSelector((state)=>state.category)
  const [activeCategory, setActiveCategory] = useState("");
  const [activeData, setActiveData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: "keepSnaps",
      align: "start",
      slidesToScroll: 1,
      direction: "backward",
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        direction: "right",
      }),
    ]
  );

  const [categoryPage, setCategoryPage] = useState(0);
  const categoriesPerPage = 4;

  const getVisibleCategories = () => {
    return categoryList.slice(
      categoryPage * categoriesPerPage,
      categoryPage * categoriesPerPage + categoriesPerPage
    );
  };

  const totalPages = Math.ceil((categoryList.length || 0) / categoriesPerPage);

  const getActiveData = () => {
    categoryList?.forEach((category) => {
      if (category?.name === activeCategory) {
        setActiveData(category);
      }
    });
  };


  useEffect(()=>{
    if (categoryList.length > 0 && categoryList[0]) {
      setActiveCategory(categoryList[0]?.name);
      setIsLoading(false)
    }
  },[categoryList])
  useEffect(() => {
    getActiveData();
  }, [activeCategory]);

  const getDisplayItems = () => {
    if (!activeData?.styles) return [];

    let data =  [...activeData.styles].sort((a, b) => {
      const aIsAll = a.itisAllType === true;
      const bIsAll = b.itisAllType === true;
    
      if (aIsAll && !bIsAll) return -1;
      if (!aIsAll && bIsAll) return 1;
      return 0;
    });
    return data;
  };

  const displayItems = getDisplayItems();

  useEffect(() => {
    const visibleCategories = getVisibleCategories();
    const categoryNames = visibleCategories.map((cat) => cat.name);

    if (categoryNames.length > 0 && !categoryNames.includes(activeCategory)) {
      setActiveCategory(categoryNames[0]);
    }
  }, [categoryPage]);

  const ItemCard = ({ item, index }) => (
    <Link href={index===0?`/${activeData?.name?.toLowerCase().replaceAll(" ", "-")}`:`/${activeData?.name?.toLowerCase().replaceAll(" ", "-")}?style=${item.name?.toLowerCase().replaceAll(" ", "-")}`} className="flex-shrink-0 mx-2 w-32 xs:w-32 sm:w-32 md:w-32 lg:w-32 flex flex-col items-center cursor-pointer">
      <div className="relative w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-16 lg:h-16 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center p-1">
          {item.image?.url ? (
            <div className="relative w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20">
              <Image
                src={item.image.url}
                alt={item.name}
                fill
                className="object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-200 rounded-md flex items-center justify-center">
              <span className="text-[10px] text-gray-500">No image</span>
            </div>
          )}
        </div>
      </div>
      <p className="text-center text-[10px] sm:text-xs font-medium w-full truncate mt-1">
        {item.name}
      </p>
    </Link>
  );

  return (
    <section className="w-full max-w-7xl mx-auto overflow-hidden py-4 sm:py-6 px-2 sm:px-4 font-gothic">
      {/* Responsive heading */}
      <div className="mb-2 sm:mb-3">
        <h2 className="uppercase text-2xl lg:text-4xl tracking-wide font-medium text-center">
          BROWSE BY STYLE
        </h2>
      </div>
      <div className="text-center mb-6 text-sm sm:text-base md:text-xl">
        <span className="text-[16px] text-center">
          Timeless Classics To Modern Trends, All In One Place!
        </span>
      </div>

      <div className="relative max-w-full mx-auto mb-6 px-1 sm:px-4">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {getVisibleCategories().map((category) => (
            <button
              key={category._id}
              className={`relative overflow-hidden group flex-1 min-w-[70px] max-w-[130px] h-[35px] sm:h-[35px] border border-gray-300 rounded-[4px] transition-colors duration-300 ${
                activeCategory === category.name
                  ? "text-white border-purple-600 bg-black"
                  : "text-black hover:text-white"
              }`}
              style={{
                padding: "1px 1px",
                borderWidth: "1px",
                fontSize: "12px",
              }}
              onClick={() => setActiveCategory(category.name)}
            >
              {/* Animated background that slides from bottom to top on hover */}
              <div
                className={`absolute inset-0 bg-black transform transition-transform duration-300 ${
                  activeCategory === category.name
                    ? "translate-y-0"
                    : "translate-y-full group-hover:translate-y-0"
                }`}
              />
              <span className="relative z-10 font-medium text-center w-full block text-xs sm:text-sm">
                {category.name.replace("Diamond", "")}
              </span>
            </button>
          ))}

          {/* Next Arrow Button */}
          {totalPages > 1 && (
            <button
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition-colors"
              onClick={() => setCategoryPage((prev) => (prev + 1) % totalPages)}
              aria-label="Next categories"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="bg-gray-50  rounded-xl border border-gray-200 p-3 sm:p-4 shadow-sm max-w-2xl   mx-auto">
        <div className="relative overflow-hidden w-full">
          {isLoading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : displayItems.length > 0 ? (
            <div className="relative w-full">
              <div className="absolute top-0 bottom-0 left-0 w-8 z-10 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
              <div className="absolute top-0 bottom-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>

              {/* Embla carousel for infinite scrolling */}
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {displayItems.length === 1
                    ? [displayItems[0]].map((item,index) => (
                        <ItemCard key={item._id} index={index} item={item} />
                      ))
                    : displayItems.length < 7
                    ? [...displayItems, ...displayItems].map((item, index) => (
                        <ItemCard key={`${item._id}-${index}`} index={index} item={item} />
                      ))
                    : displayItems.map((item,index) => (
                        <ItemCard key={item._id} index={index} item={item} />
                      ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-gray-500">
              No styles available for this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrowseByStyle;

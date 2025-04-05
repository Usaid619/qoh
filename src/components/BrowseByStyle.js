"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import api from "@/utils/api";

const BrowseByStyle = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [activeData, setActiveData] = useState(null);
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // State for category pagination
  const [categoryPage, setCategoryPage] = useState(0);
  const categoriesPerPage = 4; // For mobile screens, show fewer categories

  // Get current page categories
  const getVisibleCategories = () => {
    return categoryList.slice(
      categoryPage * categoriesPerPage,
      categoryPage * categoriesPerPage + categoriesPerPage
    );
  };

  const totalPages = Math.ceil((categoryList.length || 0) / categoriesPerPage);

  // Get Categories data from API
  const getCategoriesAndStyle = async () => {
    try {
      const res = await api.get("/store/eshop/categories/get-all-categories");
      const data = await res.data;
      setCategoryList(data);
      if (data.length > 0) {
        setActiveCategory(data[0]?.name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get active category data
  const getActiveData = () => {
    categoryList?.forEach((category) => {
      if (category.name === activeCategory) {
        setActiveData(category);
      }
    });
  };

  useEffect(() => {
    getCategoriesAndStyle();
  }, []);

  useEffect(() => {
    getActiveData();
  }, [activeCategory, categoryList]);

  // Get display items from API data only
  const getDisplayItems = () => {
    if (!activeData?.styles) return [];

    // Sort items so "All X" items appear first
    return activeData.styles.sort((a, b) => {
      const aIsAll = a.itisAllType === true;
      const bIsAll = b.itisAllType === true;

      if (aIsAll && !bIsAll) return -1;
      if (!aIsAll && bIsAll) return 1;
      return 0;
    });
  };

  const displayItems = getDisplayItems();

  // Infinite scrolling animation without duplicating items
  useEffect(() => {
    if (!displayItems.length || !scrollContainerRef.current) return;

    let animationFrameId;
    const container = scrollContainerRef.current;
    const scrollSpeed = 1; // pixels per frame

    // Animation function for circular scrolling
    const animate = () => {
      if (!isAutoScrolling || !container) return;

      // Get container dimensions
      const containerWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;

      // Only scroll if content is wider than container
      if (scrollWidth > containerWidth) {
        // If we've reached the end, gradually start moving items
        if (container.scrollLeft >= scrollWidth - containerWidth) {
          // Create a smooth transition back to start
          // Move a bit further, then jump back to start
          const currentPosition = container.scrollLeft;

          // Create easing effect for reset
          if (currentPosition > scrollWidth - containerWidth + 10) {
            // Once we're a little past the end, reset to start
            container.scrollLeft = 0;
          } else {
            // Continue scrolling
            container.scrollLeft += scrollSpeed;
          }
        } else {
          // Normal scrolling
          container.scrollLeft += scrollSpeed;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    if (isAutoScrolling) {
      animationFrameId = requestAnimationFrame(animate);
    }

    // Pause/resume on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
      setIsAutoScrolling(false);
    };

    const handleMouseLeave = () => {
      setIsAutoScrolling(true);
      animationFrameId = requestAnimationFrame(animate);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [displayItems, isAutoScrolling]);

  // Reset position when category changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
    setIsAutoScrolling(true);
  }, [activeCategory]);

  // Reset active category if it's not in the current page
  useEffect(() => {
    const visibleCategories = getVisibleCategories();
    const categoryNames = visibleCategories.map((cat) => cat.name);

    if (categoryNames.length > 0 && !categoryNames.includes(activeCategory)) {
      setActiveCategory(categoryNames[0]);
    }
  }, [categoryPage]);

  // Item card component
  const ItemCard = ({ item }) => (
    <div className="flex-shrink-0 mx-1 w-20 sm:w-24 md:w-28 lg:w-60 flex flex-col items-center">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-24 lg:h-24 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center p-1">
          {item.image?.url ? (
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24">
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
    </div>
  );

  return (
    <section className="w-full max-w-7xl mx-auto overflow-hidden py-4 sm:py-6 px-2 sm:px-4 font-gothic">
      {/* Responsive heading */}
      <div className="mb-2 sm:mb-3">
        <h1
          className="text-center text-2xl lg:text-4xl"
        >
          BROWSE BY STYLE
        </h1>
      </div>
      {/* Responsive subtitle */}
      <div className="text-center mb-3 text-sm sm:text-base md:text-xl">
        <p
          className="text-center text-[13px] lg:text-xl" 
         
        >
          Timeless Classics To Modern Trends, All In One Place!
        </p>
      </div>

      {/* Category Buttons - Fixed for small screens */}
      <div className="relative max-w-full mx-auto sm:mb-6 px-1 sm:px-4">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {getVisibleCategories().map((category) => (
            <button
              key={category._id}
              className={`relative overflow-hidden group flex-1 min-w-[70px] max-w-[100px] h-[35px] sm:h-[35px] border border-gray-300 rounded-[4px] transition-colors duration-300 ${
                activeCategory === category.name
                  ? "text-white border-purple-600 bg-black"
                  : "text-black hover:text-white"
              }`}
              style={{
                padding: "1px 1px",
                borderWidth: "1px",
                fontSize: "12px", // Smaller font size for mobile
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

          {/* Next Arrow Button - Responsive size */}
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

      <div className="bg-gray-50 rounded-xl border border-gray-200 p-3 sm:p-4 shadow-sm max-w-5xl mx-auto">
        <div className="relative overflow-hidden w-full">
          {displayItems.length > 0 ? (
            <div className="relative w-full">
              <div className="absolute top-0 bottom-0 left-0 w-8 z-10 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
              <div className="absolute top-0 bottom-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>

              {/* Scroll container for infinite scroll without duplicates */}
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto w-full scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {displayItems.map((item) => (
                  <ItemCard key={item._id} item={item} />
                ))}
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-gray-500">
              Loading styles or no styles available for this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrowseByStyle;

"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import api from "@/src/utils/api";
import dynamic from "next/dynamic";

import { forwardRef, useEffect } from "react";
const Accordion = dynamic(() => import("./Accordion"));
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// import { categories } from "@/src/data/constants";
import { useState } from "react";

const data = [
  // Hamburger
  {
    id: 0,
    name: "JEWELLERY",
    items: [],
  },
  // Main
  {
    id: 1,
    name: "IN STOCK",
    items: [],
  },
];

const HamburgerMenu = forwardRef(
  ({ setHamburgerOpen, hamburgerTimeline }, ref) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [categories, setCategories] = useState(data);

    // const getCategories = async () => {
    //   try {
    //     const res = await api.get("/store/khw/categories/get-all-categories");
    //     const data = await res.data;
    //     const formetedData = data.map((item) => {
    //       if (item.showInNav) {
    //         item.link = `/${item.name.replace(/\s+/g, "-").toLowerCase()}`;
    //         return item;
    //       }
    //     });
    //     setCategories((prevMenu) =>
    //       prevMenu.map((section) =>
    //         section.id === 6 ? { ...section, items: formetedData } : section,
    //       ),
    //     );
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // const getCollections = async () => {
    //   try {
    //     const res = await api.get("/store/khw/collections/get-all-collections");
    //     const data = await res.data;
    //     const collection = data.map((item) => {
    //       if (item.showInCollection) {
    //         item.link =
    //           item.hasHomePage && item.pathOfHomePage
    //             ? item.pathOfHomePage
    //             : `/collection/${item.name.replace(/\s+/g, "-").toLowerCase()}`;
    //         item.name = `${item.name} - ${item.tagline}`;
    //         return item;
    //       }
    //     });

    //     const navItem = data.filter((item) => {
    //       if (item.showInNav) {
    //         item.link = item.hasHomePage && item.pathOfHomePage ? item.pathOfHomePage : `/collection/${item.name.replace(/\s+/g, "-").toLowerCase()}`
    //         return item;
    //       }
    //     });

    //     setCategories((prevMenu) => {
    //       const updatedMenu = prevMenu.map((section) =>
    //         section.id === 2 ? { ...section, items: collection } : section,
    //       );

    //       const existingNames = new Set(updatedMenu.map((item) => item.name));
    //       const uniqueNavItems = navItem.filter(
    //         (item) => !existingNames.has(item.name),
    //       );

    //       return [...updatedMenu, ...uniqueNavItems];
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // useEffect(() => {
    //   getCategories();
    //   getCollections();
    // }, []);

    return (
      <div
        ref={ref}
        className="flex flex-col gap-7 shadow-lg fixed z-10 top-0 left-0 -translate-x-full h-screen w-full bg-white text-black pt-20 px-10 overflow-y-auto"
      >
        <FontAwesomeIcon className="h-6 w-6 absolute top-5 right-5 cursor-pointer" onClick={()=>{
         hamburgerTimeline.current.reverse();
         setHamburgerOpen(false);
        }} icon={faXmark}/>
          <div className="flex items-center gap-3 border-b pb-1">
          <svg className="h-5 w-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1378 12.5187C14.3663 11.1443 15.0448 9.36515 15.0435 7.52175C15.0435 3.37227 11.6668 0 7.52175 0C3.37227 0 0 3.37666 0 7.52175C0 11.6668 3.37666 15.0435 7.52175 15.0435C9.36515 15.0448 11.1443 14.3663 12.5187 13.1378L16.4837 17.1029C16.5245 17.1439 16.5731 17.1764 16.6267 17.1982C16.6802 17.2201 16.7377 17.231 16.7955 17.2302C16.912 17.2297 17.0238 17.1841 17.1073 17.1029C17.148 17.0623 17.1803 17.014 17.2023 16.9609C17.2243 16.9078 17.2357 16.8508 17.2357 16.7933C17.2357 16.7358 17.2243 16.6789 17.2023 16.6257C17.1803 16.5726 17.148 16.5244 17.1073 16.4837L13.1378 12.5187ZM0.873805 7.52175C0.873805 3.85967 3.85528 0.878196 7.51736 0.878196C11.1794 0.878196 14.1609 3.85967 14.1609 7.52175C14.1609 11.1838 11.1794 14.1653 7.51736 14.1653C3.85528 14.1653 0.873805 11.1838 0.873805 7.52175Z" fill="black"/>
          </svg>

             <input className="w-full p-2 text-black outline-none" type="search" placeholder="What are you looking for?"/>
          </div>
         
         <div className="flex flex-col gap-3">{data.map((category, index) => {
            return (
              <Accordion
                isOpen={openIndex === index}
                setOpenIndex={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                hamburgerTimeline={hamburgerTimeline}
                setHamburgerOpen={setHamburgerOpen}
                key={index}
                category={category}
              />
            );
          })}</div>
          

        <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1 -ml-1 border-t pt-2">
        <svg className="h-8 w-8" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12.9211" cy="8.61483" r="3.87661" stroke="#454545" stroke-width="0.861469" stroke-linecap="round"/>
<path d="M5.74764 18.6512C6.45951 15.6428 9.44532 13.9986 12.5368 13.9986H13.3065C16.398 13.9986 19.3838 15.6428 20.0957 18.6512C20.2334 19.2333 20.3429 19.8424 20.4045 20.4614C20.4634 21.0532 19.9774 21.5365 19.3827 21.5365H6.46062C5.8659 21.5365 5.37993 21.0532 5.43882 20.4614C5.50041 19.8424 5.60989 19.2333 5.74764 18.6512Z" stroke="black" stroke-width="0.861469" stroke-linecap="round"/>
</svg>

             <span className="text-sm font-light w-full text-left py-1 px-3 flex justify-between items-center leading-[1.6] text-black cursor-pointer">Login</span>
          </div>

          <div className="flex items-center gap-[7px]">
          <svg className="h-6 w-6" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.0953 8.57884L8.33189 14.4374C8.54671 14.6393 8.65413 14.7402 8.78078 14.765C8.83781 14.7762 8.89648 14.7762 8.95351 14.765C9.08016 14.7402 9.18757 14.6393 9.4024 14.4374L15.639 8.57883C17.3937 6.93047 17.6068 4.2179 16.131 2.31576L15.8535 1.9581C14.088 -0.317409 10.5442 0.064209 9.30369 2.66343C9.12846 3.03058 8.60583 3.03058 8.4306 2.66343C7.19006 0.0642087 3.64628 -0.317406 1.88079 1.9581L1.6033 2.31576C0.127498 4.21791 0.340586 6.93047 2.0953 8.57884Z" stroke="black" stroke-width="0.897013"/>
</svg>

             <span className="text-sm font-light w-full text-left py-1 px-3 flex justify-between items-center leading-[1.6] text-black cursor-pointer">My favorites</span>
          </div>
      </div>
          
      </div>
    );
  },
);

HamburgerMenu.displayName = "HamburgerMenu";

export default HamburgerMenu;

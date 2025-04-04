"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import api from "@/src/utils/api";
import dynamic from "next/dynamic";

import { forwardRef, useEffect } from "react";
const Accordion = dynamic(() => import("./Accordion"));

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
        className="shadow-lg absolute z-10 top-0 left-0 h-screen w-full bg-white py-12 px-4 overflow-y-auto"
      >
        <div>
          <div className="flex items-center gap-3 border-b">
             <FontAwesomeIcon className="text-black" icon={faSearch} />
             <input className="w-full p-2 text-black" type="search" placeholder="What are you looking for?"/>
          </div>
         
          {data.map((category, index) => {
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
          })}
        </div>
      </div>
    );
  },
);

HamburgerMenu.displayName = "HamburgerMenu";

export default HamburgerMenu;

"use client";

// import { categories } from "@/src/data/constants";
import { forwardRef, useEffect, useState } from "react";
import SubMenu from "./SubMenu";
import ImageSection from "./ImageSection";
import Menu from "./Menu";
import SecondarySubMenu from "./SecondarySubMenu";
// import api from "@/src/utils/api";

const data = [
  {
    id: 1,
    name: "Diamond Rings",
    items: [
      { name: "Earrings", image: "/images/earrings.jpg" },
      { name: "Necklaces", image: "/images/necklaces.jpg" },
      { name: "Bracelets", image: "/images/bracelets.jpg" },
    ],
  },
  {
    id: 2,
    name: "Diamond Earrings",
    items: [
      { name: "Minimalist", image: "/images/minimalist.jpg" },
      { name: "Boho", image: "/images/boho.jpg" },
      { name: "Vintage", image: "/images/vintage.jpg" },
    ],
  },
  {
    id: 3,
    name: "Diamond Necklace",
    items: [
      { name: "Best Sellers", image: "/images/bestseller.jpg" },
      { name: "New Arrivals", image: "/images/new.jpg" },
      { name: "Limited Edition", image: "/images/limited.jpg" },
    ],
  },
  {
    id: 4,
    name: "Diamond Bracelets",
    items: [
      { name: "Best Sellers", image: "/images/bestseller.jpg" },
      { name: "New Arrivals", image: "/images/new.jpg" },
      { name: "Limited Edition", image: "/images/limited.jpg" },
    ],
  },
  {
    id: 5,
    name: "Kids Galaxy",
    items: [
      { name: "Best Sellers", image: "/images/bestseller.jpg" },
      { name: "New Arrivals", image: "/images/new.jpg" },
      { name: "Limited Edition", image: "/images/limited.jpg" },
    ],
  },
];

const DropdownMenu = forwardRef(
  ({ onMouseEnter, onMouseLeave, setDropdownOpen }, ref) => {
    const [categories, setCategories] = useState(data);
    const [selectedCategory, setSelectedCategory] = useState();
    const [hoveredItem, setHoveredItem] = useState();

    const handleCategoryHover = (category) => {
      setSelectedCategory(category);
      if(category?.items && category?.items?.length>0){
        setHoveredItem(category?.items[0]);
      }else{
        setHoveredItem(category);
      }
    };

    const handleItemHover = (item) => {
      setHoveredItem(item);
    };

    // const getCategories = async () => {
    //   try {
    //     const res = await api.get("/store/khw/categories/get-all-categories");
    //     const data = await res.data;
    //     const formattedData = data.map((item) => {
    //       if (item.showInNav) {
    //         item.link = `/${item.name.replace(/\s+/g, "-").toLowerCase()}`;
    //         return item;
    //       }
    //     });
    //     setCategories((prevMenu) =>
    //       prevMenu.map((section) =>
    //         section.id === 1
    //           ? { ...section, items: formattedData }
    //           : section,
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
    //       if(item.showInNav){
    //         item.link = item.hasHomePage && item.pathOfHomePage ? item.pathOfHomePage : `/collection/${item.name.replace(/\s+/g, "-").toLowerCase()}`
    //         return item
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

    useEffect(() => {
      setSelectedCategory(categories[0]);
      setHoveredItem(categories[0]?.items[0]);
    }, [categories]);

    return (
      <div
        ref={ref}
        className="scale-y-0 pointer-events-auto absolute z-104 flex justify-center top-full  text-black bg-white w-full text-sm px-20 py-10 gap-12 xl:gap-24
       border-t border-gray-600
        "
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Menu
          setDropdownOpen={setDropdownOpen}
          categories={categories}
          onCategoryHover={handleCategoryHover}
        />
        <SubMenu
          setDropdownOpen={setDropdownOpen}
          items={selectedCategory?.items}
          hoveredItem={hoveredItem}
          onItemHover={handleItemHover}
        />
        <ImageSection hoveredItem={hoveredItem} />
        <SecondarySubMenu 
          setDropdownOpen={setDropdownOpen}
          // items={selectedCategory?.items}
          hoveredItem={hoveredItem}
          onItemHover={handleItemHover}/>
      </div>
    );
  },
);

DropdownMenu.displayName = "DropdownMenu";
export default DropdownMenu;

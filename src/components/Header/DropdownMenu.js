"use client";

import { forwardRef, useEffect, useState } from "react";
import SubMenu from "./SubMenu";
import ImageSection from "./ImageSection";
import Menu from "./Menu";
import SecondarySubMenu from "./SecondarySubMenu";
import { useSelector } from "react-redux";

const DropdownMenu = forwardRef(
  ({ onMouseEnter, onMouseLeave, setDropdownOpen }, ref) => {
    const {data:categories} = useSelector((state)=>state.category)
    const {data:recommendedList} = useSelector((state)=>state.recommendeds)
    const [selectedCategory, setSelectedCategory] = useState();

    const handleCategoryHover = (category) => {
      setSelectedCategory(category);
    };
  
    useEffect(() => {
      setSelectedCategory(categories[0]);
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
          hoveredItem={selectedCategory}
        />
        <ImageSection hoveredCatUrl={selectedCategory?.image?.url} />
        <SecondarySubMenu 
          setDropdownOpen={setDropdownOpen}
          items={recommendedList}/>
      </div>
    );
  },
);

DropdownMenu.displayName = "DropdownMenu";
export default DropdownMenu;

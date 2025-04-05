"use client";

// import { categories } from "@/src/data/constants";
import { forwardRef, useEffect, useState } from "react";
import SubMenu from "./SubMenu";
import ImageSection from "./ImageSection";
import Menu from "./Menu";
import SecondarySubMenu from "./SecondarySubMenu";
import api from "@/utils/api";

const DropdownMenu = forwardRef(
  ({ onMouseEnter, onMouseLeave, setDropdownOpen }, ref) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [recommendedList,setRecommendedList]=useState([])

    const handleCategoryHover = (category) => {
      setSelectedCategory(category);
    };

    const getCategoriesAndStyle = async () => {
      try {
        const res = await api.get("/store/eshop/categories/get-all-categories");
        const data = await res.data;
        console.log(data)
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getRecommendeds = async()=>{
      try {
        const res = await api.get("/store/eshop/recommended/get-all-recommended")
        const data = await res.data
        setRecommendedList(data)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getCategoriesAndStyle();
      getRecommendeds()
    }, []);
  
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

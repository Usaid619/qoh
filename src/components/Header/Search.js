"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Search({ handelsearchbtn, searchDropdownRef }) {
  const [Selectedoption, setSelectedoption] = useState("sku");

  const handleOptionChange = (option) => {
    setSelectedoption(option);
  };

  return (
    <div ref={searchDropdownRef} className="fixed opacity-0 top-0 left-0 z-[500] w-full flex flex-col gap-6 3xl:gap-8 4xl:gap-10 items-center border-b-4 py-20 3xl:py-28 border-[#b2872d] px-2 bg-[#f8f8f8] text-base 3xl:text-xl 4xl:text-3xl">
      <FontAwesomeIcon
        onClick={handelsearchbtn}
        className="h-6 w-6 3xl:h-8 3xl:w-8 4xl:h-12 4xl:w-12 cursor-pointer absolute z-50 fill-[#b2872d] text-[#b2872d] top-[5%] right-[2%]"
        icon={faXmark}
      />

      <div className="w-full m-auto flex sm:gap-3 gap-1 justify-center items-center">
        <span
          className={` cursor-pointer radio-label h-3 w-3 3xl:h-5 3xl:w-5 4xl:h-7 4xl:w-7 border rounded-full border-[#b2872d] ${Selectedoption === "sku" ? "bg-[#b2872d]" : ""}`}
          onClick={() => handleOptionChange("sku")}
        ></span>

        <label
          className="text-black  cursor-pointer"
          onClick={() => handleOptionChange("sku")}
        >
          Search By SKU
        </label>
        <br />

        <span
          className={`cursor-pointer radio-label h-3 w-3 3xl:h-5 3xl:w-5 4xl:h-7 4xl:w-7 border rounded-full border-[#b2872d] ${Selectedoption === "style" ? "bg-[#b2872d]" : ""}`}
          onClick={() => handleOptionChange("style")}
        ></span>

        <label
          className="text-black  cursor-pointer"
          onClick={() => handleOptionChange("style")}
        >
          Search By Style
        </label>
        <br />
      </div>

      {Selectedoption === "sku" ? (
        <div className="w-full m-auto flex justify-center items-center">
          <input
            type="search"
            placeholder="Search by SKU"
            className="w-[70%] md:w-[50%] text-black h-10 3xl:h-16 4xl:h-20 px-4 border outline-none"
          />
          <button 
          name="search"
          className=" h-10 3xl:h-16 4xl:h-20 bg-[#b2872d] px-4 text-white ">
            Search
          </button>
        </div>
      ) : (
        <div className="w-[60%] h-10 3xl:h-16 4xl:h-20 px-4 border border-[#b2872d] rounded-lg outline-none flex justify-between items-center text-gray-400 ">
          <p className="text-gray-700">Select Style</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      )}
    </div>
  );
}

export default Search;

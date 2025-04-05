import React, { useState } from 'react';
import Link from 'next/link';

const SecondarySubMenu = ({ setDropdownOpen, items }) => {
  const [showAll, setShowAll] = useState(false);
  const displayItems = showAll ? items : items.slice(0, 5);

  return (
    <div className="flex flex-col gap-3 4xl:gap-6 max-w-[220px]">
      <h1 className='text-base font-semibold'>Browse By Recommends</h1>
      {displayItems.map((item, i) => (
        <Link
          key={i}
          href={`/shop?recommended=${item?.name?.toLowerCase()}`}
          className="flex items-center gap-2 cursor-pointer hover:text-amber-700"
          onClick={() => setDropdownOpen(false)}
        >
          <img
            src={item.image?.url}
            alt={item.name}
            className="w-6 h-6 object-cover rounded"
          />
          <span className="text-gray-500 hover:text-black transition-colors duration-300 ease-in-out">
            {item?.name}
          </span>
        </Link>
      ))}
      {items.length > 5 && (
        <button
          className="text-xs text-white rounded bg-black px-2 py-1 mt-1 self-start"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "View Less" : "View More"}
        </button>
      )}
    </div>
  );
};

export default SecondarySubMenu;

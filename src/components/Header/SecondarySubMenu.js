import React from 'react'
import Link from 'next/link'

const SecondarySubMenu = ({setDropdownOpen,hoveredItem,onItemHover}) => {

    const items = [
        {
            name:"Anniversary",
            image:"/assets/images/header/dropdown/icon-1.png",
        },
        {
            name:"Casual Outing",
            image:"/assets/images/header/dropdown/icon-2.png",
        },
        {
            name:"Classic",
            image:"/assets/images/header/dropdown/icon-3.png",
        },
        {
            name:"Office Wear",
            image:"/assets/images/header/dropdown/icon-4.png",
        },
        {
            name:"Contemporary",
            image:"/assets/images/header/dropdown/icon-5.png",
        },
        {
            name:"Engagement",
            image:"/assets/images/header/dropdown/icon-6.png",
        },
        {
            name:"Party",
            image:"/assets/images/header/dropdown/icon-7.png",
        },
    ]

  return (
    <div className="flex flex-col gap-3 4xl:gap-6">
        <h1 className='text-base font-semibold'>Styles</h1>
          {items?.map((item,i) => {
            return (
              <Link
      key={i}
      href={item?.link || "#"}
      className="flex  gap-2 cursor-pointer hover:text-amber-700"
      onClick={() => setDropdownOpen(false)}
      onMouseEnter={() => onItemHover(item)}
    >
        <img src={item.image} alt={item.name} className="w-6 h-6 object-cover rounded" /> 
        <span className="text-gray-500 hover:text-black transition-colors duration-300 ease-in-out">{item?.name}</span>
      
    </Link>
            );
          })}
        </div>
  )
}

export default SecondarySubMenu

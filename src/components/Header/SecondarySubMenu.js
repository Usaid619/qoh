import React from 'react'
import Link from 'next/link'

const SecondarySubMenu = ({ setDropdownOpen, items }) => {

    return (
        <div className="flex flex-col gap-3 4xl:gap-6">
            <h1 className='text-base font-semibold'>Browse By Recommends</h1>
            {items?.map((item, i) => {
                return (
                    <Link
                        key={i}
                        href={`/shop?recommended=${item?.name?.toLowerCase()}`}
                        className="flex  gap-2 cursor-pointer hover:text-amber-700"
                        onClick={() => setDropdownOpen(false)}
                    >
                        <img src={item.image?.url} alt={item.name} className="w-6 h-6 object-cover rounded" />
                        <span className="text-gray-500 hover:text-black transition-colors duration-300 ease-in-out">{item?.name}</span>

                    </Link>
                );
            })}
        </div>
    )
}

export default SecondarySubMenu

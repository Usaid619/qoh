import Link from "next/link";

const SubMenu = ({ hoveredItem, onItemHover, setDropdownOpen }) => {
  const items = [
    {
        name:"All Earrings",
        image:"/assets/images/header/dropdown/item-1.png",
    },
    {
        name:"Solitaire",
        image:"/assets/images/header/dropdown/item-2.png",
    },
    {
        name:"Studs",
        image:"/assets/images/header/dropdown/item-3.png",
    },
    {
        name:"Baalis",
        image:"/assets/images/header/dropdown/item-4.png",
    },
    {
        name:"Hoops & Huggies",
        image:"/assets/images/header/dropdown/item-5.png",
    },
    {
        name:"Drops",
        image:"/assets/images/header/dropdown/item-6.png",
    },
    
]
  return (
//     <div className="flex flex-col gap-3 4xl:gap-6 w-1/3">
//       {items?.map((item,i) => {
//         return (
//           <Link
//   key={i}
//   href={item?.link || "#"}
//   className="cursor-pointer hover:text-amber-700 block"
//   onClick={() => setDropdownOpen(false)}
//   onMouseEnter={() => onItemHover(item)}
// >
//   {item?.name}
// </Link>
//         );
//       })}
//     </div>
<div className="flex flex-col gap-3">
        <h1 className='text-base font-semibold'>Browse By Recommends</h1>
          {items?.map((item,i) => {
            return (
              <Link
      key={i}
      href={item?.link || "#"}
      className="flex items-center gap-2 cursor-pointer hover:text-amber-700"
      onClick={() => setDropdownOpen(false)}
      onMouseEnter={() => onItemHover(item)}
    >
        <img src={item.image} alt={item.name} className="w-6 h-6 object-cover rounded" /> 
        <span className="text-gray-500 hover:text-black transition-colors duration-300 ease-in-out">{item?.name}</span>
      
    </Link>
            );
          })}
        </div>
  );
};
export default SubMenu;
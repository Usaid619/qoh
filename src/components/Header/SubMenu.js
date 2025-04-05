import Link from "next/link";

const SubMenu = ({ hoveredItem, setDropdownOpen }) => {
  return (

    <div className="flex flex-col gap-3">
      <h1 className='text-base font-semibold'>Styles</h1>
      {hoveredItem?.styles?.map((item, i) => {
        if(item.itisAllType){
          return (
            <Link
              key={i}
              href={`/${hoveredItem?.name
                ?.toLowerCase()
                .replaceAll(' ', '-')}`}
              className="flex items-center gap-2 cursor-pointer hover:text-amber-700"
              onClick={() => setDropdownOpen(false)}
            >
              <img src={item?.image?.url} alt={item?.name} className="w-6 h-6 object-cover rounded" />
              <span className="text-gray-500 hover:text-black transition-colors duration-300 ease-in-out">{item?.name}</span>
  
            </Link>
          );
        }
      })}
      {hoveredItem?.styles?.map((item, i) => {
        if(!item.itisAllType){
          return (
            <Link
              key={i}
              href={`/${hoveredItem?.name
                ?.toLowerCase()
                .replaceAll(' ', '-')}/?style=${item.name
                ?.toLowerCase()
                .replaceAll(' ', '-')}`}
              className="flex items-center gap-2 cursor-pointer hover:text-amber-700"
              onClick={() => setDropdownOpen(false)}
            >
              <img src={item?.image?.url} alt={item?.name} className="w-6 h-6 object-cover rounded" />
              <span className="text-gray-500 hover:text-black transition-colors duration-300 ease-in-out">{item?.name}</span>
  
            </Link>
          );
        }
      })}
    </div>
  );
};
export default SubMenu;
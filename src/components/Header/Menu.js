import Link from "next/link";

const Menu = ({
  categories,
  onCategoryHover,
  setDropdownOpen,
}) => {
  return (
    <div className=" flex flex-col gap-3 4xl:gap-6 pr-3 4xl:pr-6 ">
      <h1 className="text-base font-semibold">Categories</h1>
      {categories.map((category,i) => {
        return (
          <div
            className="cursor-pointer"
            key={i}
            onMouseEnter={() => onCategoryHover(category)}
          >
            <Link
              className="w-full flex items-center justify-between whitespace-nowrap
              "
              onClick={() => {
                setDropdownOpen(false);
              }}
              href={`/${category?.name.toLowerCase().replaceAll(" ","-")}` || "#"}
            >
              <span className="text-gray-500 hover:text-black transition-colors duration-300 ease-in-out">{category?.name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;

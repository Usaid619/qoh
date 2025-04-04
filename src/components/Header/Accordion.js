"use client";

import { useRef } from "react";
import useAccordionAnimation from "@/hooks/useAccordionAnimation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Accordion = ({
  category,
  isOpen,
  setOpenIndex,
  setHamburgerOpen,
  hamburgerTimeline,
}) => {
  const location = usePathname();
  const navigate = useRouter();
  // const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null);

  useAccordionAnimation(isOpen, contentRef);

  return (
    <div className=" flex flex-col gap-1 max-h-screen ">
      <button
      name="expand"
        onClick={() => {
          if (category?.items?.length > 1) {
            setOpenIndex();
          } else {
            hamburgerTimeline.current.reverse();
            setHamburgerOpen(false);
            navigate.push(category.link ? category.link : location);
          }
        }}
        className="text-sm font-light w-full text-left py-1 px-3 flex justify-between items-center leading-[1.6] text-black "
      >
        {category?.name}
        {category?.items?.length > 1 && (
          <span
            className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <FontAwesomeIcon className="h-3 w-3" icon={faChevronDown} />
          </span>
        )}
      </button>
      <div
        ref={contentRef}
        className="flex flex-col overflow-hidden text-black bg-gray-50"
        style={{ height: "0px", opacity: 0 }}
      >
        {category.items?.map((item,i) => (
          <Link
            onClick={() => {
              hamburgerTimeline.current.reverse();
              setHamburgerOpen(false);
            }}
            href={item?.link || "#"}
            key={i}
            className="text-sm font-light w-full py-1 px-3 flex items-center leading-[1.6] select-none cursor-pointer gap-4 hover:text-amber-700"
          >
            {/* <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" /> */}
            {item?.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

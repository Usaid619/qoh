"use client";

// Make routes and use NavLink in the links

import gsap from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Common Components

const Search = dynamic(() => import("./Search"));

// Unique Components
import Marquee from "./Marquee";
const DropdownMenu = dynamic(() => import("./DropdownMenu"));
const HamburgerMenu = dynamic(() => import("./HamBurgerMenu"));

// Constants
const businessLogo =
  "/assets/images/header/Gulz-Black.png";;
const businessLogoWhite = "/assets/images/header/Gulz-White.png";

// Hooks
import useMediaChange from "@/hooks/useMediaChange";
import useDropdownAnimation from "@/hooks/useDropdownAnimation";
import useHamburgerAnimation from "@/hooks/useHamburgerAnimation";
import useHamburgerSvg from "@/hooks/useHamburgerSvg";
import useSearchAnimation from "@/hooks/useSearchAnimation";

const Header = ({ headerRef, isScrolled }) => {
  const [isHomePage,setIsHomePage] = useState(true)
  const location = usePathname();
  const [searchbtn, setsearchbtn] = useState(false);
  const searchDropdownRef = useRef();

  const dropdownRef = useRef();
  const hamburgerRef = useRef();
  const linkRef = useRef();

  const topLine = useRef(null);
  const middleLine = useRef(null);
  const bottomLine = useRef(null);

  const refTimeout = useRef();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const hamburgerTimeline = useRef(
    gsap.timeline({ paused: true, reversed: true }),
  );

  const handleHamburgerClick = () => {
    // closing menu
    if (hamburgerOpen) {
      hamburgerTimeline.current.reverse();

      gsap.to(hamburgerRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => setHamburgerOpen(false),
      });
    } else {
      hamburgerTimeline.current.play();

      setHamburgerOpen(true);
    }
  };

  const handleMouseEnter = (e) => {
    clearTimeout(refTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = (e) => {
    if (dropdownRef.current) {
      refTimeout.current = setTimeout(() => {
        gsap.to(dropdownRef.current, {
          scaleY: 0,
          duration: 0.2,
          opacity: 0,
          ease: "power2.inOut",
          onComplete: () => setDropdownOpen(false),
        });
      }, 100);
    }
  };
 
  const cancelClose = () => {
    clearTimeout(refTimeout.current);
  };

  useDropdownAnimation(dropdownOpen, dropdownRef);

  useHamburgerAnimation(hamburgerOpen, hamburgerRef);

  useMediaChange(hamburgerTimeline, setHamburgerOpen, setDropdownOpen);

  useSearchAnimation(searchbtn, searchDropdownRef);

  useHamburgerSvg(hamburgerTimeline, topLine, middleLine, bottomLine);

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0.6,
      },
      {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
    );
  }, [isScrolled]);

  const handelsearchbtn = () => {
    setsearchbtn((searchbtn) => !searchbtn);
  };

  return (
    <header
  ref={headerRef}
  className={`flex flex-col lg:gap-1 3xl:gap-2 font-gothic z-50 left-0 top-0 w-full hover:bg-white hover:text-black
    ${
      isScrolled
        ? "fixed bg-white text-black shadow-lg" // Fixed header with scroll
        : "absolute bg-transparent text-white fill-white" // Transparent header at the top
    }
  `}
>
      <Marquee />
      {/* header */}
      <div className="flex items-center lg:min-h-[auto] min-h-[78px] sm:py-0 relative w-full lg:items-center justify-between px-3 lg:px-12">
        <svg
          className="h-6 w-6 cursor-pointer lg:hidden"
          onClick={handleHamburgerClick}
          viewBox="0 0 37 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={bottomLine}
            d="M0 20.5H37"
            stroke={isHomePage && !isScrolled ? "white" : "black"}
            strokeWidth="3"
          />
          <path
            ref={middleLine}
            d="M0 11.5H37"
            stroke={isHomePage && !isScrolled ? "white" : "black"}
            strokeWidth="3"
          />
          <path
            ref={topLine}
            d="M0 1.5H37"
            stroke={isHomePage && !isScrolled ? "white" : "black"}
            strokeWidth="3"
          />
        </svg>
        {/* logo + navigation */}
        <div className={`flex justify-center items-center gap-7 w-3/4 lg:justify-center lg:flex-col lg:flex-1 ${isScrolled ? "py-1" : "py-3"} `}>
          {/* Logo */}
          
            {/* Logo + Divider + Text Wrapper */}
<div
  className={`flex items-center gap-4 transition-opacity duration-300 
    ${isScrolled ? "lg:hidden" : "flex"}
  `}
>
  {/* Logo */}
  <Link
  aria-label="company logo"
  className={`cursor-pointer relative w-16 xs:w-32 aspect-[2751/1700] `}
  href="/"
>
  <Image
    height={1408}
    width={2751}
    alt="business logo white"
    className={`absolute inset-0 object-contain transition-opacity duration-300 ${
      location === "/" && !isScrolled ? "opacity-100" : "opacity-0"
    }`}
    src={businessLogoWhite}
    priority
  />
  <Image
    height={1408}
    width={2751}
    alt="business logo"
    className={`absolute inset-0 object-contain transition-opacity duration-300 -translate-y-1/2 top-1/2 ${
      location !== "/" || isScrolled ? "opacity-100" : "opacity-0"
    }`}
    src={businessLogo}
    priority
  />
</Link>


  {/* Divider Line */}
  <div className="w-px h-8 xs:h-16 bg-gray-300" />

  {/* Text */}
  <div className="flex flex-col items-center justify-center">
    <span className="text-base xs:text-2xl font-medium tracking-wider font-bigilla">
      Queen of Hearts
    </span>
    <span className={`before:content-[""] before:h-[1px] before:w-4 before:absolute before:left-0 before:top-[50%] before:translate-x-[-140%] before:translate-y-[-50%] ${isScrolled ? "before:bg-black" : "before:bg-white"}

  after:content-[""] after:h-[1px] after:w-4 after:absolute after:right-0 after:top-[50%] after:translate-x-[140%] after:translate-y-[-50%] ${isScrolled ? "after:bg-black" : "after:bg-white"}

  relative capitalize text-center text-wrap 

  text-[6px] xs:text-[10px] leading-[1.4] tracking-widest whitespace-nowrap`}>THE JEWELS GALLERIA</span>
  {/* <Image
    height={1408}
    width={2751}
    alt="business logo"
    className={`absolute inset-0 object-contain transition-opacity duration-300 -translate-y-1/2 top-1/2 ${
      location !== "/" || isScrolled ? "opacity-100" : "opacity-0"
    }`}
    src="/assets/images/header/qoh-white.svg"
    priority
  /> */}
  </div>
</div>

         
          {/* Navigation */}
          <div className={`text-[15px]  hidden gap-24 uppercase lg:flex justify-center ${isScrolled ? "py-4" : "py-0"}`}>
            {/* Wrap these with NavLink if active elem needs to be styled */}
            <div
              ref={linkRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`text-center cursor-pointer border-b-[3px] 3xl:border-b-[5px] 4xl:border-b-[7px] border-solid border-transparent ${isScrolled || !isHomePage ? "hover:border-black" : "hover:border-white"}`}
            >
              Jewellery
            </div>
            <Link
              aria-label="queen-of-hearts"
              href={process.env.NEXT_PUBLIC_API_QOH_URL || "/"}
              target="_blank"
              className={`text-center cursor-pointer border-b-[3px] 3xl:border-b-[5px] 4xl:border-b-[7px] border-solid border-transparent ${isScrolled || !isHomePage ? "hover:border-black" : "hover:border-white"}`}
            >
              In Stocks
            </Link>
          </div>
        </div>

        {/* search + location + hamburger menu */}
        <div className="content-center">
          <div className="flex items-center gap-4 h-full">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onClick={() => handelsearchbtn()}
              className="text-xl 3xl:h-7 3xl:w-7 4xl:h-10 4xl:w-10 h-5 w-5 cursor-pointer"
            />
          
              <Search
                searchDropdownRef={searchDropdownRef}
                handelsearchbtn={handelsearchbtn}
              />
            

            <Link href="#" aria-label="store-location">
              <FontAwesomeIcon
                className="h-5 w-5 text-xl 3xl:h-7 3xl:w-7 4xl:h-10 4xl:w-10 cursor-pointer"
                icon={faLocationDot}
              />
            </Link>
          </div>
        </div>
      </div>

      
        <HamburgerMenu
          setHamburgerOpen={setHamburgerOpen}
          hamburgerTimeline={hamburgerTimeline}
          ref={hamburgerRef}
        />
    
     
        <DropdownMenu
          setDropdownOpen={setDropdownOpen}
          ref={dropdownRef}
          onMouseEnter={cancelClose}
          onMouseLeave={handleMouseLeave}
        />
      
    </header>
  );
};

export default Header;

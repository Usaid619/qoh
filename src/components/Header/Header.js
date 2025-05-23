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
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const dropdownRef = useRef();
  const hamburgerRef = useRef();
  const linkRef = useRef();
  const [isHovered,setIsHovered] = useState(false)

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

  useEffect(() => {
    // Function to check if screen is lg or above
    const checkScreenSize = () => {
      setIsLargeScreen(window.matchMedia('(min-width: 1024px)').matches);
    };

    checkScreenSize(); // Initial check

    // Add listener for screen resizing
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [])

  return (
    <header
      ref={headerRef}
      onMouseOver={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
      className={`${isHovered ?'lg:hover:bg-white' : 'lg:hover:bg-transparent'} flex flex-col lg:gap-1 3xl:gap-2 font-gothic z-50 left-0 top-0 w-full  lg:hover:text-black lg:hover:fill-black
    ${
      isScrolled
        ? "fixed bg-white text-black shadow-lg" // Fixed header with scroll
        : "absolute bg-transparent text-white fill-white" // Transparent header at the top
    }
  `}
    >
      <Marquee />
      {/* header */}
      <div className="flex items-center lg:min-h-[auto]  sm:py-0 relative w-full lg:items-center justify-between px-3 lg:px-12">
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
        <div
          className={`flex justify-center items-center gap-4 w-3/4 lg:justify-center lg:flex-col lg:flex-1 ${
            isScrolled ? "py-1" : "py-3"
          } `}
        >
          {/* Logo */}

          {/* Logo + Divider + Text Wrapper */}
          <Link
            href={"#"}
            className={`relative w-full cursor-pointer flex items-center justify-center xs:gap-4 gap-2 transition-opacity duration-300 
    ${isScrolled ? "lg:hidden" : "flex"}
  `}
          >
            {/* GULZ LOGO */}
            
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1019.63 571.17"
              className="h-8 xs:h-14 transition-all duration-300"
            >
              <path d="M690.33,508.94l23.35-23.35,23.35,23.35-23.35,23.35s-23.35-23.35-23.35-23.35Z" />
              <path d="M355.64,155.05l84.84-70.32-2.34-3.11C398.45,41.92,343.96,1,284.03,1,191.88-3.77,101.68,76.2,73.87,162.83c9.34-3.11,18.68-3.89,28.8-3.89C113.13,109.58,192.28,15.01,284.03,6.38c83.49,3.86,126.09,58.38,126.09,70.83s-3.89,21.79-12.45,30.36l-42.81,46.7h0l.78.78Z" />
              <path d="M660.76,243.51h-24.13v123.76c0,41.25-24.91,60.71-60.71,60.71s-66.94-15.57-66.94-62.27v-122.2h-24.13v-1.56h72.39v1.56h-23.35v122.2c0,38.92,12.45,60.71,44.37,60.71s56.82-21.79,56.82-59.16v-123.76h-23.35v-1.56h48.26v1.56h.78Z" />
              <path d="M814.87,369.61v56.04h-143.22v-1.56h24.13v-180.58h-24.13v-1.56h72.39v1.56h-23.35v180.58h47.48c30.36,0,44.37-24.91,45.92-54.49h1.56-.78Z" />
              <path d="M967.43,369.61v56.04h-136.99l105.08-181.36h-42.81c-31.13,0-48.26,20.24-51.37,46.7h-.78v-48.26h124.54l-105.08,181.36h59.93c30.36,0,44.37-24.91,45.92-54.49h1.56Z" />
              <path d="M494.19,495.7h169.68" />
              <path d="M791.52,495.7h169.68" />
              <path d="M250.56,242.22l107.41,3.89c19.46,0,59.93,5.45,59.93,33.47v67.72c0,17.12-7.01,33.47-18.68,45.14-34.25,34.25-80.17,54.49-129.99,54.49s-95.74-19.46-129.99-54.49h-1.56c-2.34,2.34-8.56,4.67-10.9,6.23v1.56c35.8,31.91,81.73,48.26,132.32,50.59h10.12c53.71,0,101.97-19.46,140.11-51.37.78-.78,1.56-1.56,2.34-1.56h1.56c2.34,0,4.67,2.34,4.67,4.67,0,38.92,0,116.75-80.17,154.89-12.45,6.23-27.24,9.34-41.25,9.34s-7.01,0-10.12,0c-15.57-1.56-30.36-7.01-44.37-14.01-16.35-8.56-31.91-18.68-47.48-28.02-19.46-11.68-38.14-23.35-58.38-33.47-14.01-7.01-26.46-9.34-38.14-9.34-52.15,0-88.73,51.37-89.51,52.93,34.25-22.57,61.49-30.36,85.62-30.36,66.16,0,107.41,62.27,188.36,66.16h15.57c19.46,0,38.92-4.67,56.82-14.01,35.8-17.9,60.71-50.59,74.72-87.18,3.89-9.34,6.23-17.12,7.78-24.91,1.56-8.56,2.34-17.12,2.34-25.69v-156.45c0-9.34,6.23-17.12,15.57-19.46h-204.71v-.78Z" />
              <path d="M167.27,196.3c2.34,0,4.67,1.56,4.67,4.67-.78,3.89-2.34,8.56-3.11,12.45-1.56,8.56-3.11,17.12-3.89,25.69-.78,17.9.78,35.03,5.45,52.93,3.89,17.12,11.68,33.47,11.68,50.59s-10.9,32.69-24.91,42.03c-27.24,18.68-72.39,27.24-99.63,3.89-35.03-30.36-24.13-87.18-2.34-122.2,10.12-17.12,24.13-31.91,40.47-42.81,10.9-7.78,24.13-13.23,37.36-17.12,7.01-2.34,13.23-3.89,20.24-5.45,4.67-.78,9.34-3.11,14.79-3.89l-.78-.78Z" />
              <path d="M54.41,389.33c-17.9-4.67-30.36-14.01-39.7-28.02-20.24-28.8-6.23-70.05-3.11-101.97,2.34-22.57.78-46.7-10.12-66.16,0-.78,0-2.34,1.56-2.34,31.13,3.11,58.38,15.57,81.73,36.58-26.46,26.46-43.59,56.82-49.04,91.85-3.11,22.57,2.34,52.93,18.68,69.27h0v.78Z" />
              <path d="M13.16,193.19s67.72-47.48,144.78,5.45" />
              <path d="M84.77,186.18c9.34-1.56,19.46,0,28.02,4.67,0,0,.78,0,0,.78h0c-8.56,6.23-19.46,9.34-30.36,10.12-11.68,0-20.24-4.67-31.13-8.56-12.45-4.67-26.46-3.89-39.7,0" />
              <path d="M987.93,265.31v-22.03h-6.75v-2.94h16.23v2.94h-6.78v22.03h-2.7Z" />
              <path d="M1000.07,265.31v-24.97h4.07l4.86,17.67.97,3.7c.24-.92.6-2.26,1.09-4l4.91-17.37h3.65v24.97h-2.6v-20.88l-5.98,20.88h-2.43l-5.94-21.24v21.24h-2.6Z" />
            </svg> */}
            <div className="sm:w-28 sm:h-16 xs:w-28 xs:h-16 w-[70px]  h-10">

            <img src={(isLargeScreen && isHovered) || isScrolled ? '/assets/images/header/Gulz-Black.png' : '/assets/images/header/gulz-logo-white.svg'} alt="header-logo" className="w-full h-full object-cover"/>
           </div>

            {/* Divider Line */}
            <div className={`${(isLargeScreen && isHovered) || isScrolled ? 'bg-black' : 'bg-gray-300'} w-[1px] h-8 xs:h-12 `} />

            {/* QOH LOGO */}
           <div>
            <img src={(isLargeScreen && isHovered) || isScrolled ? '/assets/images/header/qoh-black-svg.svg' : '/assets/images/header/qoh-white.svg'} alt="header-logo" className="sm:w-48 w-24"/>
           </div>
            {/* <svg
              className="h-14 bordertransition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 98 56"
            >
              <path d="M37.25,34.6l.4,1.87c.2-.03.16-.21.2-.34.07-.23.34-1.51.44-1.53.19-.04.24.01.32.17.17.34.24,1.29.32,1.7.41-.41.32-1.26.56-1.75.1-.2.11-.12.32-.12-.15.32-.54,2.21-.68,2.32-.1.07-.2.04-.3.04l-.44-1.87-.55,1.87h-.28s-.6-2.31-.6-2.31l.29-.04h0Z" />
              <path d="M72.95,34.6c.41.03,1.11-.14,1.37.26.36.55-.27.86-.27.97,0,.06.54.83.38,1.13-.59-.19-.2-1.28-1.18-1.08v1.08c-.09.04-.3-.09-.3-.15v-2.22h0ZM74.01,35.56c.12-.19.19-.44.03-.63l-.8-.14v.89l.77-.12Z" />
              <path d="M20.6,34.6h.3l.06.99h1.13v-.99h.3v2.22c0,.06-.2.19-.3.15l-.09-1.14-1.09-.04v1.18h-.3v-2.37h0Z" />
              <path d="M56.28,36.66v-.67c-.22,0-.51,0-.48-.3.17.01.38-.03.54,0,.33.06.3.65.25.94-.1.53-1.37.42-1.72-.05-.83-1.09.42-2.52,1.62-1.82-.21.21-.51,0-.83.05-1.28.2-.79,2.44.62,1.86h0Z" />
              <path d="M80.24,34.6l.69,2.36c-.39.07-.41-.71-.51-.78l-.88.04-.18.66-.3.07c-.09-.08.66-2.18.74-2.27.11-.14.29-.11.44-.09h0ZM80.34,35.98l-.39-1.08-.3,1.08h.69Z" />
              <path d="M60.52,36.96l-.3-.06-.2-.72h-.86c-.1.07-.12.85-.51.78l.69-2.36c.15-.01.33-.04.44.09.08.09.82,2.19.74,2.27h0ZM59.93,35.98l-.39-1.08-.3,1.08h.69Z" />
              <path d="M41.89,34.6h1.28c.39.3-.95.16-.99.2v.79c1.25-.09,1.21.29,0,.2v.83l.99.11c0,.19.08.24-.15.25-.38.02-.76-.02-1.14,0v-2.37h0Z" />
              <path d="M69.5,34.6h1.28c.39.3-.95.16-.99.2v.79c1.25-.09,1.21.29,0,.2v.83l.99.11c0,.19.08.24-.15.25-.38.02-.76-.02-1.14,0v-2.37h0Z" />
              <path d="M24.64,34.6h1.28c.39.3-.95.16-.99.2v.79c1.25-.09,1.21.29,0,.2v.83l.99.11c0,.19.08.24-.15.25-.38.02-.76-.02-1.14,0v-2.37h0Z" />
              <path d="M49.98,34.6l-.14.26c-.25-.13-.85-.11-.84.28,0,.48,1.45.54,1.04,1.43-.28.61-1.64.45-1.33,0,.4.23,1.04.34,1.09-.25,0-.6-1.43-.47-1.02-1.4.21-.49.78-.4,1.21-.32h0Z" />
              <path d="M33.71,34.6h1.18c.06.44-.76.02-.94.29l-.04.7s1.38-.1.99.2l-.89.04-.09.84,1.09.05c0,.19.08.24-.15.25-.38.02-.76-.02-1.14,0v-2.37h0Z" />
              <path d="M66.34,34.6v2.07c.36.04.83-.13,1.08.15,0,.19-1.21.26-1.38,0v-2.22h.3Z" />
              <polygon points="62.99 34.6 62.99 36.67 63.98 36.67 63.98 36.96 62.69 36.96 62.69 34.6 62.99 34.6" />
              <path d="M45.64,34.6v2.07h.99v.3c-.41-.05-.97.15-1.28-.15v-2.22h.3,0Z" />
              <polygon points="18.53 34.6 18.53 34.79 17.84 34.79 17.84 36.96 17.54 36.96 17.54 34.79 16.85 34.79 16.85 34.6 18.53 34.6" />
              <rect x="76.59" y="34.6" width=".3" height="2.37" />
              <path d="M31.34,34.6v2.02c0,.25-.75.45-.99.34-.05-.35.39-.13.59-.34.04-.05.2-.45.2-.49v-1.53h.2Z" />
              <rect x="6.5" y="35.48" width="6.31" height=".1" />
              <rect x="85.17" y="35.48" width="6.21" height=".1" />
              <path d="M63.58,19.32c.05.3-.08.15-.24.2-.41.11-1.14.42-1.14.94v3.3h4.93v-2.91c0-.5-.39-1.13-.88-1.28-.25-.08-.67.08-.59-.24h4.44c-.16.26-.51.2-.79.34-.58.28-.64.8-.69,1.38-.11,1.52-.18,5.05.03,6.48.08.54.32.94.86,1.11.25.08.67-.08.59.24h-4.44c-.08-.32.34-.16.59-.24.44-.14.88-.75.88-1.19v-3.25l-.15-.15h-4.78v3.7c0,.51.73.82,1.14.94.16.04.29-.1.24.2h-4.34c-.06-.31.4-.19.65-.29.45-.18.69-.68.74-1.14.21-2.17-.16-4.69-.01-6.9-.19-.7-.48-.86-1.13-1.04-.16-.04-.29.1-.24-.2h4.34,0Z" />
              <path d="M81.94,28.46c.44.42,1.06-.25,1.16-.17-.47,1.04-1.94.89-2.41-.1-.94,1.19-3.57,1.11-3.41-.74.16-1.8,3.18-1.08,3.36-2.56.09-.75-.01-1.81-.95-1.92-1.11-.13-.97,1.29-1.67,1.29-.59,0-.7-.7-.24-1.04.78-.58,3.17-.48,3.74.39.58.87-.18,4.29.42,4.85h0ZM80.73,25.53c-.06-.07-1.44.74-1.57.84-1.37,1.07-.53,3.02.82,2.2.82-.5.75-2.19.75-3.04h0Z" />
              <path d="M76.1,25.03h-4.04c-.32,1.81,1.08,4.2,3.15,3.4.65-.25.67-.68,1.08-1.13-.26,1.34-1.36,1.74-2.62,1.68-4.15-.19-3.57-6.7.69-6.11.94.13,1.91,1.17,1.73,2.16h0ZM75.12,24.84c0-2.52-2.85-2.41-2.96,0h2.96Z" />
              <path d="M83.1,28.88c.23-.33.65-.15.88-.55.11-.21.19-.98.21-1.27.04-.66.05-1.62,0-2.28-.03-.39-.1-1.22-.44-1.43-.27-.16-.61.04-.55-.29l1.78-.13.09.92c.54-.75,1.35-1.17,2.3-.96.69.15.59,1.09.04,1.04-.44-.04-1.5-1.75-2.07.14-.22.75-.27,2.98-.16,3.77.03.2.09.4.23.56l.75.49h-3.06,0Z" />
              <path d="M89.8,21.09v1.73l.15.15h1.63v.2h-1.63l-.15.15v4.14c0,.08.16.67.21.78.21.42.86.55,1.27.41.29-.09.41-.45.69-.5-.36,1.09-2.89,1.17-3.14.08l-.02-5.06c-.07-.07-.74.13-.79-.1,1.01-.19,1.16-1.12,1.55-1.85.06-.12,0-.17.22-.13h0Z" />
              <path d="M92.27,26.91l.51,1.12c1.12,1.69,3.05.51,2.24-.96-.31-.55-1.53-.95-2.06-1.39-1.42-1.18-.46-3.05,1.34-2.81.43.06.7.42,1.13,0l.1,1.58c-.29-.28-.3-.61-.59-.94-1.06-1.21-2.46-.08-1.82.93.61.97,2.4.78,2.81,2.22.4,1.41-.63,2.45-2.03,2.32-.57-.05-1.1-.58-1.63-.1v-1.97h0Z" />
              <path d="M52.54,20.65c.18-1.2,1.96-1.75,3-1.62.54.07,1.05.36.8.98-.78.72-.96-.73-1.59-.79-1.59-.16-1.18,2.63-1.21,3.58.1.31,1.08.1,1.37.16.16.12,0,.18-.15.2-.34.04-.73-.05-1.07.01l-.16.23c.14.97-.31,4.41.29,5.03.25.26.72.1.7.44h-2.96l.69-.44c.08-.09.29-.6.29-.69v-4.58l-.99-.05c-.07-.23.21-.14.34-.15.21,0,.43,0,.64,0,.08-.72-.1-1.62,0-2.32h0Z" />
              <path d="M50.77,25.93c0,1.74-1.41,3.16-3.16,3.16s-3.16-1.41-3.16-3.16,1.41-3.16,3.16-3.16,3.16,1.41,3.16,3.16ZM47.29,22.99c-2.41.38-2.12,6.07.46,5.89,2.61-.19,2.4-6.34-.46-5.89h0Z" />
              <path d="M8.67,28.78c-.2.22.81.55.94.58.83.2,1.79.19,2.5-.35l.5-.83c-.03,2.55-3.54,3.04-5.17,1.58-.19-.17-.38-.57-.54-.64-.31-.14-1.17-.17-1.7-.37-6.57-2.47-1.96-12.17,4.13-9.16,4.06,2,3.64,7.9-.66,9.19h0ZM6.38,19.34c-2.75.46-3.18,5.32-2.23,7.41.62,1.34.56.73,1.61.75,1.05.02,1.77.73,2.63,1.14,3.42-1.9,2.71-10.1-2.01-9.3h0ZM6.7,28.88c-.45-.54-.98-1.21-1.77-1.08-.24.21,1.41,1.34,1.77,1.08Z" />
              <path d="M33.12,28.88c.2-.31.59-.15.84-.49.16-.22.23-.66.25-.93.06-.75.09-2.63-.03-3.33-.03-.2-.17-.53-.31-.67-.24-.23-.5-.13-.65-.39.38.09,1.73-.38,1.93-.11l.04.7c.83-.6,1.45-.89,2.51-.79,2.69.27.9,3.94,1.77,5.53l.75.49h-3.06c.14-.28.51-.17.74-.39.39-.37.38-2.7.34-3.31-.07-1.03-.12-2.1-1.43-2.1-1.18,0-1.54.88-1.62,1.9-.06.67-.11,3,.29,3.45l.69.44h-3.06,0Z" />
              <path d="M14.98,22.96v4.19s.12.66.14.74c.39,1.3,2.63,1.02,2.81-.64.08-.71.09-2.65,0-3.34-.03-.19-.09-.42-.23-.56-.21-.21-.61-.15-.74-.39h2.07v4.98s.19.38.23.41c.24.25.69.11.66.42l-1.87.2-.1-.79c-.93,1.01-3.68,1.21-3.94-.45-.14-.91.28-3.91-.3-4.43-.19-.17-.58-.12-.69-.35h1.97,0Z" />
              <path d="M32.23,25.03h-4.04c-.19,1.47.53,3.43,2.22,3.55.82.06,1.74-.41,1.82-1.28l.18.15c-.37,1.25-1.39,1.59-2.61,1.53-4.16-.2-3.6-6.7.69-6.11.96.13,1.87,1.18,1.73,2.16h0ZM31.25,24.84c-.03-2.55-2.87-2.38-2.96,0h2.96Z" />
              <path d="M25.82,25.03h-4.04c-.38,2.2,1.48,4.61,3.69,3.05l.45-.78c-.06,1.49-1.66,1.81-2.9,1.66-3.59-.42-3.24-6.58.98-6.1,1.05.12,1.91,1.11,1.82,2.17h0ZM24.84,24.84c-.03-2.55-2.89-2.4-2.96,0h2.96Z" />
            </svg> */}
          </Link>

          {/* Navigation */}
          <div
            className={`text-[15px]  hidden gap-24 uppercase lg:flex justify-center ${
              isScrolled ? "py-4" : "py-0"
            }`}
          >
            {/* Wrap these with NavLink if active elem needs to be styled */}
            <div
              ref={linkRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`text-center cursor-pointer border-b-[3px] 3xl:border-b-[5px] 4xl:border-b-[7px] border-solid border-transparent ${
                isScrolled || !isHomePage
                  ? "hover:border-black"
                  : "hover:border-white"
              }`}
            >
              Jewellery
            </div>
            <Link
              aria-label="queen-of-hearts"
              href={process.env.NEXT_PUBLIC_API_QOH_URL || "/"}
              target="_blank"
              className={`text-center cursor-pointer border-b-[3px] 3xl:border-b-[5px] 4xl:border-b-[7px] border-solid border-transparent ${
                isScrolled || !isHomePage
                  ? "hover:border-black"
                  : "hover:border-white"
              }`}
            >
              In Stocks
            </Link>
          </div>
        </div>

        {/* search + location + hamburger menu */}
        <div className={`${isScrolled ? 'mt-0' : 'sm:mb-4 lg:mb-12' } content-center  `}>
          <div className="flex gap-2  items-center h-full">
            {/* Search */}
            <svg
              onClick={() => handelsearchbtn()}
              className={`${isScrolled ? 'md:hidden' : 'block'} text-xl h-5 w-5 lg:h-6 lg:w-6 cursor-pointer`}
              viewBox="0 0 18 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.1378 13.4403C14.3663 12.0659 15.0448 10.2868 15.0435 8.44338C15.0435 4.2939 11.6668 0.921631 7.52175 0.921631C3.37227 0.921631 0 4.2983 0 8.44338C0 12.5885 3.37666 15.9651 7.52175 15.9651C9.36515 15.9665 11.1443 15.2879 12.5187 14.0594L16.4837 18.0245C16.5245 18.0656 16.5731 18.098 16.6267 18.1199C16.6802 18.1417 16.7377 18.1526 16.7955 18.1518C16.912 18.1514 17.0238 18.1057 17.1073 18.0245C17.148 17.9839 17.1803 17.9356 17.2023 17.8825C17.2243 17.8294 17.2357 17.7724 17.2357 17.7149C17.2357 17.6574 17.2243 17.6005 17.2023 17.5474C17.1803 17.4942 17.148 17.446 17.1073 17.4054L13.1378 13.4403ZM0.873805 8.44338C0.873805 4.7813 3.85528 1.79983 7.51736 1.79983C11.1794 1.79983 14.1609 4.7813 14.1609 8.44338C14.1609 12.1055 11.1794 15.0869 7.51736 15.0869C3.85528 15.0869 0.873805 12.1055 0.873805 8.44338Z" />
            </svg>

            {/* Shop */}
            <svg
              className="hidden lg:block text-xl lg:h-6 lg:w-6 cursor-pointer"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.96876 23.2937H20.0352C20.4373 23.2937 20.8213 23.1211 21.0871 22.8205C21.3525 22.5202 21.4765 22.1199 21.4281 21.7232L19.7073 6.91481C19.6208 6.20748 19.0217 5.67406 18.314 5.67406H15.3339V4.03979C15.3339 3.1527 14.9875 2.31542 14.358 1.68145C14.2883 1.61216 14.214 1.54287 14.1298 1.4754C13.5325 0.979096 12.7745 0.706055 11.9956 0.706055C10.1576 0.706055 8.6619 2.2013 8.6619 4.03979V5.67406H5.68952C4.97585 5.67406 4.37722 6.20792 4.29616 6.91572L2.57088 21.7232C2.52469 22.1222 2.65103 22.523 2.91774 22.8227C3.18446 23.1221 3.56755 23.2937 3.96876 23.2937ZM14.968 7.48853C15.007 7.51979 15.054 7.54107 15.1075 7.54107C15.1532 7.54107 15.1935 7.52385 15.2288 7.50077C15.2501 7.50846 15.27 7.51434 15.2927 7.52568C15.3606 7.56326 15.4136 7.61172 15.4444 7.66561C15.4503 7.676 15.4639 7.70046 15.4716 7.70997C15.4752 7.71948 15.4946 7.76928 15.5001 7.77835C15.5123 7.82138 15.5187 7.86439 15.5187 7.90651C15.5187 7.94863 15.5123 7.99208 15.4851 8.07497C15.4802 8.084 15.4485 8.13746 15.4444 8.14741C15.4136 8.20174 15.3606 8.25019 15.2682 8.29956C15.1913 8.33985 15.1007 8.35118 15.0106 8.33941C14.9571 8.33126 14.9037 8.31089 14.8494 8.27692C14.7203 8.20174 14.6402 8.06001 14.6402 7.90651C14.6402 7.753 14.7203 7.61125 14.8344 7.54378C14.8426 7.54016 14.8774 7.52206 14.8851 7.51752C14.9055 7.50392 14.9381 7.49715 14.968 7.48853ZM9.11473 4.03979C9.11473 2.45126 10.4071 1.15888 11.9956 1.15888C12.6789 1.15888 13.3165 1.38892 13.8251 1.81005C13.8323 1.81685 13.8527 1.83631 13.8604 1.84219C13.9238 1.8902 13.9827 1.94636 14.0374 2.00161C14.5813 2.54952 14.8811 3.27315 14.8811 4.03979V5.67406H9.11473V4.03979ZM8.69405 7.54378C8.70219 7.54016 8.73706 7.52206 8.74431 7.51752C8.74929 7.51434 8.75835 7.5139 8.76378 7.51119C8.80001 7.53563 8.84122 7.55329 8.88831 7.55329C8.95216 7.55329 9.00876 7.52703 9.04997 7.48538C9.08212 7.49489 9.11563 7.5071 9.15231 7.52612C9.29405 7.60265 9.37827 7.74529 9.37827 7.90651C9.37827 8.07043 9.29586 8.20945 9.12831 8.29956C9.05132 8.33985 8.94944 8.34983 8.87382 8.34032C8.81812 8.33035 8.77555 8.31586 8.70899 8.27692C8.57994 8.20174 8.49978 8.06001 8.49978 7.90651C8.49978 7.753 8.57994 7.61125 8.69405 7.54378ZM3.02054 21.7758L4.74582 6.96779C4.80061 6.48824 5.20634 6.12689 5.68951 6.12689H8.6619V7.06243C8.60076 7.08327 8.54099 7.10861 8.48122 7.14484C8.21314 7.30062 8.04695 7.59223 8.04695 7.90651C8.04695 8.22076 8.21314 8.5124 8.49978 8.67677C8.5831 8.73019 8.68001 8.76598 8.81314 8.78862C8.85615 8.79451 8.8951 8.79857 8.93903 8.79857C9.07578 8.79857 9.21752 8.76372 9.36876 8.68536C9.65812 8.52824 9.8311 8.23707 9.8311 7.90651C9.8311 7.57639 9.65812 7.28522 9.33888 7.11314C9.26959 7.07691 9.19306 7.05292 9.11473 7.03617V6.12689H14.8811V7.04159C14.7891 7.06334 14.7058 7.09369 14.6216 7.14484C14.3535 7.30062 14.1873 7.59223 14.1873 7.90651C14.1873 8.22076 14.3535 8.5124 14.6148 8.66455C14.7162 8.72793 14.8254 8.76869 14.9535 8.78862C14.9965 8.79451 15.0355 8.79857 15.0794 8.79857C15.2162 8.79857 15.3579 8.76372 15.5091 8.68492C15.6513 8.60748 15.765 8.49971 15.8175 8.4019C15.8469 8.36476 15.8723 8.32084 15.8782 8.30003C15.9081 8.24749 15.9235 8.2013 15.9357 8.15918C15.9593 8.07585 15.9715 7.99072 15.9715 7.90651C15.9715 7.82274 15.9593 7.73761 15.9357 7.65384C15.9235 7.61216 15.9081 7.56597 15.8918 7.54198C15.8723 7.49306 15.8479 7.44959 15.8374 7.44099C15.765 7.31374 15.6513 7.20551 15.4793 7.11314C15.434 7.08915 15.3837 7.07376 15.3339 7.05836V6.12689H18.314C18.7935 6.12689 19.1992 6.48915 19.2577 6.96823L20.9784 21.7771C21.0115 22.0466 20.9273 22.3174 20.7479 22.5202C20.5677 22.724 20.3078 22.8408 20.0352 22.8408H3.96876C3.69661 22.8408 3.43669 22.7245 3.25646 22.5211C3.07533 22.3183 2.98929 22.0461 3.02054 21.7758Z"
                strokeWidth="0.5"
              />
            </svg>

            {/* Profile */}
            <svg
              className="hidden lg:block text-xl lg:h-8 lg:w-8 cursor-pointer"
              viewBox="0 0 27 27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="13.8279"
                cy="9.22953"
                r="3.87661"
                strokeWidth="0.861469"
                strokeLinecap="round"
              />
              <path
                d="M6.65437 19.2659C7.36625 16.2575 10.3521 14.6133 13.4435 14.6133H14.2133C17.3047 14.6133 20.2905 16.2575 21.0024 19.2659C21.1401 19.848 21.2496 20.4571 21.3112 21.0761C21.3701 21.6679 20.8841 22.1512 20.2894 22.1512H7.36736C6.77264 22.1512 6.28667 21.6679 6.34556 21.0761C6.40715 20.4571 6.51663 19.848 6.65437 19.2659Z"
                strokeWidth="0.861469"
                strokeLinecap="round"
              />
            </svg>

            {/* Phone */}
            <svg
              className="hidden lg:block text-xl lg:h-6 lg:w-6 cursor-pointer"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0004 16.9201V19.9201C22.0016 20.1986 21.9445 20.4743 21.8329 20.7294C21.7214 20.9846 21.5577 21.2137 21.3525 21.402C21.1473 21.5902 20.905 21.7336 20.6412 21.8228C20.3773 21.912 20.0978 21.9452 19.8204 21.9201C16.7433 21.5857 13.7874 20.5342 11.1904 18.8501C8.77425 17.3148 6.72576 15.2663 5.19042 12.8501C3.5004 10.2413 2.44866 7.27109 2.12042 4.1801C2.09543 3.90356 2.1283 3.62486 2.21692 3.36172C2.30555 3.09859 2.44799 2.85679 2.63519 2.65172C2.82238 2.44665 3.05023 2.28281 3.30421 2.17062C3.5582 2.05843 3.83276 2.00036 4.11042 2.0001H7.11042C7.59573 1.99532 8.06621 2.16718 8.43418 2.48363C8.80215 2.80008 9.0425 3.23954 9.11042 3.7201C9.23704 4.68016 9.47187 5.62282 9.81042 6.5301C9.94497 6.88802 9.97408 7.27701 9.89433 7.65098C9.81457 8.02494 9.62928 8.36821 9.36042 8.6401L8.09042 9.9101C9.51398 12.4136 11.5869 14.4865 14.0904 15.9101L15.3604 14.6401C15.6323 14.3712 15.9756 14.1859 16.3495 14.1062C16.7235 14.0264 17.1125 14.0556 17.4704 14.1901C18.3777 14.5286 19.3204 14.7635 20.2804 14.8901C20.7662 14.9586 21.2098 15.2033 21.527 15.5776C21.8441 15.9519 22.0126 16.4297 22.0004 16.9201Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Location */}
            <svg
              className="text-xl h-5 w-5 lg:h-6 lg:w-6 cursor-pointer"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Search
              searchDropdownRef={searchDropdownRef}
              handelsearchbtn={handelsearchbtn}
            />
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

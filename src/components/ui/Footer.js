'use client'
import React, { useState } from "react";
import Link from "next/link";
// import TermsAndConditions from '../../app/gulz/Terms-and-Conditions';
// import PrivacyPolicy from '../../app/gulz/Privacy-Policy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faPinterestP, faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { usePathname } from "next/navigation"

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const pathName = usePathname()
  const [showPrivacy, setShowPrivacy] = useState(false);
  const date = new Date()
  
  const bgChange = ['/','/fazza','/festara']
  
  const imageMap = {
    "/": '/assets/homeLogo.png',
    "/fazza": '/assets/Fazza-logo.svg',
    "/festara": '/assets/Festara-Logo.svg',
  }

  const imageSrc = imageMap[pathName] || "/assets/eshop/Gulz-brown.svg"; 

  return (
    <div className = {`bg-black border-top border-[1px] border-black text-white font-gothic w-full pt-10`}> 
      <div className="min-h-[35vh] w-[80%]  lg:w-[85vw] mx-auto flex flex-col py-3 border-b border-white">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 md:px-8 lg:px-0 md:space-x-10">
          <div className="flex justify-center lg:justify-start items-center mb-1 md:mb-0">
            <div className="flex  justify-center items-center gap-2 ">
              {/* <div className=" h-16 sm:w-28 3xl:h-20 lg:w-24 pr-2">
                <img src={imageSrc || null} alt="logo" className="w-full h-full object-contain"/>
              </div>
              <Link href="/" className=" text-base sm:text-lg 3xl:text-3xl lg:text-xl xl:text-lg pl-3 border-l border-white ">
                QUEEN OF HEARTS
              </Link> */}
              <div className={`text-white items-center  flex justify-center gap-4`}>
  
              {/* Left Section - Queen of Hearts */}
              <div className="text-center">
              {/* <img src="/assets/eshop/logo_header.svg" className='relative h-10' alt="" /> */}

                <h1 className="text-sm text-nowrap sm:text-2xl font-bigilla   font-semibold tracking-wide">
                  Queen of <span className="relative">
                    Hearts        
                  </span>
                </h1>
                <p className="text-[7px] sm:text-[10px] ">
                  — THE JEWELS GALLERIA —
                </p>
              </div>

              {/* Divider Line */}
              <div className={`bg-white sm:h-12 h-8  w-[1px]`}></div>

              {/* Right Section - Khwaahish Branding */}
              <div className="text-center space-y-1">
                {/* <img src="/assets/eshop/from-the-house.svg" alt="" /> */}
                <p className="  font-gothic text-nowrap text-[8px] sm:text-[9px]  uppercase tracking-wide">
                  From The House of
                </p>
                <h2 className="font-bigilla tracking-wider text-[9px] sm:text-xs font-bold">
                  KHWAAHISH
                </h2>
                <p className="sm:text-[9px] text-nowrap text-[8px]  tracking-widest">
                  DIAMOND JEWELLERY
                </p>
              </div>

            </div>
            </div>
          </div>
          <div className="flex  flex-col gap-2 items-center md:items-start ">
            <h1 className="text-lg sm:text-xl 3xl:text-2xl md:text-[1.1rem]  tracking-normal sm:tracking-widest font-semibold mb-2">
              Contact Us             
            </h1>
            <div className="flex flex-col  items-center md:items-start gap-2">
              <div className="flex gap-1 items-center">
                {/* <FontAwesomeIcon icon={faPhone} className="text-sm 3xl:text-2xl  sm:text-base " /> */}
                <p className=" text-sm sm:text-[0.9rem] 3xl:text-2xl "><a href="tel:+919884039111"><span>Call Us: </span>+91 9884039111</a></p>
              </div>
              <div className="flex gap-1 items-center">
                {/* <FontAwesomeIcon icon={faEnvelope} className="text-sm  3xl:text-xl  sm:text-base " /> */}
                <p className=" text-sm sm:text-[0.9rem] 3xl:text-xl "> <a href='mailto:admin@khwaahish.com'><span>Email Us: </span>admin@khwaahish.com</a></p>
              </div>
              {/* <div className="flex gap-2 mt-2">
                <Link href="https://www.instagram.com/khwaahishdiamonds/?fbclid=IwAR0_UCtUEmZOzJTlxbIS5rWrWCF-1oDDlczHZU8dTUAOaVEHX2g4kbwco_A" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-base 3xl:text-3xl hover:scale-105  sm:text-2xl  px-1 cursor-pointer hover:opacity-80" />
                </Link>
                <Link href="https://www.facebook.com/khwaahishdiamondschennai" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} className="text-base sm:text-2xl hover:scale-105  3xl:text-3xl  px-1 cursor-pointer hover:opacity-80" />
                </Link>
                <Link href="https://www.youtube.com/channel/UCLI3kQ273vEJqY64yJ9rzDQ" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="text-base sm:text-2xl hover:scale-105  3xl:text-3xl px-1 cursor-pointer hover:opacity-80" />
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=919884039111&text=Hi%20Khwaahish%20Team,%20I%20am%20interested%20in%20visiting%20the%20store%20on%20an%20appointment%20basis.%20Please%20get%20in%20touch%20with%20me%20at%20the%20earliest." target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-base sm:text-2xl hover:scale-105  3xl:text-3xl px-1 cursor-pointer hover:opacity-80" />
                </Link>
              </div> */}
            </div>
          </div>
          {/* Store Address  */}
          <div className="flex  flex-col gap-1 items-center lg:items-start">
            <h1 className="text-lg sm:text-xl md:text-[1.1rem] 3xl:text-2xl tracking-normal sm:tracking-widest font-semibold mb-1">
              Store Address               
            </h1>
            <div className="flex flex-col md:items-start items-center gap-2">
              <div className="md:flex text-center gap-1 items-center">
             
              </div>
              <p className=" text-sm sm:text-[0.89rem] text-center 3xl:text-xl sm:text-center md:text-left lg:text-left tracking-widest leading-2">
                No: 53/2, C.P. Ramaswamy Road, Abiramapuram,Chennai, Tamil Nadu
                600018
              </p>
              <Link
                  href="https://www.google.com/search?q=khwaahish%20diamonds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-sm sm:text-[0.95rem] cursor-pointer 3xl:text-xl"
                >
                  <span className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#fff] after:transition-all after:duration-300 group-hover:after:w-full">
                    Show in Google Maps
                  </span>
                </Link>

            </div>
          </div>
          {/* Quick Links */}  
          <div className="flex flex-col gap-1 items-center lg:items-start">
            <h1 className="text-lg sm:text-xl md:text-[1.1rem] 3xl:text-2xl  tracking-normal sm:tracking-widest font-semibold mb-2">
              Quick Links              
            </h1>
            <div className="flex flex-col items-center md:items-start gap-3">
              <p          
                className=" text-sm sm:text-[0.9rem] 3xl:text-xl cursor-pointer relative group"
              >
                <span className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                Blog
  </span>
              </p>
              <p 
                className=" text-sm sm:text-[0.9rem]  3xl:text-xl cursor-pointer relative group"
               
              >
                <span className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                Our Story
  </span>
              </p>
              <p          
                className=" text-sm sm:text-[0.9rem] 3xl:text-xl cursor-pointer relative group"
                onClick={() => setShowPrivacy(true)}
              >
               <span className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
               Privacy Policy
  </span>
              </p>
              <p 
                className=" text-sm sm:text-[0.9rem]  3xl:text-xl cursor-pointer relative group"
              >
                 <span className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                 Contact Us
  </span>
              </p>
              <p
  className="text-sm sm:text-[0.9rem] 3xl:text-xl cursor-pointer relative group"
  onClick={() => setShowTerms(true)}
>
  <span className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
    Terms & Conditions
  </span>
</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-center my-10 justify-center gap-10">
      <FontAwesomeIcon icon={faXTwitter} width={20} className=" bg-white rounded-full text-black p-3 text-[16px]" />
      <FontAwesomeIcon icon={faPinterestP} width={20} className=" bg-white rounded-full text-black p-3 text-[16px]"  />
      <FontAwesomeIcon icon={faInstagram} width={20} className=" bg-white rounded-full text-black p-3 text-[16px]" />
      <FontAwesomeIcon icon={faFacebookF} width={20} className=" bg-white rounded-full text-black  p-3 text-[16px]" />
        </div>
      </div>
      <div className = "w-[85%]  mx-auto min-h-[15vh] sm:h-[20vh] flex flex-col md:my-6 lg:my-0 lg:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0 py-4">
        {/* <div className="h-full  w-full sm:w-7/12 lg:w-[360px] 3xl:w-1/4 flex justify-center sm:justify-start">
          <img
            className="w-full max-w-[250px] sm:max-w-none h-full object-contain"
            src="/assets/eshop/payment-logos.avif"
            alt="Payment methods"
          />
        </div> */}
        <div className=" w-full">
        <p className="font-light text-sm sm:text-base 3xl:text-xl 4xl:text-3xl text-center ">             
        @ <span>{date.getFullYear()}</span> KHWAAHISH INDIA LIMITED    
        </p>
        </div>
        
      </div>
    
    </div>
  );
};

export default Footer;

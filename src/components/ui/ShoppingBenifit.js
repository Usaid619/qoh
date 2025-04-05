import React from 'react'
import { FaShoppingCart, FaExchangeAlt, FaVideo, FaStar, FaClipboardList } from "react-icons/fa";
import { TbCalendarClock } from "react-icons/tb";

const benefits = [
  { title2: '10+1 ', title: "  MONTHLY INSTALMENT", description: "Purchase your desired jewelry with monthly rewards.", pos: "items-start" },

  { icon: <FaStar size={35} />, title: "REWARD POINTS", description: "Reward Points. Save more. Shop more.", pos: "items-end" },
  { icon: <FaVideo size={35} />, title: "VIDEO SHOPPING", description: "Now shop with us from anywhere.", pos: "items-start" },
  { title: "EXCHANGE ", title3: 'OLD ➝ NEW', description: "Get 100% Buy back on your old gold.", pos: "items-end" },

  { icon: <TbCalendarClock size={35} />, title: "FREE MAINTENANCE WARRANTY", description2: "Relax, enjoy your jewellery! We offer free product maintenance for a year.", pos: "items-start" },

];
const ShoppingBenifit = () => {
  return (

    <div className="text-center w-full flex flex-col md:gap-5 gap-4 font-gothic">
      <h2 className="uppercase text-2xl lg:text-4xl tracking-wide font-medium text-center">SHOPPING BENEFITS</h2>
      <p className="text-[13px] lg:text-xl 
 text-center">Exclusive deals, premium quality, and hassle-free shopping!</p>


      <div className="flex w-full flex-wrap justify-center mt-4 items-center md:gap-10 gap-3">
        <div className=' w-10/12 flex flex-wrap justify-center xl:justify-between mt-4  sm:gap-10 gap-2.5'>
          {benefits.map((benefit, index) => (
            <div key={index} className={` md:h-[320px] flex gap-6 md:${benefit.pos} items-start justify-center`}>
              <div
                className='border p-1 w-[125px] sm:w-[160px] h-[220px] sm:h-[235px] rounded-xl flex flex-col justify-center items-center border-gray-400 shadow-[inset_0_0_8px_rgba(255,255,255,0.4)]'>
                <h1 className="text-3xl ">{benefit.title2}</h1>
                {benefit.icon}
                <h3 className="mt-4 text-[12px] font-semibold text-gray-600 px-2 ">{benefit.title}</h3>
                <h3 className=" text-[12px] font-semibold text-gray-600 px-2 ">{benefit.title3}</h3>
                <p className="mt-4 text-[12px] px-4 text-gray-600 text-center">{benefit.description}</p>
                <p
                  style={{ lineHeight: "1.3" }}
                  className="text-[12px] px-4 text-gray-600 text-center">{benefit.description2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}


export default ShoppingBenifit

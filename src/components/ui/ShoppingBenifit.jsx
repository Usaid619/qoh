import React from 'react'
import { FaShoppingCart, FaExchangeAlt, FaVideo, FaStar, FaClipboardList } from "react-icons/fa";
import { TbCalendarClock } from "react-icons/tb";

const benefits = [
  { title2: '10+1 ', title: "  MONTHLY INSTALMENT", description: "Purchase your desired jewelry with monthly rewards.", pos: "items-start" },
  { icon: <FaStar size={24} />, title: "REWARD POINTS", description: "Reward Points. Save more. Shop more.", pos: "items-end" },
  { icon: <FaVideo size={24} />, title: "VIDEO SHOPPING", description: "Now shop with us from anywhere.", pos: "items-start" },
  { icon: <FaExchangeAlt size={24} />, title: "EXCHANGE OLD ➝ NEW", description: "Get 100% Buy back on your old gold.", pos: "items-end" },
  { icon: <FaClipboardList size={24} />, title: "MAKE A WISH", description: "Customize your jewellery with our design team.", pos: "items-start" },
  { icon: <TbCalendarClock size={24} />, title: "FREE MAINTENANCE WARRANTY", description: "Relax, enjoy your jewellery! We offer free product maintenance for a year.", pos: "items-end" },
];
const ShoppingBenifit = () => {
  return (
    <div className="text-center md:py-12 flex flex-col md:gap-10 gap-4">
      <h2 className="md:text-[48px] text-[20px]  tracking-wide ">SHOPPING BENEFITS</h2>
      <p className="text-gray-500 md:text-[20px] tracking-wide ">Exclusive deals, premium quality, and hassle-free shopping!</p>

      <div className="flex flex-wrap justify-center items-center md:gap-10 gap-3 md:max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className={` h-[320px] flex gap-6 md:${benefit.pos} items-start justify-center`}>
            <div
              style={{
                background: "radial-gradient(circle, white, #e5e7eb)",
              }}
              className='border p-1 w-[160px] h-[235px] rounded-xl flex flex-col justify-center items-center border-gray-400'>
              <h1 className="text-3xl ">{benefit.title2}</h1>
              {benefit.icon}
              <h3 className="mt-4 text-sm font-semibold ">{benefit.title}</h3>
              <p className="text-sm text-gray-600 text-center">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}


export default ShoppingBenifit

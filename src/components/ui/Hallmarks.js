"use client";

import CertificationMarquee from "./CertificationMarquee";
import { usePathname } from "next/navigation";

const Hallmarks = ({data}) => {
  const pathname = usePathname();
  // console.log(data)

  return (
    <div
      className={`bg-gray-200 text-gray-500 flex flex-col items-center gap-2 py-8
      escape
      md:gap-6 w-full
      `}
    >
      <span
        className="text-center font-normal w-full md:max-w-[90%] px-5
      
       typo-body"
      >
        All our jewels are BIS Hallmarked and studded with natural diamonds certified by International Gemmological Institutes.
      </span>
      <CertificationMarquee options={{ loop: true }} />
    </div>
  );
};

export default Hallmarks;

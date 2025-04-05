'use client'

import CertificationMarquee from './CertificationMarquee';
// import CtaButton from './CtaButton';
import { usePathname } from 'next/navigation';

const slides=[{
  imageUrl:"/assets/images/certifications/certification-1.png"},
  {imageUrl:"/assets/images/certifications/certification-2.png"},
  {imageUrl:"/assets/images/certifications/certification-3.png"},
  {imageUrl:"/assets/images/certifications/certification-4.png"},
  {imageUrl:"/assets/images/certifications/certification-5.png"},
  {imageUrl:"/assets/images/certifications/certification-6.png"}]


const Hallmarks = () => {
  const pathName = usePathname()
  // const {desc,images} = hallmarkData
  
  const pathname = usePathname()

  return (
    <div className={`bg-[#f5f3f3] text-gray-600 flex flex-col items-center gap-4 py-8 w-full `}>
      <span className='max-w-[1280px] 4xl:text-3xl text-center text-[15px] md:text-lg font-normal 3xl:text-[25px]  leading-[1.8] tracking-[1.3px] md:max-w-[80%] px-10'>
        All our jewels are BIS Hallmarked and studded with natural diamonds certified by International Gemmological Institutes. 
      </span>
      <CertificationMarquee slides={slides} options={{ loop: true }} />
      {/* <CtaButton text={"About Us"}/> */}
    </div>
  );
};

export default Hallmarks;

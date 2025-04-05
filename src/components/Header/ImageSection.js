import Image from "next/image";

const ImageSection = ({ hoveredCatUrl }) => {
  return (
    <div className="flex items-center justify-center max-h-[280px] overflow-hidden rounded-md">
      <Image
        height={280}
        width={825}
        alt="Category Image"
        className="object-contain max-h-[280px] w-auto"
        src={hoveredCatUrl || "/"}
        priority
      />
    </div>
  );
};

export default ImageSection;

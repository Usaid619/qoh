import Image from "next/image";

const ImageSection = ({ hoveredCatUrl }) => {
  return (
    <div className="h-full ">
          <Image
            height={280}
            width={825}
            alt={"Category Image"}
            className="h-full w-full object-cover"
            src={hoveredCatUrl || "/"}
            priority />
    </div>
  );
};

export default ImageSection;

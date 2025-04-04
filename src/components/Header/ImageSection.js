import Image from "next/image";

const ImageSection = ({ hoveredItem }) => {
  return (
    // <div className="h-full w-3/5">
    //   {
    //     hoveredItem?.nav_image && (
    //       <Image
    //         height={280}
    //         width={825}
    //         alt={hoveredItem?.name ? hoveredItem.name : "Image"}
    //         className="h-full w-full object-cover"
    //         src={hoveredItem?.nav_image?.url ? hoveredItem.nav_image.url : null}
    //         priority />
    //     )
    //   }
    // </div>
    <div className="h-full ">
          <Image
            height={280}
            width={825}
            alt={hoveredItem?.name ? hoveredItem.name : "Image"}
            className="h-full w-full object-cover"
            src="/assets/images/header/dropdown/jewellery.png"
            priority />
    </div>
  );
};

export default ImageSection;

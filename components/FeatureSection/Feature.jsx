import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
const Feature = ({ img, alt, h2, p, width, height }) => {
  return (
    <div
      className="text-center md:text-left md:relative md:first:top-0 md:top-[44px] md:last:top-[88px]  flex flex-col items-center md:items-start px-4 md:px-[33px] pb-8 
      rounded-[5px] pt-0 bg-white mt-[44px] first:mt-[55px] md:first:mt-[44px]"
    >
      <div
        className="bg-[hsl(257,27%,26%)] w-[88px] h-[88px] rounded-full flex items-center justify-center
        relative top-[-44px]"
      >
        <Image src={img} alt={alt} width={width} height={height} priority />
      </div>
      <h2 className="text-[hsl(255,11%,22%)] font-bold relative top-[-16px] mt-[6px] text-[20px]">
        {h2}
      </h2>
      <p className="text-[hsl(0,0%,75%)] text-[14px] md:text-[16px] mb-[8px]">
        {p}
      </p>
    </div>
  );
};

export default Feature;

import Image from "next/image";
import Button from "../buttons/Button";

const MainHeader = () => {
  return (
    <div className="md:flex max-w-[1110px] md:w-screen m-auto mb-[5.25rem]">
      <div
        className="relative w-[130vw] m-auto order-2 md:left-[15rem] max-w-[640px]
        md:max-w-[655px]"
      >
        <Image
          src="/illustration-working.svg"
          layout="responsive"
          width={812}
          height={600}
          alt="person sitting on the desk and working in the pc"
          as="image"
          priority
        />
      </div>
      <div className="text-center justify-self-start self-center md:text-left flex flex-col items-center justify-center md:items-start gap-5">
        <h1 className="font-bold text-fontClamp cmd:leading-[4.5rem] text-[hsl(255,11%,22%)] mt-[2rem]">
          More than just <br /> shorter links
        </h1>
        <p className="text-[17px] text-[hsl(0,0%,75%)] md:max-w-[500px]">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <Button name="Get Started" style="w-[100%] p-[12px] max-w-[197px]" />
      </div>
    </div>
  );
};
export default MainHeader;

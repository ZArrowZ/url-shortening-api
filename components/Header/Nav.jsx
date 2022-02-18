import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./NavLinks";
import Image from "next/image";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="py-10 flex justify-between items-center relative mx-auto max-w-[1110px] md:py-6">
        <div className="mr-[32px]">
          <Image
            src="/logo.svg"
            alt="shortly logo"
            width={121}
            height={33}
            className="select-none cursor-pointer"
          />
        </div>
        <NavLinks
          style="hidden md:flex md:w-full md:justify-between"
          btnStyle="gap-[38px] flex items-center"
        />
        <GiHamburgerMenu
          className="text-[#9d9ca2] w-[28px] h-[24px] cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        />
      </nav>
      <NavLinks
        style={`${
          isMenuOpen ? "scale-y-0" : "scale-y-100"
        } z-20 select-none origin-top flex md:hidden bg-[#3B3054] flex-col rounded-[8px] items-center 
        duration-100 px-[24px] absolute w-[calc(100%-48px)] py-[40px] text-white text-center top-[6rem]`}
        btnStyle="flex flex-col border-t-[1px] border-t-[#544a6d] w-full items-center"
      />
    </>
  );
};

export default Nav;

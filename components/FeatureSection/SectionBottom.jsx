import Button from "./../buttons/Button";

const SectionBottom = () => {
  return (
    <section
      className="bg-[hsl(257,27%,26%)] bg-[url(/bg-boost-mobile.svg)] md:bg-[url(/bg-boost-desktop.svg)] bg-cover py-[90px]  md:pb-[48px] md:pt-[38px] flex flex-col justify-center
      items-center text-white"
    >
      <h2 className="text-[24px] md:text-[42px] font-bold my-[18px]">
        Boost your links today
      </h2>
      <Button
        name="Get Started"
        style="w-full text-[18px] p-[12px] max-w-[197px]"
      />
    </section>
  );
};

export default SectionBottom;

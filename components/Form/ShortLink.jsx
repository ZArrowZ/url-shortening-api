import { useState } from "react";

const ShortLink = ({ link }) => {
  const { original_link, full_short_link } = link.result;
  const [buttonText, setButtonText] = useState("copy");

  const handleLinkCopy = (button) => {
    navigator.clipboard.writeText(full_short_link);
    button.classList.remove("bg-[#2ACFCF]");
    button.classList.add("bg-[hsl(257,27%,26%)]");
    setButtonText("copied!");

    setTimeout(() => {
      button.classList.add("bg-[#2ACFCF]");
      button.classList.remove("bg-[hsl(257,27%,26%)]");
      setButtonText("copy");
    }, 1000);
  };
  return (
    <div className="bg-white max-w-[1110px] m-auto md:py-[16px] md:px-[24px] md:pl-[33px] flex flex-col md:flex-row rounded-[6px] w-full items-start md:justify-between md:items-center">
      <a className="m-[16px] md:m-0 mb-[12px] max-w-[calc(100%-32px)] md:w-full whitespace-nowrap overflow-hidden text-ellipsis">
        {original_link}
      </a>
      <div className="flex items-start md:items-center md:justify-end flex-col md:flex-row w-full p-[16px] md:p-0 border-t-[1px] md:border-0 gap-[14px] text-[#2ACFCF]">
        <a className="max-w-[calc(100%)] whitespace-nowrap overflow-hidden text-ellipsis">
          {full_short_link}
        </a>
        <button
          className="bg-[#2ACFCF] w-full md:w-[103px] p-2 text-white rounded-[4px] md:hover:bg-[#9be3e2] duration-300 disabled:hover:bg-[hsl(257,27%,26%)]"
          onClick={(e) => handleLinkCopy(e.target)}
          disabled={buttonText !== "copy" ? true : false}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ShortLink;

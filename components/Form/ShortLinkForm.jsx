import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import handleFormSubmit from "./handleFormSubmit";
import ShortenedLinks from "./ShortenedLinks";

const KEY = "shortenedLink";
const ShortLinkForm = () => {
  const [errorMassage, setErrorMassage] = useState("");
  const [shortLinks, setShortLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedValue = JSON.parse(localStorage.getItem(KEY));
    if (savedValue) {
      setShortLinks(savedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(shortLinks));
  }, [shortLinks]);

  return (
    <section className="px-[24px]">
      <form
        onSubmit={(e) =>
          handleFormSubmit(
            e,
            shortLinks,
            setLoading,
            setShortLinks,
            setErrorMassage
          )
        }
        className={`bg-[hsl(257,27%,26%)] bg-[url(/bg-shorten-mobile.svg)] md:bg-[url(/bg-shorten-desktop.svg)] md:bg-cover 
        bg-no-repeat bg-right-top rounded-[8px] flex flex-col max-w-[1110px] mx-auto p-[24px] items-center justify-center
        md:flex-row md:gap-x-[24px] md:py-[52px] md:px-[64px] md:grid md:grid-cols-[1fr_188px] box-border relative top-[-79.5px] md:top-[-84px] ${
          errorMassage && "md:pb-[29px]"
        }`}
      >
        <input
          className="w-full rounded-[4px] p-2 outline-none min-h-[48px] md:min-h-[64px] pl-[30px] "
          type="text"
          placeholder="Shorten a link here..."
          name="shortLikInput"
        />
        {errorMassage && (
          <div className="text-[hsl(0,87%,67%)] italic text-[14px] self-start mt-[2px] md:order-3">
            {errorMassage}
          </div>
        )}
        <button
          type="submit"
          className="bg-[#2ACFCF] text-center flex justify-center items-center w-[100%] p-2 px-[16px] text-white rounded-[4px]
        md:hover:bg-[#9be3e2] md:min-h-[64px] duration-300 mt-[15px] min-h-[48px] disabled:bg-[#9be3e2] md:mt-0"
          disabled={loading ? true : false}
        >
          {loading ? (
            <CgSpinner className="animate-spin text-[22px]" />
          ) : (
            "shorten it!"
          )}
        </button>
      </form>
      {shortLinks.length > 0 && <ShortenedLinks shortLinks={shortLinks} />}
    </section>
  );
};
export default ShortLinkForm;

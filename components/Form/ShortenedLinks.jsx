import ShortLink from "./ShortLink";

const ShortenedLinks = ({ shortLinks }) => {
  return (
    <div className="relative top-[-57px] flex flex-col gap-[24px]">
      {shortLinks.map((link) => (
        <ShortLink key={link.result.code} link={link} />
      ))}
    </div>
  );
};
export default ShortenedLinks;

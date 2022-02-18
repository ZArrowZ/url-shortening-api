/* eslint-disable @next/next/no-img-element */

const SocialLink = ({ href, d }) => {
  return (
    <a href={href} className="cursor-pointer" rel="noreferrer" target="_blank">
      <svg
        className="fill-white md:hover:fill-[hsl(180,66%,49%)] md:duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
      >
        <path d={d} />
      </svg>
    </a>
  );
};

export default SocialLink;

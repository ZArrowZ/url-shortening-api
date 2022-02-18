import Button from "../buttons/Button";

const NavLinks = ({ style, btnStyle }) => {
  return (
    <div className={style}>
      <ul
        className="space-y-[40px] md:flex md:flex-rows md:space-y-0 md:items-center 
      md:justify-between md:gap-[32px]"
      >
        <li className="listItem">
          <a>Features</a>
        </li>
        <li className="listItem">
          <a>Pricing</a>
        </li>
        <li className="pb-[32px] md:pb-0 listItem">
          <a>Resources</a>
        </li>
      </ul>
      <div className={btnStyle}>
        <a className="listItem my-[32px]">Login</a>
        <Button name="Sign Up" style="w-[100%] p-2 px-[16px]" />
      </div>
    </div>
  );
};
export default NavLinks;

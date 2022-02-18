const Button = ({ name, style }) => {
  return (
    <a
      className={`${style} cursor-pointer text-white bg-[#2ACFCF] rounded-[28px] md:hover:bg-[#9be3e2] duration-300 text-center`}
    >
      {name}
    </a>
  );
};
export default Button;

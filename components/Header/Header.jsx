import Nav from "./Nav";
import MainHeader from "./MainHeader";

const Header = () => {
  return (
    <header className="px-[24px] relative pb-[5.5rem] bg-white">
      <Nav />
      <MainHeader />
    </header>
  );
};
export default Header;

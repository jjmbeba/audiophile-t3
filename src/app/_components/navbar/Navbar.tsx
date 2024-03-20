import Logo from "../common/Logo";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-black px-6 py-8 text-white">
      <MobileMenu />
      <Logo />
      <Cart />
    </div>
  );
};

export default Navbar;

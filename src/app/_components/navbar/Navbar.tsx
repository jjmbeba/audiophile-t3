import { currentUser } from "@clerk/nextjs";
import Logo from "../common/Logo";
import NavLinks from "../common/NavLinks";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";
import User from "./User";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-between bg-black px-6 py-8 text-white lg:px-[10.3125rem]">
      <MobileMenu />
        <Logo className="md:hidden" />
      <NavLinks className="hidden lg:flex" />
      {user?.id ? <Cart /> : <User />}
    </div>
  );
};

export default Navbar;

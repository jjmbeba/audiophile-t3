import { currentUser } from "@clerk/nextjs";
import Logo from "../common/Logo";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";
import User from "./User";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-between bg-black px-6 py-8 text-white">
      <MobileMenu />
      <Logo className="md:hidden" />
      {user?.id ? <Cart /> : <User />}
    </div>
  );
};

export default Navbar;

import { SignInButton, SignUpButton, currentUser } from "@clerk/nextjs";
import Logo from "../Logo";
import NavLinks from "../NavLinks";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";
import User from "./User";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { MoveRight } from "lucide-react";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-between bg-black px-6 py-8 text-white lg:px-[10.3125rem]">
      <MobileMenu />
      <Logo className="md:hidden" />
      <NavLinks className="hidden lg:flex" />
      {user?.id ? (
        <Cart />
      ) : (
        <>
          {/* <Link href={"/signup"} className="md:hidden">
            <User />
          </Link> */}
          <div  className="lg:hidden">
            <SignUpButton mode="modal">
              <User />
            </SignUpButton>
          </div>
          <div className="lg:flex items-center gap-2 hidden">
            <SignUpButton mode="modal">
              <Button className="rounded-[0.3rem] bg-white px-2 py-1 capitalize text-black">
                <MoveRight className="mr-2 h-4 w-4" />
                Get started
              </Button>
            </SignUpButton>
            {/* <SignInButton mode="modal">
              <Button className="rounded-[0.3rem] px-4 py-3 capitalize text-white bg-transparent" variant={'outline'}>
                Login</Button>
            </SignInButton> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

import {
  ClerkLoading,
  SignInButton,
  SignUpButton,
  UserButton,
  currentUser,
} from "@clerk/nextjs";
import Logo from "../Logo";
import NavLinks from "../NavLinks";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";
import User from "./User";
import { Link } from "next-view-transitions";
import { Button } from "~/components/ui/button";
import { MoveRight } from "lucide-react";
import { Skeleton } from "~/components/ui/skeleton";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-between bg-black px-6 py-8 text-white lg:px-[10.3125rem]">
      <MobileMenu />
      <Logo className="md:hidden" />
      <NavLinks className="hidden lg:flex" />
      {user?.id ? (
        <div className="flex items-center gap-4">
          <Cart />
          <div className="h-8 w-8">
            <ClerkLoading>
              <Skeleton className="h-8 w-8 rounded-full bg-gray-700" />
            </ClerkLoading>
            <UserButton />
          </div>
        </div>
      ) : (
        <>
          <div className="lg:hidden">
            <SignUpButton mode="modal">
              <User />
            </SignUpButton>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <SignUpButton mode="modal">
              <Button className="rounded-[0.3rem] bg-white px-2 py-1 capitalize text-black">
                <MoveRight className="mr-2 h-4 w-4" />
                Get started
              </Button>
            </SignUpButton>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import { Separator } from "~/components/ui/separator";
import { Skeleton } from "~/components/ui/skeleton";

import { useSearchParams } from "next/navigation";

import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const ThankYouModal = () => {
  const searchParams = useSearchParams();

  const paymentStatus = searchParams.get("status");
  const [open, setOpen] = useState(paymentStatus === "success");

  const { width, height } = useWindowSize();

  console.log("Window width: ", width);
  console.log("Window height: ", height);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Confetti width={width - 500} height={height} />
      <DialogContent className="max-w-[20.4375rem] p-8 md:max-w-[33.75rem]">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
          <Check className="h-[80%] w-[80%] text-white" />
        </div>
        <h5 className="text-left">
          THANK YOU <br /> FOR YOUR ORDER
        </h5>
        <p className="text-[#808080]">
          You will receive an email confirmation shortly.
        </p>
        <div className="rounded-[0.5rem] bg-[#f1f1f1] pt-[1.9375rem] *:px-6 md:flex md:pt-0 *:md:w-1/2">
          <div>
            <CartSummary />
            <Separator className="mx-6 mt-4 md:mx-0" />
            <p className="mt-3 pb-[1.75rem] text-center text-[#797979]">
              and 2 other item(s)
            </p>
          </div>
          <div className="rounded-b-[0.5rem] bg-black pb-[1.375rem] pt-[1.375rem] md:rounded-b-none md:rounded-r-[0.5rem]">
            <p className="text-[#808080]">GRAND TOTAL</p>
            <h6 className="mt-[1.3125rem] text-white">$ 5,446</h6>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const CartSummary = () => {
  return (
    <div className="flex gap-[1.6875rem] md:pt-[1.9375rem]">
      <Skeleton className="h-14 w-14 rounded-[0.5rem]" />
      <div className="flex flex-1 justify-between">
        <div className="flex flex-col items-start font-bold ">
          <p>XX99 MK II</p>
          <p className="text-[#797979]">$ 2,999</p>
        </div>
        <p className="text-[#797979]">x1</p>
      </div>
    </div>
  );
};

export default ThankYouModal;

import React from "react";
import { Skeleton } from "~/components/ui/skeleton";

const CartSummary = () => {
  return (
    <div className="mx-[1.625rem] mb-[6.125rem] mt-8 rounded-[0.5rem]bg-white px-3 py-6 lg:mx-[10.3125rem]">
      <h6>SUMMARY</h6>
      <div className="mt-9 flex flex-col gap-6">
        <CartSummaryItem />
        <CartSummaryItem />
      </div>
      <CheckoutPriceSummary />
    </div>
  );
};

const CartSummaryItem = () => {
  return (
    <div className="flex items-center">
      <Skeleton className="h-16 w-16 rounded-[0.5rem] bg-gray-500 object-contain" />
      <div className="flex flex-1 items-center justify-between">
        <div className="ml-4 flex flex-col items-start">
          <p className="text-left font-bold text-black">XX99 MK II</p>
          <p className="text-[0.875rem] text-[#808080]">$2,999</p>
        </div>
      </div>
      <p className="text-[#808080]">x1</p>
    </div>
  );
};

const CheckoutPriceSummary = () => {
  return (
    <div className="mt-[2.4375rem]">
      <CheckoutPriceStat name="TOTAL" price={5396} />
      <CheckoutPriceStat name="SHIPPING" price={50} />
      <CheckoutPriceStat name="VAT (INCLUDED)" price={1079} />
      <CheckoutPriceStat name="GRAND TOTAL" price={5446} isGrandTotal/>
    </div>
  );
};

const CheckoutPriceStat = ({
  name,
  price,
  isGrandTotal,
}: {
  name: string;
  price: number;
  isGrandTotal?: boolean;
}) => {
  return (
    <div className={` flex items-center justify-between text-[#808080] ${isGrandTotal ? 'mt-[2.25rem]' : ''}`}>
      {name} <h6 className={isGrandTotal ? 'text-primary' : 'text-black'}>$ {price.toLocaleString()}</h6>
    </div>
  );
};

export default CartSummary;

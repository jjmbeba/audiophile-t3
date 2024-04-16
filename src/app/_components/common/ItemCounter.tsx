"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "~/components/ui/button";

type Props = {
  name: string;
  price: number;
  image: string;
  id: number;
  shortName: string;
};

const ItemCounter = ({ id, image, name, price, shortName }: Props) => {
  const [count, setCount] = useState(1);

  const { addItem } = useShoppingCart();
  return (
    <div className="mt-[2.3125rem] flex items-center gap-[1rem]">
      <div className="flex max-w-[7.5rem] items-center justify-center overflow-x-hidden bg-[#f1f1f1] *:bg-transparent">
        <Button
          className="px-5 py-4 text-[#b5b5b5]"
          onClick={() => {
            if (count > 1) {
              setCount((prev) => prev - 1);
            }
          }}
          disabled={count <= 1}
        >
          -
        </Button>
        <p>{count}</p>
        <Button
          className="px-5 py-4 text-[#b5b5b5]"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </Button>
      </div>
      <Button
        onClick={() => {
          addItem(
            {
              name,
              id: "price_1P621JDEPSRRihmXXMcLMkrj",
              price,
              image,
              currency: "USD",
            },
            {
              count,
              product_metadata: {
                shortName: shortName,
              },
            },
          );

          toast.success(`${name} added to cart`);
        }}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default ItemCounter;

"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { useCartStore } from "~/store/cartStore";

type Props = {
  name: string;
  price: number;
  image: string;
  id: number;
  shortName:string;
};

const ItemCounter = ({ id, image, name, price, shortName }: Props) => {
  const [count, setCount] = useState(1);

  const [cart, updateProducts, addProduct] = useCartStore((state) => [
    state.cart,
    state.updateProducts,
    state.addProduct,
  ]);

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
          const foundProduct = cart.find((product) => product.id === id);

          if (foundProduct) {
            const updatedProducts = cart.map((product) => {
              if (product.id === id) {
                return {
                  ...product,
                  quantity: product.quantity + count,
                };
              } else {
                return product;
              }
            });

            updateProducts(updatedProducts);
            toast.success(`${name} quantity updated successfully`);
          } else {
            addProduct({
              id,
              name,
              image,
              quantity: count,
              price,
              shortName
            });

            toast.success(`${count} ${name} added to cart`);
          }
        }}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default ItemCounter;

"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

import React from "react";
import { Ghost, ShoppingCart } from "lucide-react";
import { Button } from "~/components/ui/button";
import { ProductWithQuantity, useCartStore } from "~/store/cartStore";
import { toast } from "sonner";
import { Skeleton } from "~/components/ui/skeleton";
import { useCartActions } from "~/store/actions";

const Cart = () => {
  const [cart, clearCart] = useCartStore((state) => [
    state.cart,
    state.clearCart,
  ]);

  const { numberOfItems, totalPrice } = useCartActions();

  return (
    <Dialog>
      <DialogTrigger>
        <ShoppingCart className="h-6 w-6" />
      </DialogTrigger>
      <DialogContent className="max-w-[20.4375rem] rounded-[0.5rem]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <h6>CART({numberOfItems})</h6>
            <Button
              onClick={() => {
                clearCart();
                toast.info("Cart has been cleared");
              }}
              variant={"link"}
              className="capitalize text-[#808080]"
            >
              Remove all
            </Button>
          </DialogTitle>
          <DialogDescription className="mt-9 flex flex-col gap-6">
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} {...cartItem} />
            ))}
            {cart.length === 0 ? (
              <div className="mt-6 flex items-center justify-center gap-3">
                <Ghost className="h-8 w-8" />
                It&apos;s pretty lonely here.
              </div>
            ) : (
              <div className="mt-[2.4375rem] flex items-center justify-between text-[#808080]">
                TOTAL{" "}
                <h6 className="text-black">$ {totalPrice.toLocaleString()}</h6>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {cart.length > 0 && <Button>Checkout</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const CartItem = ({ id, price, quantity, shortName }: ProductWithQuantity) => {
  const { increaseCartItemQuantity, decreaseCartItemQuantity } =
    useCartActions();

  return (
    <div className="flex items-center">
      <Skeleton className="h-16 w-16 rounded-[0.5rem] bg-gray-500 object-contain" />
      <div className="flex flex-1 items-center justify-between">
        <div className="ml-4 flex flex-col items-start">
          <p className="text-left font-bold text-black">{shortName}</p>
          <p className="text-[0.875rem] text-[#808080]">
            ${price.toLocaleString()}
          </p>
        </div>
        <div className="flex max-w-[6rem] items-center justify-center overflow-x-hidden bg-[#f1f1f1] *:bg-transparent">
          <Button
            className="px-4 py-3 text-[#b5b5b5]"
            onClick={() => {
              decreaseCartItemQuantity({ id });
            }}
            disabled={quantity < 2}
          >
            -
          </Button>
          <p>{quantity}</p>
          <Button
            className="px-4 py-3 text-[#b5b5b5]"
            onClick={() => {
              increaseCartItemQuantity({ id });
            }}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

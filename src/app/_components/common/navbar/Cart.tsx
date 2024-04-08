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

const Cart = () => {
  const [cart, clearCart] = useCartStore((state) => [
    state.cart,
    state.clearCart,
  ]);

  return (
    <Dialog>
      <DialogTrigger>
        <ShoppingCart className="h-6 w-6" />
      </DialogTrigger>
      <DialogContent className="max-w-[20.4375rem] rounded-[0.5rem]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <h6>CART({cart.length})</h6>
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
            {cart.length === 0 && (
              <div className="mt-6 flex items-center justify-center gap-3">
                <Ghost className="h-8 w-8" />
                It&apos;s pretty lonely here.
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

const CartItem = ({
  id,
  image,
  name,
  price,
  quantity,
}: ProductWithQuantity) => {
  return (
    <div className="flex items-center justify-between">
      <Skeleton className="h-16 w-16 rounded-[0.5rem] bg-gray-500" />
      <div className="flex flex-col items-start">
        <p className="font-bold text-black">{name}</p>
        <p className="text-[0.875rem]">${price.toLocaleString()}</p>
      </div>
      <div className="flex max-w-[7.5rem] items-center justify-center overflow-x-hidden bg-[#f1f1f1] *:bg-transparent">
        <Button
          className="px-5 py-4 text-[#b5b5b5]"
          onClick={() => {
            console.log("clicked");
          }}
        >
          -
        </Button>
        <p>{quantity}</p>
        <Button
          className="px-5 py-4 text-[#b5b5b5]"
          onClick={() => {
            console.log("clicked");
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Cart;

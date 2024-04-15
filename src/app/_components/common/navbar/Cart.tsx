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

import { Ghost, ShoppingCart, Trash } from "lucide-react";
import { toast } from "sonner";
import { useShoppingCart } from "use-shopping-cart";
import { CartEntry } from "use-shopping-cart/core";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";

interface ProductWithQuantity {
  quantity: number;
  name: string;
  price: number;
  image: string;
  id: string;
  shortName: string;
}

const Cart = () => {

  const { cartCount, cartDetails, clearCart, totalPrice } = useShoppingCart();

  return (
    <Dialog>
      <DialogTrigger>
        <ShoppingCart className="h-6 w-6" />
      </DialogTrigger>
      <DialogContent className="max-w-[20.4375rem] rounded-[0.5rem] md:max-w-[29.5625rem]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <h6>CART({cartCount})</h6>
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
            {Object.values(cartDetails ?? {}).map((cartItem: CartEntry) => {
              const productData = cartItem.product_data as
                | { shortName: string }
                | undefined;
              const shortName = productData?.shortName || ""; // Providing a default value if product_data is undefined

              return (
                <CartItem
                  key={cartItem.id}
                  {...cartItem}
                  image={cartItem.image!}
                  shortName={shortName}
                />
              );
            })}

            {cartCount === 0 ? (
              <div className="mt-6 flex items-center justify-center gap-3">
                <Ghost className="h-8 w-8" />
                It&apos;s pretty lonely here.
              </div>
            ) : (
              <div className="mt-[2.4375rem] flex items-center justify-between text-[#808080]">
                TOTAL <h6 className="text-black">$ {totalPrice}</h6>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {cartCount! > 0 && <Button>Checkout</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const CartItem = ({ id, price, quantity, shortName, name }: CartEntry) => {
  const { decrementItem, incrementItem, removeItem } = useShoppingCart();

  return (
    <div className="flex items-center">
      <Skeleton className="h-16 w-16 rounded-[0.5rem] bg-gray-500 object-contain" />
      <div className="flex flex-1 items-center justify-between">
        <div className="ml-4 flex flex-col items-start">
          <p className="text-left font-bold text-black">{shortName}</p>
          <p className="text-[0.875rem] text-[#808080]">${price}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex max-w-[6rem] items-center justify-center overflow-x-hidden bg-[#f1f1f1] *:bg-transparent">
            <Button
              className="px-4 py-3 text-[#b5b5b5]"
              onClick={() => {
                decrementItem(id);
              }}
              disabled={quantity < 2}
            >
              -
            </Button>

            <p>{quantity}</p>
            <Button
              className="px-4 py-3 text-[#b5b5b5]"
              onClick={() => {
                incrementItem(id);
              }}
            >
              +
            </Button>
          </div>
          <Button
            variant={"secondary"}
            className="rounded-[0.5rem] capitalize text-[#808080]"
            onClick={() => {
              removeItem(id);
              toast.info(`${name} has been removed from cart`)
            }}
            size={"icon"}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

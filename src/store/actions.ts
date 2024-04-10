import { useEffect } from "react";
import { useCartStore } from "./cartStore";

export const useCartActions = () => {
  const cart = useCartStore.getState().cart;
  const increaseCartItemQuantity = ({ id }: { id: number }) => {
    const newCartItems = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      } else {
        return cartItem;
      }
    });

    useCartStore.setState({
      cart: newCartItems,
    });
  };

  const decreaseCartItemQuantity = ({ id }: { id: number }) => {
    const newCartItems = cart.map((cartItem) => {
      if (cartItem.id === id && cartItem.quantity > 1) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      } else {
        return cartItem;
      }
    });

    useCartStore.setState({
      cart: newCartItems,
    });
  };

  const numberOfItems = cart.reduce((acc, item) => item.quantity + acc, 0);

  const totalPrice = cart.reduce(
    (acc, item) => item.quantity * item.price + acc,
    0,
  );

  return {
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    numberOfItems,
    totalPrice,
  };
};

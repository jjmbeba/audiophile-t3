import { useEffect } from "react";
import { useCartStore } from "./cartStore";

export const useCartActions = () => {
  const increaseCartItemQuantity = ({ id }: { id: number }) => {
    const cart = useCartStore.getState().cart;

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
    const cart = useCartStore.getState().cart;

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

  return { increaseCartItemQuantity, decreaseCartItemQuantity };
};

import { useCartStore } from "./cartStore";

type Props = {
  id: number;
};

export const increaseCartItemQuantity = ({ id }: Props) => {
  const [cart] = useCartStore((state) => [state.cart]);

  console.log(cart)

};

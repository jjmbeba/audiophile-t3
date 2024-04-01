import { create } from "zustand";
import { Product } from "~/app/_components/products/ProductCard";

export interface ProductWithQuantity {
  quantity: number;
  name: string;
  price: number;
  image: string;
  id: number;
}

interface CartState {
  cart: ProductWithQuantity[];
  updateProducts: (updatedProducts: ProductWithQuantity[]) => void;
  addProduct:(newProduct:ProductWithQuantity) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  cart: [],
  updateProducts: (updatedProducts) =>
    set((state) => ({
      cart: [...updatedProducts],
    })),
    addProduct: (newProduct) => set((state) => ({
      cart:[...state.cart, newProduct]
    }))
}));

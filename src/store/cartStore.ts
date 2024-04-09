import { create } from "zustand";

export interface ProductWithQuantity {
  quantity: number;
  name: string;
  price: number;
  image: string;
  id: number;
  shortName: string;
}

interface CartState {
  cart: ProductWithQuantity[];
  updateProducts: (updatedProducts: ProductWithQuantity[]) => void;
  addProduct: (newProduct: ProductWithQuantity) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()((set) => ({
  cart: [],
  updateProducts: (updatedProducts) =>
    set((state) => ({
      cart: [...updatedProducts],
    })),
  addProduct: (newProduct) =>
    set((state) => ({
      cart: [...state.cart, newProduct],
    })),
  clearCart: () =>
    set((state) => ({
      cart: [],
    })),
}));

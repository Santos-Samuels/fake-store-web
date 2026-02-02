import { Product } from "~/shared/interfaces";

export interface CartItem extends Product {
  quantity: number;
}

export interface ProductCartState {
  items: CartItem[];
  isOpen: boolean;
}

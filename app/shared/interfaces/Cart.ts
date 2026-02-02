import { Product } from "./Product";

export interface CartItemType extends Product {
  quantity: number;
  oldPrice: number;
}

export interface CartsBill {
  subTotal: number;
  discount: number;
  total: number;
}


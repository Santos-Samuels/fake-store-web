import { Product } from "~/shared/interfaces";

export interface ProductDetailsState {
  product: Product | undefined;
  isLoading: boolean;
}

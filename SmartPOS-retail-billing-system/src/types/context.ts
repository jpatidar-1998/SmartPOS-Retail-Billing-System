import type { Product } from "./products";

export interface ProductContextType {
  productList: Product[];
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>;
}
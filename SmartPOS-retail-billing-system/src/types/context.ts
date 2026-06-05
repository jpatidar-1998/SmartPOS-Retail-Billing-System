import type { CartItem, Product } from "./products";

export interface ProductContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  productList: Product[];
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>;
}

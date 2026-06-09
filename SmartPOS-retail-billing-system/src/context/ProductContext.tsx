import { createContext, useEffect, useState } from "react";
import type { ProductContextType } from "../types/context";

const ProductContext = createContext<ProductContextType | null>(null);
const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState(() => {
    return JSON.parse(localStorage.getItem("productList")) || [];
  });

  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems, productList]);

  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        cartItems,
        setCartItems
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export { ProductProvider, ProductContext };

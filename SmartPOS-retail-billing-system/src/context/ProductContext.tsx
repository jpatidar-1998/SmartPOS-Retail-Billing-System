import { createContext, useEffect, useState } from "react";
import type { ProductContextType } from "../types/context";


const ProductContext = createContext<ProductContextType | null>(null);
const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState(() => {
    return JSON.parse(localStorage.getItem("productList")) || [];
  });

    const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Rice",
      price: 88,
      quantity: 2
    },
    {
      id: 2,
      name: "Wheat",
      price: 99,
      quantity: 1
    }
  ]);

  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]);

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

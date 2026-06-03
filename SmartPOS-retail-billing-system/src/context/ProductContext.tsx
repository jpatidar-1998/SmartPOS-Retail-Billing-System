import React, { createContext, useEffect, useState } from "react";
import type { ProductContextType } from "../types/context";


const ProductContext = createContext<ProductContextType | null>(null);
const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState(() => {
    return JSON.parse(localStorage.getItem("productList")) || [];
  });

  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]);

  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export { ProductProvider, ProductContext };

import { useEffect, useState } from "react";
import ProductForm from "../components/productForm";
import ProductTable from "../components/productTable";

export default function Products() {
  const [productList, setProductList] = useState(
    JSON.parse(localStorage.getItem("productList")) || []
  );
  const [prodForm, setProdForm] = useState<object>({
    name: "",
    price: "",
    stock: ""
  });

  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]);
  console.log(productList, prodForm);
  return (
    <>
      <ProductForm
        prodForm={prodForm}
        setProdForm={setProdForm}
        setProductList={setProductList}
        productList={productList}
      />
      <ProductTable productList={productList} setProductList={setProductList} />
    </>
  );
}

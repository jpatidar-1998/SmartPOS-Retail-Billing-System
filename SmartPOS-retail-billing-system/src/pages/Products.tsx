import { useContext, useState } from "react";
import ProductForm from "../components/productForm";
import ProductTable from "../components/productTable";
import { ProductContext } from "../context/ProductContext";

export default function Products() {
  const { productList, setProductList } = useContext(ProductContext);

  const [prodForm, setProdForm] = useState<object>({
    name: "",
    price: "",
    stock: ""
  });

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

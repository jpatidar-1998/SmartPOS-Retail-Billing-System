import { useState } from "react";

export default function Products() {
  const [productList, setProductList] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", stock: "" });

  //handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //handle add product
  const addProduct = (e) => {
    if (!form.name || !form.price) return alert("fill all feilds");
    const newProduct = {
      id: Date.now(),
      name: form.name,
      product: Number(form.price),
      stock: Number(form.stock)
    };
    setProductList([...productList, newProduct]);
    setForm({ name: "", price: "", stock: "" });
  };

  console.log(productList, form);
  return (
    <>
      <div className=" grid grid-col-1 justify-center items-center">
        <p>PRODUCTS</p>
        <input
          type="text"
          name="name"
          placeholder="NAME"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="PRICE"
          value={form.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="stock"
          placeholder="STOCK"
          value={form.stock}
          onChange={handleChange}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
    </>
  );
}

import { useState } from "react";

export default function Products() {
  const [productList, setProductList] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", stock: "" });
  const stockValue = Number(form.stock);

  //handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //handle add product
  const addProduct = () => {
    if (!form.name || !form.price) {
      return alert("fill all feilds");
    } else if (stockValue <= 0 || form.stock == "") {
      return alert("Product is out of stock !");
    }
    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: Number(form.price),
      stock: Number(form.stock)
    };
    setProductList([...productList, newProduct]);
    setForm({ name: "", price: "", stock: "" });
  };

  console.log(productList, form);
  return (
    <>
      <div className="grid grid-cols-1 justify-center items-center">
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
          type="number"
          name="stock"
          placeholder="STOCK"
          value={form.stock}
          onChange={handleChange}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="grid m-10 p-10">
        <table className="m-10">
          <caption>Bill</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>stock</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <div key={product.id}>
                <tr>
                  <td>{product.name}</td>
                  <td> {product.price}</td>
                  <td> {product.stock}</td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

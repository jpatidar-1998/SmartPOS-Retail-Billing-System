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
    } else if (stockValue <= 0) {
      return alert("Product is out of stock !");
    }
    const newProduct = {
      id: Date.now(),
      name: form.name.trim(),
      price: Number(form.price),
      stock: Number(form.stock)
    };
    setProductList([...productList, newProduct]);
    setForm({ name: "", price: "", stock: "" });
  };

  //handle Delete ProductList
  const handleDelete = () => {};

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
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <caption className="font-bold ">Product inventory</caption>
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Price</th>
              <th className="text-left p-3 px-5">stock</th>
              <th className="text-left p-3 px-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-200 bg-gray-100"
              >
                <td className="p-3 px-5">{product.name}</td>
                <td className="p-3 px-5"> {product.price}</td>
                <td className="p-3 px-5"> {product.stock}</td>
                <td className="p-3 px-5 flex">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

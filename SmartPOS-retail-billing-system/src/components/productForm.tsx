function ProductForm({ prodForm, setProdForm, setProductList, productList }) {
  const stockValue = Number(prodForm.stock);
  const isNameEmpty = !prodForm.name.trim();
  const isPriceEmpty = !prodForm.price.trim();

  //handle input
  const handleChange = (e) => {
    setProdForm({ ...prodForm, [e.target.name]: e.target.value });
  };

  //handle add product
  const addProduct = (e) => {
    e.preventdefault();
    if (isNameEmpty || isPriceEmpty) {
      return alert("fill all feilds");
    } else if (stockValue <= 0) {
      return alert("Product is out of stock !");
    }
    const newProduct = {
      id: Date.now(),
      name: prodForm.name.trim(),
      price: Number(prodForm.price),
      stock: Number(prodForm.stock)
    };
    setProductList([...productList, newProduct]);
    setProdForm({ name: "", price: "", stock: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen light">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-12 pb-2">
          ADD PRODUCTS FORM
        </h2>
        <form className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={prodForm.name}
            onChange={handleChange}
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />

          <input
            type="number"
            name="price"
            placeholder="PRICE"
            value={prodForm.price}
            onChange={handleChange}
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <input
            type="number"
            name="stock"
            placeholder="STOCK"
            value={prodForm.stock}
            onChange={handleChange}
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <button
            onClick={addProduct}
            className="bg-linear-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
export default ProductForm;

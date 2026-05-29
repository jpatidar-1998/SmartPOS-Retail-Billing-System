
function ProductTable({ productList, setProductList }) {
  //handle Delete ProductList
  const handleDelete = (id) => {
    const newList = productList.filter((product) => product.id !== id);
    setProductList(newList);
  };

  return (
    <div className="px-3 py-8 flex justify-center ">
      {productList.length !== 0 ? (
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <caption className="font-bold text-2xl text-emerald-950">
            Product inventory
          </caption>
          <thead className=" pt-6">
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
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>NO PRODUCTS AVAILAIBLE</p>
      )}
    </div>
  );
}
export default ProductTable;

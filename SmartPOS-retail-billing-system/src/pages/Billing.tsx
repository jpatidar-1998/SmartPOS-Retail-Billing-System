import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

export default function Billing() {
  const navigate = useNavigate();
  const context = useContext(ProductContext);

  if (!context) return null;

  const { cartItems, setCartItems, productList, setProductList } = context;

  const handleIncrease = (id) => {
    const product = productList.find((p) => p.id === id);

    if (!product) return;

    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        console.log("Stock:", product.stock);
        console.log("Quantity:", item.quantity);
        if (item.quantity + 1 >= product.stock) {
          console.log("ALERT TRIGGERED");
          alert(`Only ${product.stock} items available`);
          alert(`Only ${product.stock} items available`);
          return item;
        }

        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleDecrease = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity
        };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  const handleRemove = (id) => {
    const newList = cartItems.filter((product) => product.id !== id);
    setCartItems(newList);
  };

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleFinalizeBill = () => {
    const bill = {
      id: Date.now(),
      items: [...cartItems],
      total: grandTotal,
      date: new Date().toISOString()
    };

    const existingBills = JSON.parse(
      localStorage.getItem("billHistory") || "[]"
    );

    existingBills.push(bill);

    localStorage.setItem("billHistory", JSON.stringify(existingBills));

    const updatedProducts = productList.map((product) => {
      const cartItem = cartItems.find((item) => item.id === product.id);

      if (cartItem) {
        return {
          ...product,
          stock: product.stock - cartItem.quantity
        };
      }

      return product;
    });
    setProductList(updatedProducts);
    setCartItems([]);
    navigate("/");
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <div>
          <div className="px-3 py-4 flex flex-col justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Product Name</th>
                  <th className="text-left p-3 px-5">Quantity</th>
                  <th className="text-left p-3 px-5">Unit Price</th>
                  <th className="text-left p-3 px-5">Sub Total</th>
                  <th className="text-left p-3 px-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="my-4 border-b hover:bg-orange-100 bg-gray-100"
                  >
                    <td>{item.name}</td>
                    <td>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="m-2 w-5 h-5 align-middle bg-blue-100 rounded"
                      >
                        +
                      </button>
                      {item.quantity}
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="m-2 w-5 h-5 align-middle  bg-blue-100 rounded"
                      >
                        -
                      </button>
                    </td>

                    <td>{item.price}</td>
                    <td>{item.price * item.quantity}</td>
                    <td>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="my-2 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              <div className="text-right">
                <h2 className="text-xl font-bold">
                  Grand Total: ₹{grandTotal}
                </h2>

                <button
                  onClick={() => handleFinalizeBill()}
                  className="mt-3 bg-green-500 text-white px-4 py-2 rounded"
                >
                  Finalize Bill
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold">No Products In Cart</h2>
          <Link to="/">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Go To Products
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

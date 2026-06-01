import { useState } from "react";

export default function Billing() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Rice",
      price: 88,
      quantity: 2
    }
  ]);

  const handleIncrease = (id) => {
    let x;
    cartItems.map((item) => {
      if (id === item.id) {
        x = item.quantity + 1;
        setCartItems(x);
      }
    });
  };

  const handleDecrease = (id) => {
    let x;
    cartItems.map((item) => {
      if (id === item.id) {
        x = item.quantity - 1;
        setCartItems(x);
      }
    });
  };

  return (
    <div className="px-3 py-4 flex justify-center">
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
                <button className="my-2 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { useState } from "react";

export default function Billing() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Rice",
      price: 88,
      quantity: 2
    },
    {
      id: 2,
      name: "Wheat",
      price: 99,
      quantity: 1
    }
  ]);

  const handleIncrease = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity >= 1 ? item.quantity + 1 : item.quantity
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
    </div>
  );
}

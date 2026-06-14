import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function Dashboard() {
  const context = useContext(ProductContext);
  if (!context) return null;

  const { productList } = context;
  const billHistoryData = JSON.parse(
    localStorage.getItem("billHistory") || "[]"
  );

  const totalBills = billHistoryData.length;

  const totalRevenue = billHistoryData.reduce(
    (sum, bill) => sum + bill.total,
    0
  );

  const totalItemsSold = billHistoryData.reduce((sum, bill) => {
    return (
      sum + bill.items.reduce((itemSum, item) => itemSum + item.quantity, 0)
    );
  }, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-gray-500">Total Products</h3>
        <p className="text-2xl font-bold">{productList.length}</p>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h3 className="text-gray-500">Total Bills</h3>
        <p className="text-2xl font-bold">{totalBills}</p>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h3 className="text-gray-500">Revenue</h3>
        <p className="text-2xl font-bold">₹{totalRevenue}</p>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h3 className="text-gray-500">Items Sold</h3>
        <p className="text-2xl font-bold">{totalItemsSold}</p>
      </div>
    </div>
  );
}

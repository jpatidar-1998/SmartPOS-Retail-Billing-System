export default function Billing() {
  return (
    <div className="px-3 py-4 flex justify-center">
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3 px-5">S.No.</th>
            <th className="text-left p-3 px-5">Product Name</th>
            <th className="text-left p-3 px-5">Quantity</th>
            <th className="text-left p-3 px-5">Unit Price</th>
            <th className="text-left p-3 px-5">Sub Total</th>
            <th className="text-left p-3 px-5">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="my-4 border-b hover:bg-orange-100 bg-gray-100">
            <td></td>
            <td></td>
            <td>
              <button className="px-1 py-1 m-2 bg-blue-200 rounded">+</button>
              Quantity
              <button className="px-1 py-1 m-2 bg-blue-200 rounded">-</button>
            </td>
            <td></td>
            <td></td>
            <td>
              <button className="my-2 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

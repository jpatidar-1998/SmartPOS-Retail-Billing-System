import { useNavigate } from "react-router-dom";

const BillHistory = () => {
  const navigate = useNavigate();
  const SellingReport = JSON.parse(localStorage.getItem("billHistory") || "[]");

  return (
    <>
      <button
        className="w-60 mt-8 mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        onClick={() => navigate("/")}
      >
        Go To Products{" "}
      </button>
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
              <th>Bill Id</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {SellingReport.map((billno) => {
              return (
                <tr key={billno.id}>
                  <td>{billno.id}</td>
                  <td> {new Date(billno.date).toLocaleString()}</td>
                  <td>
                    {billno.items.map((product) => {
                      return (
                        <div key={product.id}>
                          {product.name} x {product.quantity}
                        </div>
                      );
                    })}
                  </td>
                  <td>&#8377;{billno.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BillHistory;

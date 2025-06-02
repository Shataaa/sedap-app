import data from "../data/order.json";
export default function Orders(){
    return (
        <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📦 Orders</h2>
        
        <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-gradient-to-r from-gray-100 to-gray-200 text-xs text-gray-600 uppercase tracking-wider">
                <th className="px-6 py-4 text-left">Order ID</th>
                <th className="px-6 py-4 text-left">Customer</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Total Price</th>
                <th className="px-6 py-4 text-left">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order, index) => (
                <tr
                  key={order.orderId}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-blue-50 transition-colors duration-150`}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">{order.orderId}</td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-800">
                      {order.customerName}
                    </div>
                    <div className="text-xs text-gray-500">{order.customerId}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-700">
                    Rp {order.totalPrice.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{order.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      );
}
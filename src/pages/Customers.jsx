import data from "../data/cust.json";
export default function Customers(){
    return (
        <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">👥 Customers</h2>
      
        <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-gradient-to-r from-gray-100 to-gray-200 text-xs text-gray-600 uppercase tracking-wider">
                <th className="px-6 py-4 text-left">Customer ID</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Phone</th>
                <th className="px-6 py-4 text-left">Loyalty</th>
              </tr>
            </thead>
            <tbody>
              {data.map((customer, index) => (
                <tr
                  key={customer.customerId}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-blue-50 transition-colors duration-150`}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">{customer.customerId}</td>
                  <td className="px-6 py-4">{customer.customerName}</td>
                  <td className="px-6 py-4 text-gray-600">{customer.email}</td>
                  <td className="px-6 py-4 text-gray-600">{customer.phone}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        customer.loyalty === 'Gold'
                          ? 'bg-yellow-100 text-yellow-700'
                          : customer.loyalty === 'Silver'
                          ? 'bg-gray-200 text-gray-800'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {customer.loyalty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      );
}
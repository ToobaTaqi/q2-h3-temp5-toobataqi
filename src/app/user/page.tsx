"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
 // to check if user is logged in or not
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  // Sample data - in a real app, this would come from your backend
  const user = {
    username: "tooba",
    email: "user@example.com",
    phone: "33-33333333",
    avatar:
      "https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-illustration-download-in-svg-png-gif-file-formats--young-female-girl-avatar-portraits-pack-people-illustrations-6590622.png",
    orders: [
      {
        id: "ORD-001",
        date: "2024-02-01",
        status: "Delivered",
        total: 129.99,
        items: 3,
      },
      {
        id: "ORD-002",
        date: "2024-01-25",
        status: "Processing",
        total: 79.99,
        items: 2,
      },
      {
        id: "ORD-003",
        date: "2024-01-15",
        status: "Delivered",
        total: 199.99,
        items: 4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
              />
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {user.username}
                </h1>
                <div className="space-y-2 text-sm sm:text-base">
                  <p className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {user.email}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {user.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Order History
          </h2>

          {/* Desktop Table */}
          <div className="hidden sm:block">
            <table className="w-full bg-white rounded-lg shadow overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {user.orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.items}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${order.total.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="sm:hidden space-y-4">
            {user.orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">
                      {order.id}
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Date:</span>
                    <span>{new Date(order.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Items:</span>
                    <span>{order.items}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-900">Total:</span>
                    <span className="font-medium text-gray-900">
                      ${order.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

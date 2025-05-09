import { useState, useEffect } from "react";
import OrderList from "../components/OrderList";
import OrderDetails from "../components/OrderDetails";
import OrderHistory from "../components/OrderHistory";
import OrderPreview from "../components/OrderPreview";
import Invoice from "../components/Invoice";
import Tabs from "../components/Tabs";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filters, setFilters] = useState({ status: "All", type: "All" });
  const [activeTab, setActiveTab] = useState("Order Details");

  useEffect(() => {
    fetch("/src/data/orders.json")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);


  
  const handleExportCSV = () => {
    const csvContent = [
      ["Order Number", "Entity", "Type", "Status", "Date"],
      ...orders.map((order) => [
        order.number,
        order.entity,
        order.type,
        order.status,
        order.date,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "orders.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-0">
          Orders
        </h2>
        <div className="flex space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Create Order
          </button>
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
            onClick={handleExportCSV}
          >
            Export CSV
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <OrderList
            orders={orders}
            onOrderSelect={setSelectedOrder}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
        <div className="w-full lg:w-2/3">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "Order Details" && <OrderDetails selectedOrder={selectedOrder} />}
          {activeTab === "Order Preview" && <OrderPreview selectedOrder={selectedOrder} />}
          {activeTab === "Invoice" && <Invoice selectedOrder={selectedOrder} />}
          {activeTab === "Order Details" && (
            <OrderHistory history={selectedOrder?.history} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
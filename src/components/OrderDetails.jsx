const OrderDetails = ({ selectedOrder }) => {
  if (!selectedOrder) return <div className="text-gray-600">Select an order to view details.</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <h2 className="text-lg font-semibold text-gray-800">{selectedOrder.number}</h2>
          <span
            className={`text-sm font-medium px-2 py-1 rounded-md ${
              selectedOrder.status === "IN REVIEW" ? "text-orange-500 bg-orange-100" : "text-gray-500 bg-gray-100"
            }`}
          >
            {selectedOrder.status}
          </span>
          <span className="text-sm font-medium text-white bg-blue-500 px-2 py-1 rounded-md">
            RedBeryTech
          </span>
        </div>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Update status
          </button>
          <button
            className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
            onClick={() => window.print()}
          >
            Print
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <p className="text-gray-600 text-sm">
            <strong className="font-medium">Order Type:</strong>{" "}
            <span className="text-gray-800">{selectedOrder.type}</span>
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">
            <strong className="font-medium">Entity Type:</strong>{" "}
            <span className="text-gray-800">Limited Liability Company</span>
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">
            <strong className="font-medium">Entity Name:</strong>{" "}
            <span className="text-gray-800">{selectedOrder.entity}</span>
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">
            <strong className="font-medium">Order Date:</strong>{" "}
            <span className="text-gray-800">{selectedOrder.date}</span>
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">
            <strong className="font-medium">Completion Date:</strong>{" "}
            <span className="text-gray-800">{selectedOrder.completionDate || "N/A"}</span>
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">
            <strong className="font-medium">State:</strong>{" "}
            <span className="text-gray-800">{selectedOrder.state || "N/A"}</span>
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">
            <strong className="font-medium">Order Placed By:</strong>{" "}
            <span className="text-gray-800">{selectedOrder.rep}</span>
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">
            <strong className="font-medium">Account Rep:</strong>{" "}
            <span className="text-gray-800">{selectedOrder.rep}</span>
          </p>
        </div>
      </div>

      {/* Account Rep Section */}
      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-md">
        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          MC
        </div>
        <div>
          <p className="text-gray-800 font-semibold">{selectedOrder.rep}</p>
          <p className="text-gray-600 text-sm flex items-center">
            <span className="mr-1">📞</span> 999999999
          </p>
          <p className="text-gray-600 text-sm flex items-center">
            <span className="mr-1">📧</span>
            <a
              href="mailto:shubh.example@example.com"
              className="text-blue-500 hover:underline"
            >
              shubham.example@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
const OrderPreview = ({ selectedOrder }) => {
    if (!selectedOrder) return <div>Select an order to view details.</div>;
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Order Preview</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => window.print()}
          >
            Print
          </button>
        </div>
        <div className="space-y-4">
          <div className="border-b pb-2">
            <h3 className="text-sm font-medium text-gray-600">LIMITED LIABILITY COMPANY</h3>
            <p className="text-gray-800 font-semibold">{selectedOrder.fees?.[0]?.amount || 0}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-600">SELECTED SERVICES:</h3>
            {selectedOrder.fees?.map((fee, index) => (
              <div key={index} className="flex justify-between text-gray-700">
                <p>{fee.description}</p>
                <p>${fee.amount}.00</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-600">ENTITY TYPE</h3>
            <p className="text-gray-700">{selectedOrder.type}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-600">NAME</h3>
            <p className="text-gray-700">{selectedOrder.entity}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-600">CONTACT INFORMATION</h3>
            <p className="text-gray-700">{selectedOrder.rep}</p>
            <p className="text-gray-700">9999999999</p>
            <p className="text-gray-700">shubham.example.com</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default OrderPreview;
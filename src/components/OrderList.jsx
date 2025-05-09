const OrderList = ({ orders, onOrderSelect, filters, setFilters }) => {
    const handleFilterChange = (e, filterType) => {
      setFilters({ ...filters, [filterType]: e.target.value });
    };
  
    const filteredOrders = orders.filter((order) => {
      return (
        (filters.status === "All" || order.status === filters.status) &&
        (filters.type === "All" || order.type === filters.type)
      );
    });
  
    return (
      <div className="bg-white p-4 md:p-6 rounded-xl shadow-md h-full">
        {/* Header and Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Orders <span className="text-blue-600">({filteredOrders.length})</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              value={filters.status}
              onChange={(e) => handleFilterChange(e, "status")}
            >
              <option value="All">All Statuses</option>
              <option value="IN REVIEW">In Review</option>
              <option value="PAY LATER REQUEST RAISED">Pay Later Request Raised</option>
            </select>
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              value={filters.type}
              onChange={(e) => handleFilterChange(e, "type")}
            >
              <option value="All">All Order Types</option>
              <option value="Entity Formation">Entity Formation</option>
              <option value="Annual Report">Annual Report</option>
            </select>
          </div>
        </div>
  
        {/* Order Cards */}
        <div className="space-y-3 max-h-[65vh] overflow-y-auto pr-2">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-sm transition-all bg-white"
                onClick={() => onOrderSelect(order)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-800">{order.number}</p>
                    <p className="text-sm text-gray-600">{order.entity}</p>
                    <p className="text-sm text-gray-500">{order.type}</p>
                    <p className="text-xs text-gray-400">{order.date}</p>
                  </div>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      order.status === "IN REVIEW"
                        ? "bg-orange-100 text-orange-600"
                        : order.status === "PAY LATER REQUEST RAISED"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-10">
              No orders match the current filters.
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default OrderList;
  
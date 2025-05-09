import React from 'react'

const OrderHistory = ({ history }) => {
    if (!history) return null;
  
    return (
      <div className="bg-white p-4 rounded shadow mt-4">
        <h3 className="text-lg font-bold">Order History</h3>
        <div className="mt-2">
          {history.map((entry, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <p>
                {entry.event} Updated by {entry.by} on {entry.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OrderHistory;
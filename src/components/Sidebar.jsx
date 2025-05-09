const Sidebar = () => {
    return (
      <div className="w-48 bg-white h-screen shadow-md hidden lg:block">
        <div className="p-4">
          <img src="" alt="Logo" className="mb-4" />
          <ul>
            <li className="p-2 bg-blue-100 rounded text-gray-800 font-medium">Orders</li>
            <li className="p-2 text-gray-600 hover:bg-gray-100 rounded">Companies</li>
            <li className="p-2 text-gray-600 hover:bg-gray-100 rounded">Employees</li>
            <li className="p-2 text-gray-600 hover:bg-gray-100 rounded">Master</li>
            <li className="p-2 text-gray-600 hover:bg-gray-100 rounded">Settings</li>
            <li className="p-2 text-gray-600 hover:bg-gray-100 rounded">Refresh</li>
            <li className="p-2 text-gray-600 hover:bg-gray-100 rounded">Token</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
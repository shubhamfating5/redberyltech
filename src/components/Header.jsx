const Header = () => {
    return (
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">VSTATE FILINGS</h1>
        <div className="flex items-center space-x-3">
          <span className="hidden sm:inline text-gray-700">
            Welcome, Shubham F 
          </span>
          <button className="bg-purple-500 text-white px-3 py-1 rounded-md hover:bg-purple-600">
            SF
          </button>
        </div>
      </div>
    );
  };
  
  export default Header;
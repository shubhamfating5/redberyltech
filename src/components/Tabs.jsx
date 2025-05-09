const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
      "Order Details",
      "Order Preview",
      "Company Details",
      "Documents",
      "Communication History",
      "Account Rep",
      "Invoice",
    ];
  
    return (
      <div className="flex flex-wrap space-x-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  };
  
  export default Tabs;
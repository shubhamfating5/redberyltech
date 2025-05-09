import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Orders from "./pages/Orders";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
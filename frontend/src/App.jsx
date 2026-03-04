import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EmployeeProfile from "./pages/EmployeeProfile";
import Alerts from "./pages/Alerts";
import Investigation from "./pages/Investigation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee/:id" element={<EmployeeProfile />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/investigation" element={<Investigation />} />
      </Routes>
    </Router>
  );
}

export default App;

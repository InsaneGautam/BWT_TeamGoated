import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import EmployeeProfile from "./pages/EmployeeProfile";
import Investigation from "./pages/Investigation";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/alerts" element={<Alerts />} />

        <Route path="/employee" element={<EmployeeProfile />} />

        <Route path="/investigation" element={<Investigation />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;

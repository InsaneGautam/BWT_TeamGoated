import React from "react";
import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";

function App() {
  return (
    <div style={{background:"#0f172a", minHeight:"100vh", color:"white"}}>
      
      <h1 style={{textAlign:"center", padding:"20px"}}>
        AI Insider Threat Detection System
      </h1>

      <Dashboard />
      <Alerts />

    </div>
  );
}

export default App;

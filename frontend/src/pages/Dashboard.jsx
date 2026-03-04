import React from "react";
import RiskGauge from "../components/RiskGauge";
import RiskHeatmap from "../components/RiskHeatmap";
import AlertFeed from "../components/AlertFeed";

export default function Dashboard() {

  const stats = {
    employees: 120,
    suspicious: 6,
    alerts: 3
  };

  return (
    <div style={{padding:"30px", fontFamily:"Arial"}}>

      <h1>Insider Threat Detection Dashboard</h1>

      <div style={{display:"flex", gap:"20px", marginTop:"20px"}}>

        <div style={cardStyle}>
          <h3>Total Employees</h3>
          <p>{stats.employees}</p>
        </div>

        <div style={cardStyle}>
          <h3>Suspicious Users</h3>
          <p style={{color:"orange"}}>{stats.suspicious}</p>
        </div>

        <div style={cardStyle}>
          <h3>Critical Alerts</h3>
          <p style={{color:"red"}}>{stats.alerts}</p>
        </div>

      </div>

      <div style={{display:"flex", gap:"40px", marginTop:"40px"}}>
        <RiskGauge/>
        <RiskHeatmap/>
      </div>

      <div style={{marginTop:"40px"}}>
        <AlertFeed/>
      </div>

    </div>
  );
}

const cardStyle = {
  border:"1px solid #ddd",
  padding:"20px",
  borderRadius:"8px",
  width:"200px"
};

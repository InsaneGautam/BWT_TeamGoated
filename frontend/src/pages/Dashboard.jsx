import React from "react";
import { Link } from "react-router-dom";

import RiskGauge from "../components/RiskGauge";
import RiskHeatmap from "../components/RiskHeatmap";
import AlertFeed from "../components/AlertFeed";

export default function Dashboard(){

  const stats = {
    employees:120,
    suspicious:5,
    alerts:2
  };

  return(

    <div style={{padding:"30px"}}>

      <h1>Insider Threat Detection Dashboard</h1>

      <div style={{marginBottom:"20px"}}>

        <Link to="/">Dashboard</Link> |
        <Link to="/alerts"> Alerts</Link> |
        <Link to="/employee"> Employee</Link> |
        <Link to="/investigation"> Investigation</Link>

      </div>

      <div style={{display:"flex",gap:"20px"}}>

        <div style={card}>
          <h3>Total Employees</h3>
          <p>{stats.employees}</p>
        </div>

        <div style={card}>
          <h3>Suspicious Users</h3>
          <p style={{color:"orange"}}>{stats.suspicious}</p>
        </div>

        <div style={card}>
          <h3>Critical Alerts</h3>
          <p style={{color:"red"}}>{stats.alerts}</p>
        </div>

      </div>

      <div style={{display:"flex",gap:"40px",marginTop:"40px"}}>

        <RiskGauge />

        <RiskHeatmap />

      </div>

      <div style={{marginTop:"40px"}}>

        <AlertFeed />

      </div>

    </div>

  );

}

const card = {
  border:"1px solid #ddd",
  padding:"20px",
  borderRadius:"8px",
  width:"200px"
};

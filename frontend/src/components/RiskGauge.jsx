import React from "react";

function RiskGauge({alert}){

  const score = Math.abs(alert.risk_score)*100;

  return(

    <div style={{
      background:"#1e293b",
      padding:"20px",
      margin:"10px",
      borderRadius:"10px"
    }}>

      <h3>Employee: {alert.employee_id}</h3>

      <p>Risk Score: {score.toFixed(2)}%</p>

      <ul>
        {alert.reasons.map((r,i)=>(
          <li key={i}>{r}</li>
        ))}
      </ul>

    </div>

  );

}

export default RiskGauge;

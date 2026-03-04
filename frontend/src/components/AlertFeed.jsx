import React from "react";

export default function AlertFeed(){

  const alerts = [
    {user:"E014", reason:"Large data download", risk:"HIGH"},
    {user:"E022", reason:"Login at unusual hour", risk:"MEDIUM"}
  ];

  return(

    <div>

      <h2>Recent Alerts</h2>

      {alerts.map((a,i)=>(
        <div key={i} style={card}>

          <strong>{a.user}</strong>
          <p>{a.reason}</p>

          <span style={{color:"red"}}>{a.risk}</span>

        </div>
      ))}

    </div>

  );

}

const card = {
  border:"1px solid #ddd",
  padding:"10px",
  marginBottom:"8px"
};

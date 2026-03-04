import React from "react";

export default function Alerts(){

  const alerts = [
    {user:"E014", reason:"Large data download", risk:"HIGH"},
    {user:"E022", reason:"Login at unusual hour", risk:"MEDIUM"},
    {user:"E033", reason:"Accessed restricted folder", risk:"HIGH"}
  ];

  return(

    <div style={{padding:"30px"}}>

      <h2>Security Alerts</h2>

      {alerts.map((alert,index)=>(
        <div key={index} style={card}>

          <strong>{alert.user}</strong>
          <p>{alert.reason}</p>

          <span style={{color:"red"}}>{alert.risk}</span>

        </div>
      ))}

    </div>

  );

}

const card = {
  border:"1px solid #ddd",
  padding:"10px",
  marginBottom:"10px"
};

import React from "react";

export default function AlertFeed(){

  const alerts = [

    {
      user:"E014",
      reason:"Large data download",
      risk:"HIGH"
    },

    {
      user:"E022",
      reason:"Login at unusual hour",
      risk:"MEDIUM"
    },

    {
      user:"E045",
      reason:"Accessed restricted folder",
      risk:"HIGH"
    }

  ];

  return(

    <div>

      <h2>Security Alerts</h2>

      {alerts.map((a,i)=>(
        <div key={i}
        style={{
          border:"1px solid #ddd",
          padding:"15px",
          marginBottom:"10px"
        }}>

          <strong>{a.user}</strong>

          <p>{a.reason}</p>

          <span style={{color:"red"}}>
            {a.risk}
          </span>

        </div>
      ))}

    </div>

  )

}

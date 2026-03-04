import React from "react";

export default function RiskHeatmap(){

  const users = [
    {name:"E101", risk:0.9},
    {name:"E203", risk:0.6},
    {name:"E310", risk:0.2},
    {name:"E122", risk:0.8}
  ];

  return(

    <div>

      <h3>Risk Heatmap</h3>

      {users.map((u,i)=>(
        <div
          key={i}
          style={{
            background:getColor(u.risk),
            padding:"10px",
            margin:"5px",
            width:"200px"
          }}
        >
          {u.name} : {u.risk}
        </div>
      ))}

    </div>

  );

}

function getColor(score){

  if(score>0.8) return "#ff4d4f";
  if(score>0.5) return "#faad14";
  return "#52c41a";

}

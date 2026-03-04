import React from "react";

export default function Investigation(){

  const reasons = [
    "Downloaded 820MB financial data",
    "Activity detected at 02:14 AM",
    "USB device connected"
  ];

  return(

    <div style={{padding:"30px"}}>

      <h2>Investigation Panel</h2>

      <h3>Employee: E014</h3>

      <ul>

        {reasons.map((r,i)=>(
          <li key={i}>{r}</li>
        ))}

      </ul>

    </div>

  );

}

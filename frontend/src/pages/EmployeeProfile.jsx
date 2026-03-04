import React from "react";

export default function EmployeeProfile(){

  const employee = {
    id:"E014",
    department:"Finance",
    risk:0.82,
    activity:"Large data download"
  };

  return(

    <div style={{padding:"30px"}}>

      <h2>Employee Profile</h2>

      <p>ID: {employee.id}</p>
      <p>Department: {employee.department}</p>
      <p>Risk Score: {employee.risk}</p>
      <p>Latest Activity: {employee.activity}</p>

    </div>

  )

}

import React from "react";

function AlertFeed(){

  const alerts = [
    {employee:"EMP101",reason:"After hours access"},
    {employee:"EMP102",reason:"Large data download"}
  ];

  return(

    <div>

      {alerts.map((a,i)=>(
        <div key={i} style={{
          background:"#1e293b",
          padding:"15px",
          margin:"10px",
          borderRadius:"10px"
        }}>

          <h4>{a.employee}</h4>
          <p>{a.reason}</p>

        </div>
      ))}

    </div>

  );

}

export default AlertFeed;

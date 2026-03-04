import React, {useEffect, useState} from "react";
import axios from "axios";
import RiskGauge from "../components/RiskGauge";

function Dashboard(){

  const [alerts,setAlerts] = useState([]);

  useEffect(()=>{

    const events = [
      {
        employee_id:"EMP101",
        action:"login",
        timestamp:"2026-03-04T10:00:00",
        location:"office"
      },
      {
        employee_id:"EMP101",
        action:"download",
        timestamp:"2026-03-04T23:30:00",
        location:"home"
      }
    ];

    axios.post("http://127.0.0.1:8000/process-events",events)
    .then(res=>{
      setAlerts(res.data.alerts);
    })
    .catch(err=>{
      console.log(err);
    });

  },[]);

  return(

    <div style={{padding:"20px"}}>

      <h2>Risk Dashboard</h2>

      {alerts.map((alert,i)=>(
        <RiskGauge key={i} alert={alert}/>
      ))}

    </div>

  );
}

export default Dashboard;

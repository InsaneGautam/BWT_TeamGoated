import React from "react";

export default function Timeline(){

  const events = [
    {time:"09:10 AM", action:"Login"},
    {time:"10:05 AM", action:"Accessed finance report"},
    {time:"02:14 AM", action:"Downloaded 820MB data"},
    {time:"02:20 AM", action:"USB device connected"}
  ];

  return(

    <div style={{marginTop:"30px"}}>

      <h3>Activity Timeline</h3>

      {events.map((event,i)=>(
        <div key={i} style={row}>

          <div style={time}>{event.time}</div>

          <div style={action}>{event.action}</div>

        </div>
      ))}

    </div>

  );

}

const row = {
  display:"flex",
  marginBottom:"10px"
};

const time = {
  width:"100px",
  fontWeight:"bold"
};

const action = {
  borderLeft:"2px solid #1890ff",
  paddingLeft:"10px"
};

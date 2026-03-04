import React from "react";

export default function Timeline() {

  const events = [
    {
      time: "09:10 AM",
      action: "Login",
      description: "Employee logged into system"
    },
    {
      time: "10:05 AM",
      action: "File Access",
      description: "Accessed finance report folder"
    },
    {
      time: "02:14 AM",
      action: "Suspicious Download",
      description: "Downloaded 820MB financial data"
    },
    {
      time: "02:20 AM",
      action: "USB Device",
      description: "External USB device connected"
    }
  ];

  return (
    <div style={containerStyle}>

      <h3>Activity Timeline</h3>

      {events.map((event, index) => (
        <div key={index} style={eventStyle}>

          <div style={timeStyle}>
            {event.time}
          </div>

          <div style={detailsStyle}>
            <strong>{event.action}</strong>
            <p>{event.description}</p>
          </div>

        </div>
      ))}

    </div>
  );
}

const containerStyle = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "8px",
  width: "400px"
};

const eventStyle = {
  display: "flex",
  marginBottom: "15px",
  alignItems: "flex-start"
};

const timeStyle = {
  width: "80px",
  fontWeight: "bold",
  color: "#555"
};

const detailsStyle = {
  borderLeft: "2px solid #1890ff",
  paddingLeft: "10px"
};

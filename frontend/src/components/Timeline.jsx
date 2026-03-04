import { useEffect, useState } from "react";
import axios from "axios";

const Timeline = ({ employeeId }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/events/${employeeId}`)
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, [employeeId]);

  return (
    <div>
      <h2>Activity Timeline</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.timestamp} - {event.event_type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;

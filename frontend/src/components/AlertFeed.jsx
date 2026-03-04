import { useEffect, useState } from "react";
import axios from "axios";

const AlertFeed = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/alerts")
      .then(res => setAlerts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Recent Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>
            Employee: {alert.employee_id} | Risk: {alert.risk_score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertFeed;

import RiskHeatmap from "../components/RiskHeatmap";
import AlertFeed from "../components/AlertFeed";
import RiskGauge from "../components/RiskGauge";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Risk Dashboard</h1>
      <RiskGauge />
      <RiskHeatmap />
      <AlertFeed />
    </div>
  );
};

export default Dashboard;

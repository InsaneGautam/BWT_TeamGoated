import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Risk", value: 70 },
  { name: "Safe", value: 30 },
];

const COLORS = ["#ff4d4f", "#52c41a"];

const RiskGauge = () => {
  return (
    <div>
      <h2>Overall Risk Score</h2>
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default RiskGauge;

import React from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function RiskGauge() {

  const data = [
    { name: "Risk", value: 72 },
    { name: "Safe", value: 28 }
  ];

  const COLORS = ["#ff4d4f", "#52c41a"];

  return (
    <div>
      <h3>Average Risk Score</h3>

      <PieChart width={250} height={200}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={80}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

    </div>
  );
}

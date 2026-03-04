import React from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function RiskGauge(){

  const data = [
    {name:"Risk", value:70},
    {name:"Safe", value:30}
  ];

  const colors = ["#ff4d4f","#52c41a"];

  return(

    <div>

      <h3>Average Risk Score</h3>

      <PieChart width={250} height={200}>

        <Pie data={data} dataKey="value" outerRadius={80}>

          {data.map((entry,index)=>(
            <Cell key={index} fill={colors[index]} />
          ))}

        </Pie>

      </PieChart>

    </div>

  );

}

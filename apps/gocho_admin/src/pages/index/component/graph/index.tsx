import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { FunctionComponent } from "react";

import { GraphProps } from "./type";

const Graph: FunctionComponent<GraphProps> = ({ data, name, domain }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data} margin={{ top: 20, bottom: 20 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis type="number" domain={domain} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#2961cd" name={name} />
    </LineChart>
  </ResponsiveContainer>
);

export default Graph;

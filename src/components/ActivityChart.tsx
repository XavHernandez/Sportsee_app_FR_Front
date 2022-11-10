import type { isActivityData } from "../entities/ActivityData";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

interface BarChartProps {
  data: isActivityData[];
}

/**
 * @param {isActivityData[]} props
 * */
const ActivityChart: React.FunctionComponent<BarChartProps> = (props: BarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={props.data} barSize={7}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" padding={{ left: 10 }} />
        <YAxis orientation={"right"} axisLine={false} />
        <Tooltip />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ right: 50, top: -5 }}
        />
        <Bar dataKey="weight" fill="var(--black)" radius={6} name="Poids (kg)" />
        <Bar dataKey="calories" fill="var(--primary)" radius={6} name="Calories brûlées (kCal)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;

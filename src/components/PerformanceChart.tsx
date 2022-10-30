import type { isPerformanceData } from "../entities/PerformanceData";
import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

interface RadarChartProps {
  data: isPerformanceData[];
}

/** @params isPerformanceData[] as RadarChartProps */
const PerformanceChart: React.FunctionComponent<RadarChartProps> = (props: RadarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="75%"
        innerRadius={10}
        data={props.data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <PolarGrid radialLines={false} />

        <PolarAngleAxis
          dataKey="subject"
          stroke="#fff"
          fontSize="0.6em"
          tickLine={false}
          axisLine={false}
        />
        <PolarRadiusAxis axisLine={false} tick={false} scale="auto" domain={[0, 12]} />
        <Radar name="Mike" dataKey="performance" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;

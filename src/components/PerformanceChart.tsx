import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

/**
 * @param { any[] } data
 * */
//@ts-ignore
const PerformanceChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="75%"
        innerRadius={10}
        data={data}
        margin={{ top: 15, right: 15, bottom: 15, left: 15 }}>
        <PolarGrid radialLines={false} />

        <PolarAngleAxis
          dataKey="subject"
          stroke="#fff"
          fontSize="0.6em"
          tickLine={false}
          axisLine={false}
        />
        <PolarRadiusAxis axisLine={false} tick={false} scale="linear" domain={[0, 250]} />
        <Radar dataKey="performance" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      performance: PropTypes.number.isRequired,
      fullMark: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PerformanceChart;

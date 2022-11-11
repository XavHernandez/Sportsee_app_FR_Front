import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, LineChart, XAxis, Line } from "recharts";

/**
 * @param {any[]} props
 * */
//@ts-ignore
const SessionsChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={300}
        height={100}
        data={data}
        margin={{
          top: 80,
          right: 20,
          left: 20,
          bottom: 5,
        }}>
        <text
          y="10%"
          textAnchor="left"
          dominantBaseline="middle"
          className="progress-label"
          fill="rgba(255,255,255,80%)"
          fontSize="0.7em">
          <tspan x="10%" dy="10">
            Durée moyenne des
          </tspan>
          <tspan></tspan>
          <tspan x="10%" dy="20">
            sessions
          </tspan>
        </text>
        <Line
          type="monotone"
          dataKey="session"
          stroke="#fff"
          strokeWidth={2}
          dot={{
            strokeWidth: 1,
            r: 0,
          }}
          activeDot={{
            strokeWidth: 5,
            r: 3,
          }}
        />
        <XAxis
          dataKey="name"
          stroke="rgba(255,255,255,80%)"
          fontSize="0.7em"
          axisLine={false}
          tickLine={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

SessionsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      session: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SessionsChart;

import React from "react";
import PropTypes from "prop-types";
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

/**
 * @param {any[]} data
 * */

//@ts-ignore
const ActivityChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data} barSize={7}>
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

ActivityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      weight: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ActivityChart;

import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";

/**
 * @param {any[]} data
 * */
//@ts-ignore
const ScoreChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        width={300}
        height={300}
        data={data}
        innerRadius="70%"
        barSize={10}
        startAngle={180}
        endAngle={-180}>
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar className="scoreBack" background dataKey="score" cornerRadius={30 / 2} />
        <text
          x="20%"
          y="15%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
          fontSize="0.8em">
          Score
        </text>
        <text textAnchor="middle" dominantBaseline="middle" fontSize="1em">
          <tspan x="50%" y="35%" dy="0.71em" fontSize="1.2em" className="progress-label-number">
            {data[0].score}%
          </tspan>
          <tspan x="50%" y="50%" dy="0.5em" fontSize="0.7em" className="progress-label-text">
            de votre
          </tspan>
          <tspan x="50%" y="58%" dy="0.5em" fontSize="0.7em" className="progress-label-text">
            objectif
          </tspan>
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

ScoreChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.string.isRequired,
      fill: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ScoreChart;

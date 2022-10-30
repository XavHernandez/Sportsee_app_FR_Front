import type { isScoreData } from "../entities/ScoreData";
import React from "react";
import { ResponsiveContainer, RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";

interface RadialChartProps {
  data: isScoreData[];
}

/** @params isScoreData[] as RadialChartProps */
const ScoreChart: React.FunctionComponent<RadialChartProps> = (props: RadialChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        width={300}
        height={300}
        data={props.data}
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
            {props.data[0].score}%
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

export default ScoreChart;

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(zoomPlugin);

function LineChart(props) {
  return <Line data={props.chartData} options={props.options}/>;
}

export default LineChart;
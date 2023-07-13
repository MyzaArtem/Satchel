import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
};

export const ChartComponent: React.FC = () => {

  return(
    <div>
    <h2>Doughnut Example</h2>
    <Doughnut data={data} options={options} />
  </div>
  )
};

export default ChartComponent;
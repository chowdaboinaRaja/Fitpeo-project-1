// src/components/RoundedBarChart.js
import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels'; // Import the plugin for adding labels to bars

const data = {
  labels: ['A', 'B', 'C', 'D', 'E'],
  datasets: [
    {
      label: 'Top & Bottom Circles',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    datalabels: {
      formatter: function (value, context) {
        // Customize the labels on top and bottom of the bars
        if (context.datasetIndex === 0) {
          return value;
        }
        return ''; // Return an empty string for the bottom labels
      },
      align: 'center', // Align the labels to the center of the bar
      anchor: 'center', // Anchor the labels in the center of the bar
    },
  },
};

const RoundedBarChart = () => {
  useEffect(() => {
    // Register the plugin for the top and bottom circles
    Chart.plugins.register({
      beforeDraw: function (chart) {
        var ctx = chart.ctx;
        var xaxis = chart.scales['x-axis-0'];
        var yaxis = chart.scales['y-axis-0'];
        chart.data.datasets.forEach(function (dataset, i) {
          var meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
            meta.data.forEach(function (element, index) {
              // Draw the top circle
              ctx.beginPath();
              ctx.arc(xaxis.getPixelForValue(chart.data.labels[index]), element._model.y - 10, 5, 0, 2 * Math.PI, false);
              ctx.fillStyle = dataset.backgroundColor[index];
              ctx.fill();
              ctx.closePath();

              // Draw the bottom circle
              ctx.beginPath();
              ctx.arc(xaxis.getPixelForValue(chart.data.labels[index]), element._model.y + element._model.height + 10, 5, 0, 2 * Math.PI, false);
              ctx.fill();
              ctx.closePath();
            });
          }
        });
      },
    });
  }, []);

  return (
    <div>
      <h2>Top & Bottom Circles Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RoundedBarChart;

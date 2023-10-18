import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Piechart = () => {
  const options = {
    chart: {
      type: "pie",
      height:245,
      width:280
    },
    title: {
      text: "Customers",
      align:'left'
    },
    subtitle: {
        align: 'left',
        text:'Customers that buy products'
    },
    series: [
      {
        name: "Outer",
        data: [
          {
            name: "Category A",
            y: 20,
            drilldown: "innerChart1",
            color:'#F43698'
          },
          {
            name: "Category B",
            y: 70,
            drilldown: "innerChart2",
            color:'#5E37E9'
          },
          {
            name: "Category C",
            y: 90,
            drilldown: "innerChart3",
            color:'#F1EFFC'
          },
        ],
      },
    ],
    drilldown: {
      series: [
        {
          name: "Inner 1",
          id: "innerChart1",
          data: [
            ["Subcategory A1", 0],
            ["Subcategory A2", 0],
          ],
        },
        {
          name: "Inner 2",
          id: "innerChart2",
          data: [
            ["Subcategory B1", 20],
            ["Subcategory B2", 20],
          ],
        },
        {
            name: "Inner 3",
            id: "innerChart3",
            data: [
              ["Subcategory A3", 60],
              ["Subcategory A3", 60],
            ],
          },
      ],
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Piechart;

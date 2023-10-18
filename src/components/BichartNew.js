import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class BichartNew extends React.Component {
    render() {
        const config = {
            chart: {
                type: 'column',
                height:270,
                
            },
            title: {
                align: 'left',
                text: 'Overvie',
            },
            subtitle: {
                align: 'left',
                text:'monthlyearning'
            },
            
            accessibility: {
                announceNewData: {
                    enabled: true
                }
            },
            xAxis: {
                type: 'category',
                lineWidth:0,
                gridLineWidth: 0, // Set the grid line width to 0 to remove grid lines
                tickWidth: 0,
                lineColor: 'transparent'
            
            },
            yAxis: {
                values:null,
                tickWidth: 0,
                gridLineWidth: 0,
                labels: {
                      enabled: false, // This disables the Y-axis labels (values)
                    },
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    borderRadius:10,
                
            }
            },
        
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
        
            series: [
                {
                    name: 'Earnings',
                    colorByPoint: true,
                    data: [
                        {
                            name: 'Jan',
                            y:110,
                            color:'#F2EFFF',
                            height:'40px',
                            
                        },
                        {
                            name: 'Feb',
                            y:80,
                            color:'#F2EFFF',

                        },
                        {
                            name: 'Mar',
                            y: 170,
                            color:'#F2EFFF',
                        },
                        {
                            name: 'Apr',
                            y: 120,
                            color:'#F2EFFF',
                        },
                        {
                            name: 'May',
                            y:150,
                            color:'#F2EFFF',
                        },
                        {
                            name: 'Jun',
                            y: 78,
                            color:'#F2EFFF',
                        },
                        {
                            name: 'Jul',
                            y: 150,
                            color:'#F2EFFF',
                        },
                        {
                            name: 'Aug',
                            y: 180,
                            color:'#5A32EA',
                        },
                        {
                            name: 'Sep',
                            y: 180,
                            color:'#F2EFFF',
                        },
                        {
                            name: 'Oct',
                            y: 140,
                            color:'#F2EFFF',
                        },
                        {
                            name: 'Nov',
                            y: 130,
                            color:'#F2EFFF',
                        },
                        {
                            name: 'Dec',
                            y: 120,
                            color:'#F2EFFF',
                        },
                    ]
                }
            ],
        };

        return (
            <div>
                <HighchartsReact
      containerProps={{ style: { height: "100%" } }}
      highcharts={ Highcharts }
      options={config }
                />
            </div>
        );
    }
}

export default BichartNew;

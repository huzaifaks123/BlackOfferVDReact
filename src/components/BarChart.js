import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ data }) => {
    const chartData = {
        series: [{
            name: 'Impact Analysis',
            data: data.map(item => item.intensity)
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: data.map(item => item.country),
                title: {
                    text: 'Countries'
                }
            },
            yaxis: {
                title: {
                    text: 'Impact Analysis'
                }
            },
            title: {
                text: 'Impact Analysis by Country',
                align: 'left'
            }
        }
    };

    return <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />;
};

export default BarChart;

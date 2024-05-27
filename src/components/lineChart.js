import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = ({ data }) => {
    // Process the data to match the format required by ApexCharts
    const processedData = data.map(item => ({
        x: new Date(item.published).getTime(), // Convert to timestamp
        y: item.intensity
    }));

    // Log processed data for debugging
    console.log('Processed Data:', processedData);

    // Configure the chart options and series
    const chartData = {
        series: [{
            name: 'Intensity',
            data: processedData
        }],
        options: {
            chart: {
                type: 'line',
                height: 350
            },
            xaxis: {
                type: 'datetime',
                title: {
                    text: 'Time'
                }
            },
            yaxis: {
                title: {
                    text: 'Intensity'
                }
            },
            title: {
                text: 'Intensity Over Time',
                align: 'left'
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            markers: {
                size: 5
            }
        }
    };

    return <Chart options={chartData.options} series={chartData.series} type="line" height={350} />;
};

export default LineChart;

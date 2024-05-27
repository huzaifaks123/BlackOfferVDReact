import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = ({ data }) => {
    const chartData = {
        series: data.map(item => item.intensity),
        options: {
            chart: {
                type: 'donut',
                height: 350
            },
            labels: data.map(item => item.sector),
            title: {
                text: 'Impact Analysis by Sector'
            }
        }
    };

    return <Chart options={chartData.options} series={chartData.series} type="donut" height={350} />;
};

export default DonutChart;

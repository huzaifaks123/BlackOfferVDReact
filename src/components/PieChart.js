import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ data }) => {
    const chartData = {
        series: data.map(item => item.relevance),
        options: {
            chart: {
                type: 'pie',
                height: 350
            },
            labels: data.map(item => item.sector),
            title: {
                text: 'Energy Sector Distribution'
            }
        }
    };

    return <Chart options={chartData.options} series={chartData.series} type="pie" height={350} />;
};

export default PieChart;

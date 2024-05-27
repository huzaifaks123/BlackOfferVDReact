import React from 'react';
import Chart from 'react-apexcharts';

const AreaChart = ({ data }) => {
    const series = [{
        name: 'Intensity',
        data: data.map(item => item.intensity)
    }];

    const options = {
        chart: {
            type: 'area',
            height: 350,
        },
        xaxis: {
            categories: data.map(item => item.topic),
            title: {
                text: 'Topics'
            }
        },
        yaxis: {
            title: {
                text: 'Intensity'
            }
        },
        title: {
            text: 'Impact Analysis - Intensity Trend',
            align: 'center'
        }
    };

    return <Chart options={options} series={series} type="area" height={350} />;
};

export default AreaChart;

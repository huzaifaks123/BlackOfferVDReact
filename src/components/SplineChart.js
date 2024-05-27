import React from 'react';
import Chart from 'react-apexcharts';

const SplineChart = ({ data }) => {
    const series = [{
        name: 'Intensity',
        data: data.map(item => item.intensity)
    }];

    const options = {
        chart: {
            type: 'line',
            height: 350,
            toolbar: {
                show: false
            }
        },
        stroke: {
            curve: 'smooth'
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
            text: 'Impact Analysis - Spline Chart',
            align: 'center'
        }
    };

    return <Chart options={options} series={series} type="line" height={350} />;
};

export default SplineChart;

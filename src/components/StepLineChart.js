import React from 'react';
import Chart from 'react-apexcharts';

const StepLineChart = ({ data }) => {
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
            curve: 'step'
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
            text: 'Impact Analysis - Step Line Chart',
            align: 'center'
        }
    };

    return <Chart options={options} series={series} type="line" height={350} />;
};

export default StepLineChart;

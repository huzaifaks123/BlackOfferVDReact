import React from 'react';
import Chart from 'react-apexcharts';

export default function ScatterChart({ data }) {
    // Prepare data for scatter plot
    const scatterData = data.map(item => ({
        x: item.intensity,
        y: item.likelihood,
        name: item.topic
    }));

    const series = [{
        name: 'Data Points',
        data: scatterData
    }];

    const options = {
        chart: {
            type: 'scatter',
            height: 350,
            zoom: {
                enabled: true,
                type: 'xy'
            }
        },
        xaxis: {
            title: {
                text: 'Intensity'
            },
        },
        yaxis: {
            title: {
                text: 'Likelihood'
            },
        },
        title: {
            text: 'Impact Analysis Scatter Plot',
        },
    };

    return <Chart options={options} series={series} type="scatter" height={350} />;
}

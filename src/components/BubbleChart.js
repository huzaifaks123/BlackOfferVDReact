import React from 'react';
import Chart from 'react-apexcharts';

export default function BubbleChart({ data }){
    const processedData = data.map(item => ({
        x: item.intensity,
        y: item.likelihood,
        z: item.relevance,
        name: item.topic
    }));

    const series = [{
        name: 'Consumption Data',
        data: processedData
    }];

    const options = {
        chart: {
            type: 'bubble',
            height: 350,
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
        tooltip: {
            shared: false,
            intersect: true,
        },
        title: {
            text: 'Consumption Overview Bubble Chart',
        },
    };

    return <Chart options={options} series={series} type="bubble" height={350} />;
};


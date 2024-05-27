import React from 'react';
import Chart from 'react-apexcharts';

export default function StackedAreaChart({ data }){
    let processedData = {};
    data.forEach(item => {
        const { start_year, topic, intensity } = item;
        if (!processedData[start_year]) {
            processedData[start_year] = {};
        }
        if (!processedData[start_year][topic]) {
            processedData[start_year][topic] = 0;
        }
        processedData[start_year][topic] += intensity;
    });

    const years = Object.keys(processedData).sort();
    const topics = [...new Set(data.map(item => item.topic))];

    const series = topics.map(topic => ({
        name: topic,
        data: years.map(year => processedData[year][topic] || 0)
    }));

    const options = {
        chart: {
            type: 'area',
            stacked: true,
            height: 350,
        },
        xaxis: {
            categories: years,
        },
        yaxis: {
            title: {
                text: 'Consumption Intensity'
            }
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
        plotOptions: {
            area: {
                fillTo: 'origin'
            }
        }
    };

    return <Chart options={options} series={series} type="area" height={350} />;
};
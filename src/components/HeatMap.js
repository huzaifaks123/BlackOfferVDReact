import React from 'react';
import Chart from 'react-apexcharts';

export default function Heatmap({ data }){
    let processedData = {};
    data.forEach(item => {
        const { start_year, region, intensity } = item;
        if (!processedData[region]) {
            processedData[region] = {};
        }
        if (!processedData[region][start_year]) {
            processedData[region][start_year] = 0;
        }
        processedData[region][start_year] += intensity;
    });

    const regions = Object.keys(processedData);
    const years = [...new Set(data.map(item => item.start_year))].sort();

    const series = regions.map(region => ({
        name: region,
        data: years.map(year => ({
            x: year,
            y: processedData[region][year] || 0
        }))
    }));

    const options = {
        chart: {
            type: 'heatmap',
            height: 350,
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#008FFB'],
        xaxis: {
            categories: years,
        },
        title: {
            text: 'Consumption Intensity by Region and Year'
        },
    };

    return <Chart options={options} series={series} type="heatmap" height={350} />;
};


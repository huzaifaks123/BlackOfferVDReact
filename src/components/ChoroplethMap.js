import React from 'react';
import Chart from 'react-apexcharts';

const ChoroplethMap = ({ data }) => {
    const chartData = {
        series: [{
            data: data.map(item => ({
                x: item.country,
                y: item.intensity
            }))
        }],
        options: {
            chart: {
                type: 'heatmap',
                height: 350
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#008FFB"],
            title: {
                text: 'Energy Consumption by Country',
                align: 'left'
            },
            tooltip: {
                x: {
                    show: false
                },
                y: {
                    formatter: (val) => `${val} kWh`
                }
            }
        }
    };

    return <Chart options={chartData.options} series={chartData.series} type="heatmap" height={350} />;
};

export default ChoroplethMap;

// TimeSeriesChart.js
import React from "react";
import {Chart} from "chart.js/auto";

function TimeSeriesChart({data}) {
    const chartRef = React.useRef(null);

    React.useEffect(() => {
        const canvas = chartRef.current;
        const ctx = canvas.getContext('2d');

        // Destroy any existing chart instance
        if (canvas.chart) {
            canvas.chart.destroy();
        }

        // Create a new chart instance
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map((item) => item.label),
                datasets: [
                    {
                        label: 'Time Series Data',
                        data: data.map((item) => item.value),
                        borderColor: 'blue',
                    },
                ],
            },
        });

        // Store the chart instance on the canvas element
        canvas.chart = chart;

        // Cleanup function to destroy the chart on unmount
        return () => {
            chart.destroy();
        };
    }, [data]);

    return <canvas ref={chartRef}/>;
}


export default TimeSeriesChart;


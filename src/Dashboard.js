import React from 'react';
import TimeSeriesChart from './TimeSeriesChart'


function Dashboard({chartsData}) {

    return (
        <div>
            <div className="center-container">
                <div className="grid-container">
                    {chartsData.map((chartData, index) => (
                        <div key={index} className="chart">
                            <TimeSeriesChart data={chartData.data} title_={chartData.title} subtitle_={chartData.subtitle} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Dashboard;



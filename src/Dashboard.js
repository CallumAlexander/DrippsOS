import React from 'react';
import TimeSeriesChart from './TimeSeriesChart'


function Dashboard({data}) {

    return (
        <div>
            <div className="center-container">
                <div className="grid-container">
                    <div className="chart">
                        <TimeSeriesChart data={data} title_={"Energy generated"} subtitle_={"In Kwh"}/>
                    </div>
                    <div className="chart">
                        <TimeSeriesChart data={data} title_={"Main Sluice Height"} subtitle_={"Metres"}/>
                  </div>
                  <div className="chart">
                      <TimeSeriesChart data={data} title_={"Wheel Sluice Height"} subtitle_={"Metres"}/>
                  </div>
                  <div className="chart">
                      <TimeSeriesChart data={data} title_={"Water throughput"} subtitle_={"Gallons per second in the trough"}/>
                  </div>
                  <div className="chart">
                      <TimeSeriesChart data={data} title_={"Wheel RPM"}/>
                  </div>
                  <div className="chart">
                      <TimeSeriesChart data={data} title_={"Valve height"} subtitle_={"Metres"}/>
                  </div>
                </div>
            </div>
        </div>
    );

}

export default Dashboard;



import React from "react";
import "../App.css";
import ReactApexChart from "react-apexcharts";

function PieGraph() {
    const series = [44, 55, 41, 17, 15];
            const options = {
              chart: {
                type: 'donut',
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            };
    return(
        <div style={{
            backgroundColor:"white",
            textAlign:"center",
            width:"500px",
        }}>
            <br/>
            <h2>Today's Energy Usage Per Appliance</h2>
            <br/>
            <ReactApexChart options={options} series={series} type="donut" />
            <br/>
        </div>
    );
}

export default PieGraph;
import React from "react";
import "../App.css";
import ReactApexChart from "react-apexcharts";

function LineGraph() {
    const series = [{
        name: "Units",
        data: [31, 41, 45, 55, 49, 62, 20, 55, 84, 35, 30, 38]
    }];
    const options = {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: '',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'],
      }
    };
    return(
        <div style={{
            backgroundColor:"white",
            textAlign:"center",
        }}>
            <br/>
            <h2>Total Energy Usage Per Month</h2>
            <br/>
            <ReactApexChart options={options} series={series} type="line" height={350} />
            <br/>
        </div>
    );
}

export default LineGraph;
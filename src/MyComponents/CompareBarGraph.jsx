import React from "react";
import "../App.css";
import ReactApexChart from "react-apexcharts";

function CompareBarGraph() {
    const series = [{
        name: 'Washing Machine',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Air Conditioner',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Electrical Induction',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }];
      const options = {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "" + val + " Units"
            }
          }
        }
    };
    return(
        <div style={{
            backgroundColor:"white",
            textAlign:"center",
        }}>
            <br/>
            <h2>Comparision Graph for three appliances per month</h2>
            <br/>
            <ReactApexChart options={options} series={series} type="bar" height={350} />
            <br/>
        </div>
    );
}

export default CompareBarGraph;
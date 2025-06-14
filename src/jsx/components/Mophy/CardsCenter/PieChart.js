import React from "react";
import ReactApexChart from "react-apexcharts";


class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [34, 12, 41, 22, 15],
      options: {
        chart: {
          type: "donut",
          width: 300,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 0,
        },
        colors:['#1EAAE7', '#6418C3', '#2BC155', '#FF7A30', '#FFEF5F'],
        legend: {
          position: "bottom",
          show: false,
        },
        responsive: [{
			breakpoint: 575,
			options: {
				chart: {
					width: 200
				},
				legend: {
					position: 'bottom',
					show:false
				}
			}
        }]
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
        />
      </div>
    );
  }
}

export default PieChart;

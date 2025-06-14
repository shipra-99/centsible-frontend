import React from "react";
import ReactApexChart from "react-apexcharts";

class TransferBarGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
			name: 'Running',
			data: [50, 18, 70, 40, 90, 70, 20],
        }, {
			name: 'Cycling',
			data: [80, 40, 55, 20, 45, 30, 80],
        }],
      options: {
        chart: {
          height: 370,
          type: "bar",
          toolbar: {
            show: false,
			},
        },
		plotOptions: {
			bar: {
			  borderRadius: 8,
			  horizontal: false,
			  columnWidth: '57%',
			},
		  },
        colors:['#D2D2D2', '#EBEBEB'],
        legend: {
			show: false,
			fontSize: '12px',
			labels: {
				colors: '#000000',
				
				},
				markers: {
				width: 18,
				height: 18,
				strokeWidth: 0,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
			}
		},
		fill: {
          opacity: 1,
		  colors:['#D2D2D2', '#EBEBEB'],
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 4,
          colors: ['transparent'],
		 
        },
        grid:{
			borderColor: '#eee',
		},
        
        xaxis: {
			categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			labels: {
				style: {
					colors: '#787878',
					fontSize: '13px',
					fontFamily: 'poppins',
					fontWeight: 100,
					cssClass: 'apexcharts-xaxis-label',
				},
			},
			crosshairs: {
				show: false,
			}
		},
		yaxis: {
			labels: {
				offsetX:-16,
				style: {
					colors: '#787878',
					fontSize: '13px',
					fontFamily: 'poppins',
					fontWeight: 100,
					cssClass: 'apexcharts-xaxis-label',
				},
			},
		},
         tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        },
      },
    };
  }

	render() {
		return (
			<div id="chart">
				<ReactApexChart
				  options={this.state.options}
				  series={this.state.series}
				  type="bar"
				  height={350}
				/>
			</div>
		);
	}
}

export default TransferBarGraph;

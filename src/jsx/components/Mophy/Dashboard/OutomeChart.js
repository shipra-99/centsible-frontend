import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class OutomeChart extends Component {
   render() {
      const data = {
         defaultFontFamily: "Poppins",
			labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April"],

			datasets: [{
				label: "Sales Stats",
				backgroundColor: ['rgba(234, 73, 137, 0)'],
				borderColor: '#1EAAE7',
				pointBackgroundColor: '#1EAAE7',
				pointBorderColor: '#1EAAE7',
				borderWidth:4,
				borderRadius:10,
				pointHoverBackgroundColor: '#1EAAE7',
				pointHoverBorderColor: '#1EAAE7',		
				tension: 0.4,		
				data: [12, 20, 16, 13, 16, 24, 20, 21, 19, 23, 17, 14, 24, 21, 13, 15, 27, 29, 20, 12, 20, 12, 20, 10]
			}]
      };
      const options = {
			title: {
				display: !1
			},
			plugins :{
				tooltip: {
					intersect: !1,
					mode: "nearest",
					xPadding: 10,
					yPadding: 10,
					caretPadding: 10
				},
				legend: {
					display: !1
				}
			},
			responsive: !0,
			maintainAspectRatio: !1,
			hover: {
				mode: "index"
			},
			scales: {
				x:{
					display: !1,
					grid: !1,
					scaleLabel: {
						display: !0,
						labelString: "Month"
					}
				},
				y: {
					display: !1,
					grid: !1,
					scaleLabel: {
						display: !0,
						labelString: "Value"
					},
					beginAtZero: !0,
					ticks: {
					}
				}
			},
			elements: {
				point: {
					radius: 0,
					borderWidth: 0
				}
			},
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 5,
					bottom: 0
				}
			}
      };

      return (
         <>
            <Line data={data} height={80} options={options} />
         </>
      );
   }
}

export default OutomeChart;

import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LimitChart extends Component {
   render() {
      const data = {
			defaultFontFamily: 'Poppins',
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
			datasets: [
				{
					label: "My First dataset",
					data: [40, 50, 40, 50, 40, 50, 40],
					borderColor: 'rgba(0,0,0,0)',
					borderWidth: "1",
					backgroundColor: 'rgba(39,120,238,0.8)', 
					pointBackgroundColor: 'rgba(26, 51, 213, 0.5)',
					fill:true,
					tension: 0.4
				}, {
					label: "My First dataset",
					data: [50, 60, 50, 60, 50, 60, 50],
					borderColor: 'rgba(0,0,0,0)',
					borderWidth: "1",
					backgroundColor: 'rgba(91,171,240,0.8)',
					pointBackgroundColor: 'rgba(56, 164, 248, 1)',
					fill:true,
					tension: 0.4
				}, {
					label: "My First dataset",
					data: [60, 70, 60, 70, 60, 70, 60],
					borderColor: 'rgba(0,0,0,0)',
					borderWidth: "1",
					backgroundColor: 'rgba(162,218,243,0.8)',
					pointBackgroundColor: 'rgba(56, 164, 248, 1)',
					fill:true,
					tension: 0.4
				}
				
			]
		};
		const options = {
			responsive:true,
			plugins:{
				legend: false, 
			},
			elements: {
				point:{
					radius: 0
				}
			},
			scales: {
				y: {
					max: 100, 
					min: 0, 
					beginAtZero: true, 
					ticks: {
						stepSize: 20, 
						//padding: 10
					},
					display:false,
				},
				x: { 
					ticks: {
						padding: 5
					},
					display:false,
				}
			}
		};

      return (
         <>
            <Line data={data} height={300} options={options} />
         </>
      );
   }
}

export default LimitChart;

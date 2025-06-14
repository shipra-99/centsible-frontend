import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class StatisticCanvas extends Component {
   render() {
      const data = {
			defaultFontFamily: 'Poppins',
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			datasets: [
				{
					label: "My First dataset",
					data: [15, 40, 55, 40, 25, 35, 40, 50, 85, 95, 54, 35],
					borderColor: 'rgb(250, 0, 0, 0)',
					borderWidth: "0",
					backgroundColor: '#1EAAE7', 
					hoverBackgroundColor: '#60CFFF',
					barThickness: 6,
				}
			]
		};
		const options = {
			plugins:{
				legend: false
			}, 
			responsive:true,
			maintainAspectRatio: false,  
			
			scales: {
				y:{
					display: false, 
					ticks: {
						beginAtZero: true, 
						display: false, 
						max: 100, 
						min: 0, 
						stepSize: 10
					}, 
					gridLines: {
						display: false, 
						drawBorder: false
					}
				},
				x: {
					display: false, 
					barPercentage: 0.4, 
					grid: {
						display: false, 
						drawBorder: false
					}, 
					ticks: {
						display: false
					}
				}
			}
		};

      return (
         <>
            <Bar data={data} height={300} options={options} />
         </>
      );
   }
}

export default StatisticCanvas;

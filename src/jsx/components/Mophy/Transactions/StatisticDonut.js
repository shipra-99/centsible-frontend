import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexRedialBar extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [85],
         options: {
            chart: {
               height: 300,
               type: "radialBar",
               offsetY: -10,
			    toolbar: {
					show: false
				},
            },
            plotOptions: {
                radialBar: {
					hollow: {
						margin: 0,
						size: '30%',
						background: '#fff',
						image: undefined,
						imageOffsetX: 0,
						imageOffsetY: 0,
						position: 'front',
						dropShadow: {
							enabled: true,
							top: 3,
							left: 0,
							blur: 4,
							opacity: 0.24
						}
					},
					track: {
						background: '#E5E5E5',
						strokeWidth: '45%',
						margin: 0, // margin is in pixels
					},
					dataLabels: {
						show: true,
						name: {
							offsetY: -10,
							show: true,
							color: '#888',
							fontSize: '17px'
						},
						value: {
							offsetY: -5,
							color: '#111',
							fontSize: '24px',
							show: true,
						},
					},
				},
            },
            labels: [""],
         },
      };
   }

   render() {
      return (
         <div id="chart">
            <ReactApexChart
               options={this.state.options}
               series={this.state.series}
               type="radialBar"
               height={300}
            />
         </div>
      );
   }
}
export default ApexRedialBar;

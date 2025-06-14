import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import card1 from './../../../../images/card/card1.png';
import card2 from './../../../../images/card/card2.png';
import card3 from './../../../../images/card/card3.png';
import card4 from './../../../../images/card/card4.png';
import dualdot from './../../../../images/dual-dot.png';


 const contentBlog =[
	{images: card1, title: 'Purple Card',	  balance: '$340', }, 
	{images: card2, title: 'Green Card',	  balance: '$67,412', }, 
	{images: card3, title: 'Blue Card',  	  balance: '$45,547', }, 
	{images: card4, title: 'Orange Card',     balance: '$23,511', }, 
] 

const CardCenterOwl = () => {
	const settings = {
		dots: false,
		infinite: true,
		arrows: false,
		
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				  
				},
			},
			{
				breakpoint: 1400,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  centerMode: true,
				  centerPadding: "270px",
				  
				},
			},
			{
				breakpoint: 1024,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  centerMode: true,
				  centerPadding: "100px",
				  
				},
			},
			
			{
				breakpoint: 768,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Slider  className="cards  mb-sm-5 mb-3" {...settings}>
			{contentBlog.map((data,index)=>(
				<div className="items p-3">
					<div className="card-bx mb-0">
						<img src={data.images} alt="" className="w-100" /> 
						<div className="card-info text-white">
							<p className="mb-1">{data.title}</p>
							<h2 className="fs-36 text-white mb-sm-4 mb-3">{data.balance}</h2>
							<div className="d-flex align-items-center justify-content-between mb-sm-5 mb-3">
								<img src={dualdot} alt="" className="dot-img" />
								<h4 className="fs-20 text-white mb-0">**** **** **** 1234</h4>
							</div>
							<div className="d-flex">
								<div className="me-5">
									<p className="fs-14 mb-1 op6">VALID THRU</p>
									<span>08/21</span>
								</div>
								<div>
									<p className="fs-14 mb-1 op6">CARD HOLDER</p>
									<span>Franklin Jr.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</Slider>
	);
};

export default CardCenterOwl;
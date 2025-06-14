import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import avatar1 from './../../../../images/avatar/1.jpg';
import avatar2 from './../../../../images/avatar/2.jpg';
import avatar3 from './../../../../images/avatar/3.jpg';
import avatar4 from './../../../../images/avatar/4.jpg';
import avatar5 from './../../../../images/avatar/5.jpg';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next fa fa-caret-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
		<div className="owl-nav">
			<div className=" owl-prev fa fa-caret-left" onClick={onClick} style={{zIndex:1}}/>
		</div>
    );
} 

const contentBlog =[
	{images: avatar1, id: '@davidxc', title: 'David',}, 
	{images: avatar2, id: '@cin157', title: 'Cindy', }, 
	{images: avatar3, id: '@sam224', title: 'Samuel', }, 
	{images: avatar4, id: '@martha', title: 'Martha', }, 
	{images: avatar5, id: '@oliv62', title: 'Olivia', }, 
	{images: avatar3, id: '@davidxc', title: 'Honer', }, 
]

const TransferOwl = () => {
	const settings = {
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		center: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1601,
				settings: {
				  slidesToShow: 5,
				  slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1200,
				settings: {
				  slidesToShow: 5,
				  slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				},
			},
			{
				breakpoint: 450,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1,
				},
			},
		],
	};
  return (
    <Slider className="owl-carousel testimonial-one mb-5" {...settings}>
		{contentBlog.map((data,index)=>(
			<div className="owl-item">
				<div className="image-bx mb-3">
					<img src={data.images} alt="" />
					<i className="las la-check-circle"></i>
				</div>
				<h6 className="fs-16 mb-0"><Link to={"./transactions-details"} className="text-black">{data.title}</Link></h6>
				<span className="fs-12">{data.id}</span>
			</div>
		))}      
    </Slider>
  );
};

export default TransferOwl;
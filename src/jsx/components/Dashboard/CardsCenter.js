import React,{Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import {Dropdown, Modal } from "react-bootstrap";
import CardCenterOwl from './../Mophy/CardsCenter/CardCenterOwl';
import card1 from './../../../images/card/1.jpg';
import card2 from './../../../images/card/2.jpg';
import card3 from './../../../images/card/3.jpg';
import card4 from './../../../images/card/4.jpg';

const PieChart = loadable(() =>
	pMinDelay(import("../Mophy/CardsCenter/PieChart"), 1000)
);

const cardBlog = [
	{image: card1, type: 'Primary',		 numb: '2256', bank: 'SBI Bank', },	
	{image: card2, type: 'Secondary', 	 numb: '6551', bank: 'IOB', },
	{image: card3, type: 'Primary',		 numb: '6783', bank: 'AXIS Bank', },
	{image: card4, type: 'Secondary', 	 numb: '8843', bank: 'BOB', },
];

const CardsCenter = () => {
	const [sendMessage, setSendMessage] = useState(false);
	return(
		<Fragment>
			<div className="d-sm-flex d-block justify-content-between align-items-center mb-4">
				<h2 className="text-black font-w600 mb-sm-0 mb-2">Cards Center</h2>
				<button type="button" className="btn btn-rounded btn-primary" onClick={() => setSendMessage(true)}><span className="btn-icon-left text-primary"><i className="fa fa-plus" aria-hidden="true"></i>
					</span>New Card</button>
				{/*   Modal  */}
				<Modal className="modal fade"  show={sendMessage}>
					<div className=" modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Modal title</h5>
								<button type="button" className="close" onClick={() => setSendMessage(false)}><span>&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-danger light" onClick={() => setSendMessage(false)}>Close</button>
								<button type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</Modal>
			</div>
			<div className="row">
				<div className="col-xl-12">
					<CardCenterOwl />
				</div>
				<div className="col-xl-9">
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header d-sm-flex d-block border-0 pb-0">
									<div>
										<h4 className="fs-20 text-black">Card List</h4>
										<span className="fs-12">Lorem ipsum dolor sit amet, consectetur</span>
									</div>
									<Dropdown className="custom-dropdown mb-0 mt-3 mt-sm-0"  >
										<Dropdown.Toggle className="btn btn-light btn-rounded i-false" variant=''>
											Newest
											<i className="fa fa-caret-down text-primary ms-3" aria-hidden="true"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu className="dropdown-menu-right" alignRight={true}>
											<Dropdown.Item>Details</Dropdown.Item>
											<Dropdown.Item className="text-danger">Cancel</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
								<div className="card-body pb-0">
									{cardBlog.map((item,index)=>(
										<div className="d-flex mb-3 border-bottom justify-content-between flex-wrap align-items-center">
											<div className="d-flex pb-3 align-items-center">
												<img src={item.image} alt="" className="rounded me-3" width="100" />
												<div className="me-3">
													<p className="fs-14 mb-1">Card Type</p>
													<span className="text-black font-w500">{item.type}</span>
												</div>
											</div>
											<div className="me-3 pb-3">
												<p className="fs-14 mb-1">Bank</p>
												<span className="text-black font-w500">{item.bank}</span>
											</div>
											<div className="me-3 pb-3">
												<p className="fs-14 mb-1">Card Number</p>
												<span className="text-black font-w500">**** **** **** {item.numb}</span>
											</div>
											<div className="me-3 pb-3">
												<p className="fs-14 mb-1">Namein Card</p>
												<span className="text-black font-w500">Franklin Jr.</span>
											</div>
											<Link to={"./transactions-details"} className="fs-14 btn-link me-3 pb-3">See Number</Link>
											<Dropdown className='pb-3'>
												<Dropdown.Toggle className='i-false btn-link ' as="div" data-toggle='dropdown' variant=''>
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999Z" fill="black"></path>
														<path d="M10 4.00006C10 5.10463 10.8954 6.00006 12 6.00006C13.1046 6.00006 14 5.10463 14 4.00006C14 2.89549 13.1046 2.00006 12 2.00006C10.8954 2.00006 10 2.89549 10 4.00006Z" fill="black"></path>
														<path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z" fill="black"></path>
													</svg>
												</Dropdown.Toggle>
												<Dropdown.Menu className='dropdown-menu dropdown-menu-right' alignRight={true}>
													<Dropdown.Item className=''>Delete</Dropdown.Item>
													<Dropdown.Item className=''>Edit</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									))}
									
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3">
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header border-0 pb-0">
									<div>
										<h4 className="fs-20 text-black">Card Statistic</h4>
										<span className="fs-12">Lorem ipsum dolor sit amet, consectetur</span>
									</div>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-xl-12 col-sm-6">
											<div id="pieChart">
												<PieChart />
											</div>
										</div>
										<div className=" col-xl-12 col-sm-6">
											<div className="d-flex flex-wrap text-black fs-12 mt-4">
												<span className="me-4 mb-3">
													<svg className="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect width="19" height="19" rx="9.5" fill="#1EAAE7"/>
													</svg>
													Main Card
												</span>
												<span className="me-4 mb-3">
													<svg className="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect width="19" height="19" rx="9.5" fill="#FF7A30"/>
													</svg>
													Orange Card
												</span>
												<span className="me-4 mb-3">
													<svg className="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect width="19" height="19" rx="9.5" fill="#6418C3"/>
													</svg>
													Purple Card
												</span>
												<span className="me-4 mb-3">
													<svg className="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect width="19" height="19" rx="9.5" fill="#FFEF5F"/>
													</svg>
													Yellow Card
												</span>
												<span className="me-4 mb-3">
													<svg className="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect width="19" height="19" rx="9.5" fill="#2BC155"/>
													</svg>
													Green Card
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>		
		</Fragment>
	)
}
export default CardsCenter;
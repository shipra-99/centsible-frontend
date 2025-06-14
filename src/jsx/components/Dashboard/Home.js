import React,{Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown, Modal } from "react-bootstrap";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import TransferOwl from './../Mophy/Dashboard/TransferOwl';
import TransferBarGraph from './../Mophy/Dashboard/TransferBarGraph';
import HomeTab from './../Mophy/Dashboard/HomeTab';
import Donut from './../Mophy/Dashboard/Donut';

//Images
import card1 from './../../../images/card/card.png';
import dual from './../../../images/dual-dot.png';

const LimitChart = loadable(() =>
	pMinDelay(import("./../Mophy/Dashboard/LimitChart"), 1000)
);
const IncomeChart = loadable(() =>
	pMinDelay(import("./../Mophy/Dashboard/IncomeChart"), 1000)
);
const OutomeChart = loadable(() =>
	pMinDelay(import("./../Mophy/Dashboard/OutomeChart"), 1000)
);
const WeeklyChart = loadable(() =>
	pMinDelay(import("./../Mophy/Dashboard/WeeklyChart"), 1000)
);


const Home = () => {
	const [sendMessage, setSendMessage] = useState(false);
	return(
		<Fragment>
			<div className="form-head mb-4">
				<h2 className="text-black font-w600 mb-0">Dashboard</h2>
			</div>
			
			<div className="row">
				<div className="col-xl-6">
					<div className="row">
						<div className="col-xl-8 col-lg-6 col-md-7 col-sm-8">
							<div className="card-bx stacked">
								<img src={card1} alt="" className="mw-100" />
								<div className="card-info text-white">
									<p className="mb-1">Main Balance</p>
									<h2 className="fs-36 text-white mb-sm-4 mb-3">$673,412.66</h2>
									<div className="d-flex align-items-center justify-content-between mb-sm-5 mb-3">
										<img src={dual} alt="" className="dot-img" />
										<h4 className="fs-20 text-white mb-0">**** **** **** 1234</h4>
									</div>
									<div className="d-flex">
										<div className="me-5">
											<p className="fs-14 mb-1 op6">VALID THRU</p>
											<span>08/21</span>
										</div>
										<div>
											<p className="fs-14 mb-1 op6">CARD HOLDER</p>
											<span>Shipra</span>
										</div>
									</div>
								</div>
								<Link to={"/cards-center"}><i className="fa fa-caret-down" aria-hidden="true"></i></Link>
							</div>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-5 col-sm-4">
							<div className="card bgl-primary card-body overflow-hidden p-0 d-flex rounded">
								<div className="p-0 text-center mt-3">
									<span className="text-black">Limit</span>
									<h3 className="text-black fs-20 mb-0 font-w600">$4,000</h3>
									<small>/$10,000</small>
								</div>
								<div className="mt-auto line-chart-demo">
									<LimitChart />
								</div>									
							</div>	
						</div>
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header d-sm-flex d-block border-0 pb-0">
									<div className="pr-3 me-auto mb-sm-0 mb-3">
										<h4 className="fs-20 text-black mb-1">Transaction Overview</h4>
										<span className="fs-12">Lorem ipsum dolor sit amet, consectetur</span>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<Link to={"#"} className="btn btn-rounded btn-light me-3" data-toggle="modal" data-target="#DownloadReport" onClick={() => setSendMessage(true)} ><i className="las la-download text-primary scale5 me-3"></i>Download Report</Link>
										
										<Dropdown className="">
											<Dropdown.Toggle variant="" as="div" className="btn-link i-false" >	
												<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill	="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><	circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
											</Dropdown.Toggle>	
											<Dropdown.Menu className="dropdown-menu-right" alignRight={true}>
												<Dropdown.Item >Delete </Dropdown.Item>
												<Dropdown.Item >Edit </Dropdown.Item>		
											</Dropdown.Menu>			
										</Dropdown>
									</div>
								</div>
								<div className="card-body">
									<div id="chartBar">
										<TransferBarGraph />
									</div>
									<div className="d-flex">
										<div className="form-check custom-switch toggle-switch text-right me-4 mb-2">
											<input type="checkbox" className="form-check-input" id="customSwitch11" />
											<label className="form-check-label fs-14 text-black pr-2" for="customSwitch11">Number</label>
										</div>
										<div className="form-check custom-switch toggle-switch text-right me-4 mb-2">
											<input type="checkbox" className="form-check-input" id="customSwitch12" />
											<label className="form-check-label fs-14 text-black pr-2" for="customSwitch12">Analytics</label>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header d-sm-flex d-block border-0 pb-0">
									<div className="pr-3 mb-sm-0 mb-3 me-auto">
										<h4 className="fs-20 text-black mb-1">Quick Transfer</h4>
										<span className="fs-12">Lorem ipsum dolor sit amet, consectetur</span>
									</div>
									<span className="fs-24 text-black font-w600">$56,772.38</span>
								</div>
								<div className="card-body">									
									<TransferOwl />									
									<form>
										<div className="form-group row style-1 align-items-center">
											<label className="fs-18 col-sm-3 text-black font-w500">Amount</label>
											<div className="input-group col-sm-9">
												<input type="number" className="form-control" />
												<div className="input-group-append">
													<button className="btn btn-primary rounded" type="button">TRANSFER NOW</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-6">
					<div className="row">
						<div className="col-xl-6 col-sm-6">
							<div className="card">
								<div className="card-header flex-wrap border-0 pb-0">
									<div className="me-3 mb-2">
										<p className="fs-14 mb-1">Income</p>
										<span className="fs-24 text-black font-w600">$65,123</span>
									</div>
									<span className="fs-12 mb-2">
										<svg className="" width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0.999939 13.5C1.91791 12.4157 4.89722 9.22772 6.49994 7.5L12.4999 10.5L19.4999 1.5" stroke="#2BC155" strokeWidth="2"/>
											<path d="M6.49994 7.5C4.89722 9.22772 1.91791 12.4157 0.999939 13.5H19.4999V1.5L12.4999 10.5L6.49994 7.5Z" fill="url(#paint0_linear)"/>
											<defs>
											<linearGradient id="paint0_linear" x1="10.2499" y1="3" x2="10.9999" y2="13.5" gradientUnits="userSpaceOnUse">
											<stop offset="0" stopColor="#2BC155" stopOpacity="0.73"/>
											<stop offset="1" stopColor="#2BC155" stopOpacity="0"/>
											</linearGradient>
											</defs>
										</svg>
										4% (30 days)
									</span>
								</div>
								<div className="card-body p-0">
									<IncomeChart />	
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-sm-6">
							<div className="card">
								<div className="card-header flex-wrap border-0 pb-0">
									<div className="me-3 mb-2">
										<p className="fs-14 mb-1">Outome</p>
										<span className="fs-24 text-black font-w600">$24,551</span>
									</div>
									<span className="fs-12 mb-2">
									<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14.3514 7.5C15.9974 9.37169 19.0572 12.8253 20 14H1V1L8.18919 10.75L14.3514 7.5Z" fill="url(#paint0_linear1)"/>
										<path d="M19.5 13.5C18.582 12.4157 15.6027 9.22772 14 7.5L8 10.5L1 1.5" stroke="#FF2E2E" strokeWidth="2" stroke-linecap="round"/>
										<defs>
										<linearGradient id="paint0_linear1" x1="10.5" y1="2.625" x2="9.64345" y2="13.9935" gradientUnits="userSpaceOnUse">
										<stop offset="0" stopColor="#FF2E2E"/>
										<stop offset="1" stopColor="#FF2E2E" stopOpacity="0.03"/>
										</linearGradient>
										</defs>
									</svg>
									4% (30 days)</span>
								</div>
								<div className="card-body p-0">
									<OutomeChart />
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<div className="card overflow-hidden">
								<div className="card-header d-sm-flex d-block border-0 pb-0">
									<div className="mb-sm-0 mb-2">
										<p className="fs-14 mb-1">Weekly Wallet Usage</p>
										<span className="mb-0">
										<svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M11.9999 6L5.99994 -2.62268e-07L-6.10352e-05 6" fill="#2BC155"/>
										</svg>
										<strong className="fs-24 text-black ms-2 me-3">43%</strong>Than last week</span>
									</div>
									<span className="fs-12">
									<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0.999939 13.5C1.91791 12.4157 4.89722 9.22772 6.49994 7.5L12.4999 10.5L19.4999 1.5" stroke="#2BC155" strokeWidth="2"/>
										<path d="M6.49994 7.5C4.89722 9.22772 1.91791 12.4157 0.999939 13.5H19.4999V1.5L12.4999 10.5L6.49994 7.5Z" fill="url(#paint0_linear2)"/>
										<defs>
										<linearGradient id="paint0_linear2" x1="10.2499" y1="3" x2="10.9999" y2="13.5" gradientUnits="userSpaceOnUse">
										<stop offset="0" stopColor="#2BC155" stopOpacity="0.73"/>
										<stop offset="1" stopColor="#2BC155" stopOpacity="0"/>
										</linearGradient>
										</defs>
									</svg>
									4% (30 days)</span>
								</div>
								<div className="card-body p-0">
									<WeeklyChart />
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<div className="card">
								<div className="card-body">
									<div className="row">
										<div className="col-xl-5 col-xxl-12 col-md-5">
											<h4 className="fs-20 text-black mb-4">Spendings</h4>
											<div className="row">
												<div className="d-flex col-xl-12 col-xxl-6  col-md-12 col-sm-6 mb-4">
													<svg className="me-3" width="14" height="54" viewBox="0 0 14 54" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect x="-6.10352e-05" width="14" height="54" rx="7" fill="#AC39D4"/>
													</svg>
													<div>
														<p className="fs-14 mb-2">Investment</p>
														<span className="fs-18 font-w500"><span className="text-black me-2">$1,415</span>/$2,000</span>
													</div>													
												</div>
												<div className="d-flex col-xl-12 col-xxl-6 col-md-12 col-sm-6 mb-4">
													<svg className="me-3" width="14" height="54" viewBox="0 0 14 54" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect x="-6.10352e-05" width="14" height="54" rx="7" fill="#40D4A8"/>
													</svg>
													<div>
														<p className="fs-14 mb-2">Installment</p>
														<span className="fs-18 font-w500"><span className="text-black me-2">$1,567</span>/$5,000</span>
													</div>
												</div>
												<div className="d-flex col-xl-12 col-xxl-6 col-md-12 col-sm-6 mb-4">
													<svg className="me-3" width="14" height="54" viewBox="0 0 14 54" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect x="-6.10352e-05" width="14" height="54" rx="7" fill="#1EB6E7"/>
													</svg>
													<div>
														<p className="fs-14 mb-2">Restaurant</p>
														<span className="fs-18 font-w500"><span className="text-black me-2">$487</span>/$10,000</span>
													</div>
												</div>
												<div className="d-flex col-xl-12 col-xxl-6 col-md-12 col-sm-6 mb-4">
													<svg className="me-3" width="14" height="54" viewBox="0 0 14 54" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect x="-6.10352e-05" width="14" height="54" rx="7" fill="#461EE7"/>
													</svg>
													<div>
														<p className="fs-14 mb-2">Property</p>
														<span className="fs-18 font-w500"><span className="text-black me-2">$3,890</span>/$4,000</span>
													</div>
												</div>
											</div>
										</div>
										<div className="col-xl-7  col-xxl-12 col-md-7">
											<div className="row">
												<div className="col-sm-6 mb-4">
													<div className="bg-secondary rounded text-center p-3">
														<div className="d-inline-block position-relative donut-chart-sale mb-3">
															<Donut value={71} backgroundColor="rgb(255, 255, 255)" backgroundColor2="rgba(0,0,0,0.1)"/>
															<small className="text-white">71%</small>
														</div>
														<span className="fs-14 text-white d-block">Investment</span>
													</div>
												</div>
												<div className="col-sm-6 mb-4">
													<div className="bg-success rounded text-center p-3">
														<div className="d-inline-block position-relative donut-chart-sale mb-3">
															<Donut value={30} backgroundColor="rgb(255, 255, 255)" backgroundColor2="rgba(0,0,0,0.1)"/>
															<small className="text-white">30%</small>
														</div>
														<span className="fs-14 text-white d-block">Installment</span>
													</div>
												</div>
												<div className="col-sm-6 mb-sm-0 mb-4">
													<div className="border border-2 border-primary rounded text-center p-3">
														<div className="d-inline-block position-relative donut-chart-sale mb-3">
															<Donut value={5} backgroundColor="rgb(30, 170, 231)" backgroundColor2="rgba(0,0,0,0.1)"/>
															<small className="text-black">5%</small>
														</div>
														<span className="fs-14 text-black d-block">Restaurant</span>
													</div>
												</div>
												<div className="col-sm-6 mb-sm-0 mb-4">
													<div className="bg-info rounded text-center p-3">
														<div className="d-inline-block position-relative donut-chart-sale mb-3">
															<Donut value={96} backgroundColor="rgb(255, 255, 255)" backgroundColor2="rgba(0,0,0,0.1)"/>
															<small className="text-white">96%</small>
														</div>
														<span className="fs-14 text-white d-block">Property</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<div className="card">
								<HomeTab />
							</div>
						</div>
					</div>
				</div>

			</div>		
			{/* <!-- Modal --> */}
			<Modal className="modal fade" show={sendMessage} >
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
						<button type="button" className="close" onClick={() => setSendMessage(false)} data-dismiss="modal"><span>&times;</span>
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
			</Modal>
		</Fragment>
	)
}
export default Home;

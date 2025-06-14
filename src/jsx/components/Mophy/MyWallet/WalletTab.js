import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Accordion, Tab, Nav} from 'react-bootstrap';


import {accordionBlog,IconRed,
	PendingBlog,AccordBox,
	IconGreen, CompleteBlog
} 
from './TabData';
//Images
//import avt10 from './../../../../images/avatar/10.png';
//import avt11 from './../../../../images/avatar/11.png';
import avt12 from './../../../../images/avatar/12.png';
import avt13 from './../../../../images/avatar/13.png';
//import avt14 from './../../../../images/avatar/14.png';


const WalletTab = () => {
	const [activeDefault, setActiveDefault] = useState(0)
	return(
		<>	
			<div className="col-xl-12">
				<Tab.Container defaultActiveKey="Monthly">
					<div className="card">
						<div className="card-header d-block d-sm-flex border-0">
							<div>
								<h4 className="fs-20 text-black">Payment History</h4>
								<p className="mb-0 fs-13">Lorem ipsum dolor sit amet, consectetur</p>
							</div>
							<div className="card-action card-tabs mt-3 mt-sm-0">
								<Nav as="ul" className="nav nav-tabs" role="tablist">
									<Nav.Item as="li" className="nav-item">
										<Nav.Link eventKey="Monthly" >Monthly</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li" className="nav-item">
										<Nav.Link eventKey="Weekly">Weekly</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li">
										<Nav.Link eventKey="Today">Today</Nav.Link>
									</Nav.Item>
								</Nav>
							</div>
						</div>
						<Tab.Content className="card-body payment-bx tab-content p-0">
							<Tab.Pane eventKey="Monthly">
								<Accordion className="accordion accordion-primary"  defaultActiveKey="0" id="accordion-one" >
									{accordionBlog.map((data, i) => (
										<Accordion.Item className="accordion__item border-bottom mb-0"  key={i}  eventKey={`${i}`}>
											<Accordion.Header as="div" 
												//variant="" 
												className='d-flex  align-items-center accordion__header rounded'
												// className={` ${ activeDefault === i ? 'd-flex flex-wrap align-items-center accordion__header  rounded' : 'collapsed d-flex flex-wrap align-items-center accordion__header  rounded'}`} 
												// onClick={() => 	setActiveDefault(activeDefault === i ? -1 : i)} eventKey={`${i}`}
											>
												<div className="mb-lg-0 mb-3 d-flex align-items-center">
													<div className="profile-image me-4">
														<img src={data.image} alt="" width="63" className="rounded-circle" />
														{data.icon}
													</div>
													<div>
														<h6 className="fs-16 font-w700 mb-0">
															<Link to={"#"} className="" >{data.title}</Link>
														</h6>
														<span className="fs-14">{data.subtitle}</span>
													</div>
												</div>
												<span className="mb-lg-0 mb-3 px-2">{data.date} <br/>08:22 AM</span>
												<span className="mb-lg-0 mb-3 font-w600 px-2">{data.price}</span>
												<span className="mb-lg-0 mb-3 font-w600 px-2">MasterCard 404</span>
												{data.status}
												{/* <span className="accordion__header--indicator"></span> */}
											</Accordion.Header>
											<Accordion.Collapse eventKey={`${i}`} className="accordion__body">
												{data.cardbody}
											</Accordion.Collapse>
										</Accordion.Item>
									))}
								</Accordion>									
							</Tab.Pane>		
							<Tab.Pane eventKey="Weekly">
								<Accordion className="accordion accordion-primary"  >
									<Accordion.Item className="accordion__item border-bottom mb-0"  eventKey={`${0}`}>
										<Accordion.Header as="div" 
											className='d-flex  align-items-center accordion__header rounded'
										>
											<div className="mb-lg-0 mb-3 d-flex align-items-center">
												<div className="profile-image me-4">
													<img src={avt12} alt="" width="63" className="rounded-circle" />
													<IconRed />
												</div>
												<div>
													<h6 className="fs-16 font-w700 mb-0">
														<Link to={"#"} className="" >Peter Parkur</Link>
													</h6>
													<span className="fs-14">Online Shop</span>
												</div>
											</div>
											<span className="mb-lg-0 mb-3 px-2">June 9, 2020 <br/>08:22 AM</span>
											<span className="mb-lg-0 mb-3 font-w600 px-2">+$2,624</span>
											<span className="mb-lg-0 mb-3 font-w600 px-2">MasterCard 404</span>
											<PendingBlog />											
										</Accordion.Header>
										<Accordion.Collapse eventKey={`${0}`} className="accordion__body">
											<AccordBox />
										</Accordion.Collapse>
									</Accordion.Item>
								</Accordion>
							</Tab.Pane>
							
								
							<Tab.Pane eventKey="Today">
								<Accordion className="accordion accordion-primary"  >
									<Accordion.Item className="accordion__item border-bottom mb-0"  eventKey={`${0}`}>
										<Accordion.Header as="div" 
											className='d-flex  align-items-center accordion__header rounded'
										>
											<div className="mb-lg-0 mb-3 d-flex align-items-center">
												<div className="profile-image me-4">
													<img src={avt12} alt="" width="63" className="rounded-circle" />
													<IconGreen />
												</div>
												<div>
													<h6 className="fs-16 font-w700 mb-0">
														<Link to={"#"} className="" >Popo Store</Link>
													</h6>
													<span className="fs-14">Online Shop</span>
												</div>
											</div>
											<span className="mb-lg-0 mb-3 px-2">July 10, 2023 <br/>08:22 AM</span>
											<span className="mb-lg-0 mb-3 font-w600 px-2">+$2,624</span>
											<span className="mb-lg-0 mb-3 font-w600 px-2">MasterCard 404</span>
											<CompleteBlog />											
										</Accordion.Header>
										<Accordion.Collapse eventKey={`${0}`} className="accordion__body">
											<AccordBox />
										</Accordion.Collapse>
									</Accordion.Item>
								</Accordion>
							</Tab.Pane>		
						</Tab.Content>						
					</div>
				</Tab.Container>	
			</div>
		</>
	)
}



export default WalletTab;
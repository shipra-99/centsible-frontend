import React,{Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown, Modal } from "react-bootstrap";
import Donut2 from '../Mophy/MyWallet/Donut2';
//import WalletTab from './../Mophy/MyWallet/WalletTab';
import TransferForm from './TransferForm';
// import { accordionBlog } from './../Mophy/MyWallet/TabData';
// import { IconGreen, CompleteBlog, AccordBox } from './../Mophy/MyWallet/TabData';
import TransactionsUser from './Transactions-user';
import axios from 'axios';

import avt1 from './../../../images/avatar/15.png';
import avt2 from './../../../images/avatar/16.png';
import avt3 from './../../../images/avatar/17.png';
import avt4 from './../../../images/avatar/18.png';
const contentBlog = [
	{images: avt1  , title: 'FSoziety', price: '$45', time: '4h ago',},
	{images: avt2  , title: 'David Ignis', price: '$672', time: '5h ago',},
	{images: avt3  , title: 'Olivis Johan', price: '$769', time: '7h ago',},
	{images: avt4  , title: 'Stevan Store', price: '$562', time: '5h ago',},
	{images: avt2 , title: 'Kidz Zoo', price: '$776', time: '3h ago',},
];

const user_id = Math.floor(Math.random() * 5) + 1;
localStorage.setItem('user_id', user_id);
console.log(user_id)

const UserWallet = () => {
	const [sendMessage, setSendMessage] = useState(false);
	const [showTransferForm, setShowTransferForm] = useState(false);
	const [user, setUser] = useState([]);
	const [error, setError] = useState(null);

	const fetchUsers = async () => {
		try {
		  const usersAPI = `http://localhost:8000/users/${user_id}`;
		  const response = await axios.get(usersAPI); // Fetching data from the API
		  
		  setUser(response.data);
		  console.log(response.data)
		  console.log(user.data) // Storing the response data in state
		} catch (err) {
		  setError('Error fetching transactions'); // Handle errors
		  console.error(err);
		}
	  };

	  useEffect(() => {
		fetchUsers(); // Call fetch function on mount
	  }, [user_id]);

	//const [transactions, setTransactions] = useState(accordionBlog);
	// const handleTransfer = (userId, amount) => {
    //     const newTransaction = {
    //         image: '', // Add a placeholder image if necessary
    //         title: userId,
    //         subtitle: 'Online Shop',
    //         date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    //         icon: <IconGreen />,  // You can adjust icon based on status if needed
    //         price: `+$${amount}`,
    //         status: <CompleteBlog />,
    //         cardbody: <AccordBox />,
    //     };
    //     accordionBlog.unshift(newTransaction);  // Add to the start of the array
	// 	setTransactions([newTransaction, ...transactions]);
    // };
	return(
		<Fragment>
			<div className="form-head mb-4">
				<h2 className="text-black font-w600 mb-0">User Wallet</h2>
			</div>
			<div className="row">
				<div className="col-xl-9 col-xxl-12">
					<div className="row">
						<div className="col-xl-12">
							<div className="card stacked-2">
								<div className="card-header flex-wrap border-0 pb-0 align-items-end">
									<div className="d-flex align-items-center mb-3 me-3">
										<svg className="me-3" width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M59.4999 31.688V19.8333C59.4999 19.0818 59.2014 18.3612 58.6701 17.8298C58.1387 17.2985 57.418 17 56.6666 17H11.3333C10.5818 17 9.86114 16.7014 9.32978 16.1701C8.79843 15.6387 8.49992 14.9181 8.49992 14.1666C8.49992 13.4152 8.79843 12.6945 9.32978 12.1632C9.86114 11.6318 10.5818 11.3333 11.3333 11.3333H56.6666C57.418 11.3333 58.1387 11.0348 58.6701 10.5034C59.2014 9.97208 59.4999 9.25141 59.4999 8.49996C59.4999 7.74851 59.2014 7.02784 58.6701 6.49649C58.1387 5.96514 57.418 5.66663 56.6666 5.66663H11.3333C9.07891 5.66663 6.9169 6.56216 5.32284 8.15622C3.72878 9.75028 2.83325 11.9123 2.83325 14.1666V53.8333C2.83325 56.0876 3.72878 58.2496 5.32284 59.8437C6.9169 61.4378 9.07891 62.3333 11.3333 62.3333H56.6666C57.418 62.3333 58.1387 62.0348 58.6701 61.5034C59.2014 60.9721 59.4999 60.2514 59.4999 59.5V47.6453C61.1561 47.0683 62.5917 45.9902 63.6076 44.5605C64.6235 43.1308 65.1693 41.4205 65.1693 39.6666C65.1693 37.9128 64.6235 36.2024 63.6076 34.7727C62.5917 33.3431 61.1561 32.265 59.4999 31.688ZM53.8333 56.6666H11.3333C10.5818 56.6666 9.86114 56.3681 9.32978 55.8368C8.79843 55.3054 8.49992 54.5847 8.49992 53.8333V22.1453C9.40731 22.4809 10.3658 22.6572 11.3333 22.6666H53.8333V31.1666H45.3333C43.0789 31.1666 40.9169 32.0622 39.3228 33.6562C37.7288 35.2503 36.8333 37.4123 36.8333 39.6666C36.8333 41.921 37.7288 44.083 39.3228 45.677C40.9169 47.2711 43.0789 48.1666 45.3333 48.1666H53.8333V56.6666ZM56.6666 42.5H45.3333C44.5818 42.5 43.8611 42.2015 43.3298 41.6701C42.7984 41.1387 42.4999 40.4181 42.4999 39.6666C42.4999 38.9152 42.7984 38.1945 43.3298 37.6632C43.8611 37.1318 44.5818 36.8333 45.3333 36.8333H56.6666C57.418 36.8333 58.1387 37.1318 58.6701 37.6632C59.2014 38.1945 59.4999 38.9152 59.4999 39.6666C59.4999 40.4181 59.2014 41.1387 58.6701 41.6701C58.1387 42.2015 57.418 42.5 56.6666 42.5Z" fill="#1EAAE7"/>
										</svg>
										<div className="me-auto">
											<h5 className="fs-20 text-black font-w600">Main Balance</h5>
											<span className="text-num text-black font-w600">${user.balance}</span>
										</div>
									</div>
									{/* <div className="me-3 mb-3">
										<p className="fs-14 mb-1">VALID THRU</p>
										<span className="text-black">08/21</span>
									</div> */}
									<div className="me-3 mb-3">
										<p className="fs-14 mb-1">Username</p>
										<span className="text-black">${user.username}</span>
									</div>
									{/* <span className="fs-20 text-black font-w500 me-3 mb-3">**** **** **** 1234</span> */}
									<Dropdown className="mb-auto">
										<Dropdown.Toggle variant="" as="div" className="btn-link i-false" >	
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999Z" fill="black"/>
												<path d="M10 4.00006C10 5.10463 10.8954 6.00006 12 6.00006C13.1046 6.00006 14 5.10463 14 4.00006C14 2.89549 13.1046 2.00006 12 2.00006C10.8954 2.00006 10 2.89549 10 4.00006Z" fill="black"/>
												<path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z" fill="black"/>
											</svg>
										</Dropdown.Toggle>	
										<Dropdown.Menu alignRight={true} className="dropdown-menu-right">
											<Dropdown.Item >Invest via Plaid </Dropdown.Item>
											<Dropdown.Item >Donate to Charity </Dropdown.Item>		
											<Dropdown.Item >Redeem Giftcards </Dropdown.Item>	
										</Dropdown.Menu>	
									</Dropdown>
								</div>
								<div className="card-body">
									<div className="progress mb-4" style={{height:"18px"}}>
										<div className="progress-bar bg-inverse progress-animated" style={{width: "40%", height:"18px" }} role="progressbar">
											<span className="sr-only">60% Complete</span>
										</div>
									</div>
									<div className="row align-items-center">
										<div className="col-xl-3 mb-3 col-xxl-6 col-sm-6">
											<div className="media align-items-center bgl-secondary rounded p-2">
												<div className="d-inline-block me-3 position-relative donut-chart-sale2">
													<Donut2 value={24}  backgroundColor="rgb(172, 57, 212)" backgroundColor2="rgba(0,0,0,0.1)" />
													<small className="text-secondary">24%</small>
												</div>
												<div className="media-body">
													<h4 className="fs-15 text-black font-w600 mb-0">Gift Cards</h4>
													<span className="fs-14">$5,412</span>
												</div>
											</div>
										</div>
										<div className="col-xl-3 mb-3 col-xxl-6 col-sm-6">
											<div className="media bgl-success rounded p-2 align-items-center">
												<div className="d-inline-block me-3 position-relative donut-chart-sale2">
													<Donut2 value={74} backgroundColor="rgb(43, 193, 85)" backgroundColor2="rgba(0,0,0,0.1)" />
													<small className="text-success">74%</small>
												</div>
												<div className="media-body">
													<h4 className="fs-15 text-black font-w600 mb-0">Investment</h4>
													<span className="fs-14">$3,784</span>
												</div>
											</div>
										</div>
										
										<div className="col-xl-12 col-xxl-12 col-sm-12">
										
									</div>
									</div>
								</div>
							</div>
						</div>						
						
						
					</div>
				</div>
				<TransferForm
                show={showTransferForm}
                handleClose={() => setShowTransferForm(false)}
            />
				<div className="col-xl-3 col-xxl-12">
					<div className="row">
						<div className="col-xl-12">
							<TransactionsUser/>
						</div>						
						

						
					</div>
				</div>
			</div>
				
		</Fragment>				
		
		
	)
}
export default UserWallet;

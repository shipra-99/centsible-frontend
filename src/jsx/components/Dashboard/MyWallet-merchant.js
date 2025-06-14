import React,{Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown, Modal } from "react-bootstrap";
import Donut2 from '../Mophy/MyWallet/Donut2';
//import WalletTab from './../Mophy/MyWallet/WalletTab';
import TransferForm from './TransferForm';
// import { accordionBlog } from './../Mophy/MyWallet/TabData';
// import { IconGreen, CompleteBlog, AccordBox } from './../Mophy/MyWallet/TabData';
import Transactions from './Transactions';
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
const merchant_id = Math.floor(Math.random() * 5) + 1;
localStorage.setItem('merchant_id', merchant_id);
console.log(merchant_id)

const API_URL = 'http://localhost:8000'
// const transactionAPI = `${API_URL}/transactions?merchant_id=${merchant_id}`




const MerchantWallet = () => {
	const [transactions, setTransactions] = useState([]); // State to store transactions
	const [error, setError] = useState(null); // State to store error messages

	const [merchant, setMerchant] = useState([]);
  
	// Function to fetch transactions data using Axios
	const fetchTransactions = async () => {
	  try {
		const transactionAPI = `http://localhost:8000/transactions?merchant_id=${merchant_id}`;
		const response = await axios.get(transactionAPI); // Fetching data from the API
		console.log(response)
		setTransactions(response);
		console.log(transactionAPI)
		console.log(transactions) // Storing the response data in state
	  } catch (err) {
		setError('Error fetching transactions'); // Handle errors
		console.error(err);
	  }
	};
  
	// Fetch transactions when the component mounts
	useEffect(() => {
	  fetchTransactions(); // Call fetch function on mount
	}, [merchant_id]); // Empty dependency array ensures this runs once
  
	const fetchMerchants = async () => {
		try {
		  const merchantsAPI = `http://localhost:8000/merchants/${merchant_id}`;
		  const response = await axios.get(merchantsAPI); // Fetching data from the API
		  console.log(response)
		  setMerchant(response.data);
		  
		  console.log(merchant.data) // Storing the response data in state
		} catch (err) {
		  setError('Error fetching transactions'); // Handle errors
		  console.error(err);
		}
	  };
	
	  // Fetch transactions when the component mounts
	  useEffect(() => {
		fetchMerchants(); // Call fetch function on mount
	  },[]); // Empty dependency array ensures this runs once
	  
	  const updateMerchantBalance = (newBalance) => {
		setMerchant((prevMerchant) => ({
		  ...prevMerchant,
		  balance: newBalance, // Update balance with new value
		}));
	  };

	const [sendMessage, setSendMessage] = useState(false);
	const [showTransferForm, setShowTransferForm] = useState(false);
	
	return(
		<Fragment>
			<div className="form-head mb-4">
				<h2 className="text-black font-w600 mb-0">Merchant Wallet</h2>
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
											<span className="text-num text-black font-w600">${merchant.balance}</span>
										</div>
									</div>
									<div className="me-3 mb-3">
										<p className="fs-14 mb-1">VALID THRU</p>
										<span className="text-black">08/28</span>
									</div>
									<div className="me-3 mb-3">
										<p className="fs-14 mb-1">CARD HOLDER</p>
										<span className="text-black">{merchant.merchant_name}</span>
									</div>
									<span className="fs-20 text-black font-w500 me-3 mb-3">**** **** **** 1234</span>
									
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
													<h4 className="fs-15 text-black font-w600 mb-0">Expenditure</h4>
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
										<div className="card bg-primary">
											<div className="card-body p-3">
												<div className="d-flex align-items-center">
													<span className="bg-white rounded-circle p-3 me-4">
														<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
															<g opacity="0.98" clip-path="">
															<path d="M9.77812 2.0125C10.1062 2.69062 9.81641 3.51094 9.13828 3.83906C7.25156 4.74688 5.65469 6.15781 4.51719 7.92422C3.35234 9.73437 2.73438 11.8344 2.73438 14C2.73438 20.2125 7.7875 25.2656 14 25.2656C20.2125 25.2656 25.2656 20.2125 25.2656 14C25.2656 11.8344 24.6477 9.73437 23.4883 7.91875C22.3563 6.15234 20.7539 4.74141 18.8672 3.83359C18.1891 3.50547 17.8992 2.69063 18.2273 2.00703C18.5555 1.32891 19.3703 1.03906 20.0539 1.36719C22.4 2.49375 24.3852 4.24375 25.7906 6.44219C27.2344 8.69531 28 11.3094 28 14C28 17.7406 26.5453 21.257 23.8984 23.8984C21.257 26.5453 17.7406 28 14 28C10.2594 28 6.74297 26.5453 4.10156 23.8984C1.45469 21.2516 1.22342e-07 17.7406 1.66948e-07 14C1.99034e-07 11.3094 0.765625 8.69531 2.21484 6.44219C3.62578 4.24922 5.61094 2.49375 7.95156 1.36719C8.63516 1.04453 9.45 1.3289 9.77812 2.0125Z" fill="#1EAAE7"/>
															<path d="M8.67896 13.2726C8.41099 13.0047 8.27974 12.6547 8.27974 12.3047C8.27974 11.9547 8.41099 11.6047 8.67896 11.3367L12.1188 7.89685C12.6219 7.39373 13.2891 7.12029 13.9946 7.12029C14.7 7.12029 15.3727 7.3992 15.8704 7.89685L19.3102 11.3367C19.8461 11.8726 19.8461 12.7367 19.3102 13.2726C18.7743 13.8086 17.9102 13.8086 17.3743 13.2726L15.3563 11.2547L15.3563 19.0258C15.3563 19.7804 14.7438 20.3929 13.9891 20.3929C13.2344 20.3929 12.6219 19.7804 12.6219 19.0258L12.6219 11.2492L10.604 13.2672C10.079 13.8031 9.21489 13.8031 8.67896 13.2726Z" fill="#1EAAE7"/>
															</g>
															<defs>
															<clipPath id="clip11">
															<rect width="28" height="28" fill="white" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 28 28)"/>
															</clipPath>
															</defs>
														</svg>
													</span>
													<span className="fs-20 text-white"
														onClick={() => setShowTransferForm(true)}  // Open TransferForm on click
														style={{ cursor: 'pointer' }}>Transfer </span>
												</div>
											</div>
										</div>
									</div>
									</div>
								</div>
							</div>
						</div>						
						
						
					</div>
				</div>
				{showTransferForm && (
				<TransferForm
                show={showTransferForm}
                handleClose={() => {
					setShowTransferForm(false);
					fetchMerchants();
				}}
				merchant_id={merchant_id}
				
            /> )}
				<div className="col-xl-3 col-xxl-12">
					<div className="row">
						<div className="col-xl-12">
							<Transactions/>
						</div>						
						
						
					</div>
				</div>
			</div>
				
		</Fragment>				
		
		
	)
}
export default MerchantWallet;

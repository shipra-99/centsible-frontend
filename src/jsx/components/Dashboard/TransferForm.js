import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
const TransferForm = ({ show, handleClose, merchant_id }) => {
    const [userId, setUserId] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
  
    // Function to handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission
      setError(null); // Reset error state before submitting
      setSuccessMessage(null); // Reset success message
  
      try {
        // Define your API endpoint (adjust as needed)
        const merchantCred = `http://localhost:8000/merchantCredit`;
  
        // Make the POST request with userId and amount
        const response = await axios.post(merchantCred, {
          merchant_id: merchant_id,
          user_id: userId,
          amount: parseFloat(amount),
        });
  
        // Handle successful response
        if (response.status === 200) {

            
          setSuccessMessage('Transaction successful!');
          setUserId(''); // Clear input fields after successful submission
          setAmount('');
        }
      } catch (err) {
        // Handle errors (e.g., validation errors or server errors)
        if (err.response && err.response.data) {
          setError(err.response.data.detail || 'An error occurred.');
        } else {
          setError('An unexpected error occurred.');
        }
      }
    };
  
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Transfer Funds</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="userId">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="amount" className="mt-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </Form.Group>
  
            {/* Display success or error messages */}
            {error && <p className="text-danger mt-3">{error}</p>}
            {successMessage && <p className="text-success mt-3">{successMessage}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Transfer
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
export default TransferForm;

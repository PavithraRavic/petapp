import React, { useState } from 'react';
import axios from 'axios';

const Modal = ({ show, handleClose, handleSubmit }) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    aadhar: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit', userDetails);

      if (response.status === 200) {
        handleSubmit(userDetails);
        setShowPopup(true);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Fill your details</h2>
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={userDetails.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={userDetails.email} onChange={handleChange} required />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={userDetails.phone} onChange={handleChange} required />
          </label>
          <label>
            Aadhar Num:
            <input type="tel" name="aadhar" value={userDetails.aadhar} onChange={handleChange} required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h1>Form submitted successfully!</h1>
            <p>The adopters will contact you within 24 hours</p>
            <p>If you want to enquire about the pet health and other details
               Contact: +91 8734637084
            </p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

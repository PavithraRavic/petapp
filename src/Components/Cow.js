import React, { useState } from 'react';
import cow1 from '../Assets/cow1.webp';
import cow2 from '../Assets/cow2.jpg';
import cow3 from '../Assets/cow3.jpg';

import Modal from './Modal';

const Cow = ({ filters }) => {
  const [showModal, setShowModal] = useState(false);
  const cows = [
    { gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Jersey Cow', image: cow1 },
    { gender: 'Female', state: 'TamilNadu', district: 'Chennai', breed: 'Holstein Friesian', image: cow2 },
    { gender: 'Male', state: 'TamilNadu', district: 'Karur', breed: 'Gir Cow', image: cow3 }
  ];

  const filteredCows = cows.filter((cow) => {
    return (
      (filters.state ? cow.state === filters.state : true) &&
      (filters.district ? cow.district === filters.district : true) &&
      (filters.breed ? cow.breed === filters.breed : true)
    );
  });

  const handleAdoptClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitModal = (userDetails) => {
    console.log('User Details:', userDetails);
    setShowModal(false);
    // You can handle the user details submission logic here
  };

  return (
    <div className="cow-container">
      <h3>Cows Available for Adoption</h3>
      {filteredCows.length > 0 ? (
        <div className="card-container">
          {filteredCows.map((cow, index) => (
            <div key={index} className="card">
              <img src={cow.image} alt={cow.breed} className="card-image" />
              <div className="card-content">
                <p>State: {cow.state}</p>
                <p>District: {cow.district}</p>
                <p>Breed: {cow.breed}</p>
                <button className="adopt-button" onClick={handleAdoptClick}>Adopt</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No cows match the selected filters.</p>
      )}
      <Modal show={showModal} handleClose={handleCloseModal} handleSubmit={handleSubmitModal} />
    </div>
  );
};

export default Cow;

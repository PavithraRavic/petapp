import React, { useState } from 'react';
import fish1 from '../Assets/fish1.jpg';
import fish2 from '../Assets/fish2.webp';
import fish3 from '../Assets/fish3.jpg';

import Modal from './Modal';

const Fish = ({ filters }) => {
  const [showModal, setShowModal] = useState(false);
  const fish = [
    { gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Betta Fish', image: fish1 },
    { gender: 'Female', state: 'TamilNadu', district: 'Chennai', breed: 'Guppy Fish', image: fish2 },
    { gender: 'Male', state: 'TamilNadu', district: 'Karur', breed: 'Golden Fish', image: fish3 }
  ];

  const filteredFish = fish.filter((fish) => {
    return (
      (filters.state ? fish.state === filters.state : true) &&
      (filters.district ? fish.district === filters.district : true) &&
      (filters.breed ? fish.breed === filters.breed : true)
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
    <div className="fish-container">
      <h3>Fish Available for Adoption</h3>
      {filteredFish.length > 0 ? (
        <div className="card-container">
          {filteredFish.map((fish, index) => (
            <div key={index} className="card">
              <img src={fish.image} alt={fish.breed} className="card-image" />
              <div className="card-content">
                <p>State: {fish.state}</p>
                <p>District: {fish.district}</p>
                <p>Breed: {fish.breed}</p>
                <button className="adopt-button" onClick={handleAdoptClick}>Adopt</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No fish match the selected filters.</p>
      )}
      <Modal show={showModal} handleClose={handleCloseModal} handleSubmit={handleSubmitModal} />
    </div>
  );
};

export default Fish;

import React, { useState } from 'react';
import bird1 from '../Assets/bird1.jpg';
import bird2 from '../Assets/bird2.jpg';
import bird3 from '../Assets/bird3.jpg';
import bird4 from '../Assets/bird4.jpg';
import bird5 from '../Assets/bird5.jpg';

import Modal from './Modal';

const Birds = ({ filters }) => {
  const [showModal, setShowModal] = useState(false);
  const birds = [
    { gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Parrot', image: bird1 },
    { gender: 'Female', state: 'TamilNadu', district: 'Chennai', breed: 'Duck', image: bird2 },
    { gender: 'Male', state: 'TamilNadu', district: 'Karur', breed: 'Hen', image: bird3 },
    { gender: 'Male', state: 'TamilNadu', district: 'Coimbatore', breed: 'Cock', image: bird4 },
    { gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Love Birds', image: bird5 }
  ];

  const filteredBirds = birds.filter((bird) => {
    return (
      (filters.gender ? bird.gender === filters.gender : true) &&
      (filters.state ? bird.state === filters.state : true) &&
      (filters.district ? bird.district === filters.district : true) &&
      (filters.breed ? bird.breed === filters.breed : true)
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
    <div className="birds-container">
      <h3>Birds Available for Adoption</h3>
      {filteredBirds.length > 0 ? (
        <div className="card-container">
          {filteredBirds.map((bird, index) => (
            <div key={index} className="card">
              <img src={bird.image} alt={bird.breed} className="card-image" />
              <div className="card-content">
                <p>Gender: {bird.gender}</p>
                <p>State: {bird.state}</p>
                <p>District: {bird.district}</p>
                <p>Breed: {bird.breed}</p>
                <button className="adopt-button" onClick={handleAdoptClick}>Adopt</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No birds match the selected filters.</p>
      )}
      <Modal show={showModal} handleClose={handleCloseModal} handleSubmit={handleSubmitModal} />
    </div>
  );
};

export default Birds;

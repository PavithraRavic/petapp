import React, { useState } from 'react';
import cat1 from '../Assets/cat1.jpg';
import cat2 from '../Assets/cat2.jpg';
import cat3 from '../Assets/cat3.jpg';
import cat4 from '../Assets/cat4.webp';
import cat5 from '../Assets/cat5.jpg';
import cat6 from '../Assets/cat6.jpg';
import cat7 from '../Assets/cat7.jpg';
import cat8 from '../Assets/cat8.jpg';
import cat9 from '../Assets/cat9.webp';
import cat10 from '../Assets/cat10.jpg';
import cat11 from '../Assets/cat11.jpg';
import cat12 from '../Assets/cat12.jpg';
import cat13 from '../Assets/cat13.jpg';
import cat14 from '../Assets/cat14.jpg';
import cat15 from '../Assets/cat15.jpg';
import cat16 from '../Assets/cat16.jpg';
import cat17 from '../Assets/cat17.jpg';
import cat18 from '../Assets/cat18.jpeg';
import cat19 from '../Assets/cat19.jpg';
import cat20 from '../Assets/cat20.jpg';
import cat21 from '../Assets/cat21.jpg';

import Modal from './Modal';

const Cats = ({ filters }) => {
  const [showModal, setShowModal] = useState(false);
  const cats = [
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Bombay Cat', image: cat1 },
    { age: 'Adult', gender: 'Female', state: 'TamilNadu', district: 'Chennai', breed: 'Bombay Cat', image: cat2 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Karur', breed: 'Bombay Cat', image: cat3 },
    { age: '1-2 years', gender: 'Male', state: 'TamilNadu', district: 'Coimbatore', breed: 'Bombay Cat', image: cat4 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Bombay Cat', image: cat5 },
    { age: '6-7 months', gender: 'Female', state: 'TamilNadu', district: 'Chennai', breed: 'Rusty-Spotted Cat', image: cat6 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Rusty-Spotted Cat', image: cat7 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', district: 'Coimbatore', breed: 'Rusty-Spotted Cat', image: cat8 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Madurai', breed: 'Rusty-Spotted Cat', image: cat9 },
    { age: '1-2 years', gender: 'Male', state: 'TamilNadu', district: 'Karur', breed: 'Rusty-Spotted Cat', image: cat10 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', district: 'Namakkal', breed: 'Abyssinian', image: cat11 },
    { age: 'Adult', gender: 'Female', state: 'TamilNadu', district: 'Salem', breed: 'Abyssinian', image: cat12 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', district: 'Coimbatore', breed: 'Abyssinian', image: cat13 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Sivagangai', breed: 'Abyssinian', image: cat14 },
    { age: '6-7 months', gender: 'Female', state: 'TamilNadu', district: 'Madurai', breed: 'Abyssinian', image: cat15 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', district: 'Pudukkottai', breed: 'Bengal Cat', image: cat16 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', district: 'Ramanathapuram', breed: 'Bengal Cat', image: cat17 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Theni', breed: 'Bengal Cat', image: cat18 },
    { age: '6-7 months', gender: 'Male', state: 'TamilNadu', district: 'Madurai', breed: 'Bengal Cat', image: cat19 },
    { age: '1-2 years', gender: 'Male', state: 'TamilNadu', district: 'Erode', breed: 'Bengal Cat', image: cat20 },
    { age: 'Adult', gender: 'Male', state: 'TamilNadu', district: 'Sivagangai', breed: 'Bengal Cat', image: cat21 }
  ];

  const filteredCats = cats.filter((cat) => {
    return (
      (filters.age ? cat.age === filters.age : true) &&
      (filters.gender ? cat.gender === filters.gender : true) &&
      (filters.state ? cat.state === filters.state : true) &&
      (filters.district ? cat.district === filters.district : true) &&
      (filters.breed ? cat.breed === filters.breed : true)
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
    <div className="cats-container">
      <h3>Cats Available for Adoption</h3>
      {filteredCats.length > 0 ? (
        <div className="card-container">
          {filteredCats.map((cat, index) => (
            <div key={index} className="card">
              <img src={cat.image} alt={cat.breed} className="card-image" />
              <div className="card-content">
                <p>Age: {cat.age}</p>
                <p>Gender: {cat.gender}</p>
                <p>State: {cat.state}</p>
                <p>District: {cat.district}</p>
                <p>Breed: {cat.breed}</p>
                <button className="adopt-button" onClick={handleAdoptClick}>Adopt</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No cats match the selected filters.</p>
      )}
      <Modal show={showModal} handleClose={handleCloseModal} handleSubmit={handleSubmitModal} />
    </div>
  );
};

export default Cats;

// src/Components/Nearbyshelters.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Nearbyshelters = () => {
  const [petShelters, setPetShelters] = useState([]);
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (location.lat && location.lng) {
      fetchPetShelters();
    }
  }, [location]);

  const fetchPetShelters = async () => {
    try {
      const response = await axios.get(
        `https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js`,
        {
          params: {
            location: `${location.lat},${location.lng}`,
            radius: 5000, // 5 km radius
            type: 'animal_shelter',
            key: process.env.REACT_APP_GOOGLE_API_KEY,
          },
        }
      );
      setPetShelters(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Nearby Pet Shelters</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul>
          {petShelters.map((shelter) => (
            <li key={shelter.place_id}>
              <h2>{shelter.name}</h2>
              <p>{shelter.vicinity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nearbyshelters;

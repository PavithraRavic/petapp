import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Dogs from './Dogs';
import Cats from './Cats';
import Birds from './Birds';
import Fish from './Fish';
import Cow from './Cow';
import Rabbit from './Rabbit';
import Barnyard from './Barnyard';

const Availablepets = () => {
  const { petType } = useParams();
  const [filters, setFilters] = useState({
    age: '',
    gender: '',
    size: '',
    district: '',
    breed: '',
  });

  const [catFilters, setCatFilters] = useState({
    age: '',
    gender: '',
    furLength: '',
    district: '',
    breed: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (petType === 'Cats') {
      setCatFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const handleResetFilters = () => {
    if (petType === 'Cats') {
      setCatFilters({
        age: '',
        gender: '',
        furLength: '',
        district: '',
        breed: '',
      });
    } else {
      setFilters({
        age: '',
        gender: '',
        size: '',
        district: '',
        breed: '',
      });
    }
  };

  const renderFilterForm = () => {
    const districtOptions = [
      "Ariyalur", "Chengalapattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
      "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Karur", "Krishnagiri",
      "Madurai", "Mayiladuthurai", "Nagapattinam", "Nagercoil", "Namakkal", "Perambalur",
      "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivagangai", "Tenkasi",
      "Thanjavur", "Theni", "Thiruvallur", "Thiruvarur", "Thoothukudi", "Thiruchirappalli",
      "Thirunelveli", "Tirupathur", "Tiruppur", "Tiruvannamalai", "Ooty", "Vellore",
      "Viluppuram", "Virudhunagar"
    ];

    const renderCommonFilters = () => (
      <>
        <label>
          Gender:
          <select name="gender" value={filters.gender} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          District:
          <select name="district" value={filters.district} onChange={handleFilterChange}>
            <option value="">All</option>
            {districtOptions.map((district) => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </label>
        <label>
          Breed:
          <select name="breed" value={filters.breed} onChange={handleFilterChange}>
            <option value="">All</option>
            {petType === 'Birds' && (
              <>
                <option value="Parrot">Parrot</option>
                <option value="Pigeon">Duck</option>
                <option value="Peacock">Hen</option>
                <option value="Sparrow">Cock</option>
                <option value="Lovebirds">Lovebirds</option>
              </>
            )}
            {petType === 'Fish' && (
              <>
                <option value="Goldfish">Betta Fish</option>
                <option value="Betta">Guppy Fish</option>
                <option value="Guppy">Golden Fish</option>
              </>
            )}
          </select>
        </label>
      </>
    );

    if (petType === 'Cats') {
      return (
        <div className="filter-form">
          <label>
            Age:
            <select name="age" value={catFilters.age} onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="Kitten">Kitten</option>
              <option value="Young">Young</option>
              <option value="Adult">Adult</option>
              <option value="Senior">Senior</option>
            </select>
          </label>
          <label>
            Fur Length:
            <select name="furLength" value={catFilters.furLength} onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="Short">Short</option>
              <option value="Medium">Medium</option>
              <option value="Long">Long</option>
            </select>
          </label>
          {renderCommonFilters()}
          <button className="reset-button" onClick={handleResetFilters}>
            <span role="img" aria-label="Reset Filters">&#x1F504;</span> Reset Filters
          </button>
        </div>
      );
    } else {
      return (
        <div className="filter-form">
          {renderCommonFilters()}
          <button className="reset-button" onClick={handleResetFilters}>
            <span role="img" aria-label="Reset Filters">&#x1F504;</span> Reset Filters
          </button>
        </div>
      );
    }
  };

  const renderPetComponent = () => {
    const commonProps = petType === 'Cats' ? { filters: catFilters } : { filters };
    switch (petType) {
      case 'Dogs':
        return <Dogs {...commonProps} />;
      case 'Cats':
        return <Cats {...commonProps} />;
      case 'Birds':
        return <Birds {...commonProps} />;
      case 'Fish':
        return <Fish {...commonProps} />;
      case 'Cow':
        return <Cow {...commonProps} />;
      case 'Rabbit':
        return <Rabbit {...commonProps} />;
      case 'Barnyard':
        return <Barnyard {...commonProps} />;
      default:
        return <p>Select a pet type to view available pets.</p>;
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{petType ? `Available ${petType}` : 'Available Pets'}</h2>
      {renderFilterForm()}
      <div className="selected-filters">
        {Object.entries(petType === 'Cats' ? catFilters : filters).map(([key, value]) => {
          if (value) {
            return (
              <span key={key} className="filter-tag">
                {key}: {value}
              </span>
            );
          }
          return null;
        })}
      </div>
      {renderPetComponent()}
    </div>
  );
};

export default Availablepets;

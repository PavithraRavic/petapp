import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className='header'>
      <nav className='nav container'>
        <NavLink to='/' className='nav__logo'>
          TinyTails
        </NavLink>
        <button className={`nav__toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav__menu ${isOpen ? 'nav__menu--open' : ''}`}>
          <ul className='nav__list'>
            <li className='nav__item'>
              <NavLink to='/' className='nav__link' onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li className='nav__item nav__item--dropdown'>
              <span className='nav__link nav__link--dropdown' onClick={toggleDropdown}>
                Available Pets
              </span>
              <ul className={`nav__dropdown ${isDropdownOpen ? 'nav__dropdown--open' : ''}`}>
                <li className='nav__dropdown-item'>
                  <NavLink to='/Availablepets/Dogs' className='nav__link' onClick={toggleMenu}>
                    Dogs
                  </NavLink>
                </li>
                <li className='nav__dropdown-item'>
                  <NavLink to='/Availablepets/Cats' className='nav__link' onClick={toggleMenu}>
                    Cats
                  </NavLink>
                </li>
                <li className='nav__dropdown-item'>
                  <NavLink to='/Availablepets/Birds' className='nav__link' onClick={toggleMenu}>
                    Birds
                  </NavLink>
                </li>
                <li className='nav__dropdown-item'>
                  <NavLink to='/Availablepets/Fish' className='nav__link' onClick={toggleMenu}>
                    Fish
                  </NavLink>
                </li>
                <li className='nav__dropdown-item'>
                  <NavLink to='/Availablepets/Rabbit' className='nav__link' onClick={toggleMenu}>
                    Rabbit
                  </NavLink>
                </li>
                <li className='nav__dropdown-item'>
                  <NavLink to='/Availablepets/Cow' className='nav__link' onClick={toggleMenu}>
                    Cow
                  </NavLink>
                </li>
                <li className='nav__dropdown-item'>
                  <NavLink to='/Availablepets/Barnyard' className='nav__link' onClick={toggleMenu}>
                    Barnyard
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='nav__item'>
              <NavLink to='/Nearbyshelters' className='nav__link' onClick={toggleMenu}>
                Near By Shelters
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink to='/Contact' className='nav__link' onClick={toggleMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

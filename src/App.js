import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Availablepets from './Components/Availablepets';
import Navbar from './Components/Nav';
import Nearbyshelters from './Components/Nearbyshelters';
import Page from './Components/Home';
import Contact from './Components/Contact'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/Availablepets/:petType' element={<Availablepets />} />
          <Route path='/Nearbyshelters' element={<Nearbyshelters />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

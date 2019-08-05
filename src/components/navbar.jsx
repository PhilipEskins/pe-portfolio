import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import philip from '../assets/img/Phil_Squared_Photo.jpg'

function navbar() {
  return (
    <div id ="navbar">
      <h1>Navbar</h1>
      <img id="mainPhoto" src={philip} alt="Philip" />
      <ul>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </div>
  )
};

export default navbar;

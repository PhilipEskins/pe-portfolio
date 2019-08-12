import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import philip from '../assets/img/Phil_Squared_Photo.jpg';
import PropTypes from 'prop-types';

function navbar(props) {
  return (
    <div id ="navbar">
      <h1>Logo will go here</h1>
      <ul>
        <li onClick={() => props.onScroll('firstview')}>Home</li>
        <li>Projects</li>
        <li>Experiences</li>
        <li>Skills</li>
        <li>Meetups</li>
        <li>Courses</li>
        <li onClick={() => props.onScroll('resume')}>Resume</li>
      </ul>
    </div>
  )
};

navbar.propTypes = {
  onScroll: PropTypes.func
}

export default navbar;

// <h1>Navbar</h1>
// <img id="mainPhoto" src={philip} alt="Philip" />
// <ul>
//   <li><Link to='/projects'>Projects</Link></li>
//   <li><Link to='/about'>About</Link></li>
//   <li><Link to='/resume'>Resume</Link></li>
//   <li>Contact</li>
// </ul>

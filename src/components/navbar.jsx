import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import philip from '../assets/img/Phil_Squared_Photo.jpg';
import PropTypes from 'prop-types';

function navbar(props) {
  return (
    <div id ="navbar">
      <h1>Logo</h1>
      <ul>
        <li className="link" onClick={() => props.onScroll('firstview')}>Home</li>
        <li className="link" onClick={() => props.onScroll('projects')}>Projects</li>
        <li>Experiences</li>
        <li>Skills</li>
        <li>Meetups</li>
        <li>Courses</li>
        <li className="link" onClick={() => props.onScroll('resume')}>Resume</li>
      </ul>
    </div>
  )
};

navbar.propTypes = {
  onScroll: PropTypes.func
}

export default navbar;

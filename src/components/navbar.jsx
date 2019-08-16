import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import logo from '../assets/img/logo.png';
import PropTypes from 'prop-types';

function navbar(props) {
  return (
    <div id ="navbar">
      <img src={logo} />
      <ul>
        <li className="link" onClick={() => props.onScroll('firstview')}>Top</li>
        <li className="link" onClick={() => props.onScroll('projects')}>Projects</li>
        <li className="link" onClick={() => props.onScroll('experiences')}>Experiences</li>
        <li>Skills</li>
        <li>Contact</li>
        <li className="link" onClick={() => props.onScroll('resume')}>Resume</li>
      </ul>
    </div>
  )
};

navbar.propTypes = {
  onScroll: PropTypes.func
}

export default navbar;

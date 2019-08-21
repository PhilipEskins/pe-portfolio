import React from 'react';
import '../styles/navbar.scss';
import logo from '../assets/img/logo.png';
import PropTypes from 'prop-types';

function navbar(props) {
  return (
    <div id ="navbar">
      <div className="diamonds">
        <img src={logo} alt="Logo"/>
        <div className="logoContainer">
          <a href="https://github.com/PhilipEskins" target="_blank" rel="noopener noreferrer"><i className="fab fa-github logo"></i></a>
          <a href="https://www.linkedin.com/in/philipeskins/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin logo"></i></a>
        </div>
      </div>
      <ul>
        <li className="link" onClick={() => props.onScroll('firstview')}>Top</li>
        <li className="link" onClick={() => props.onScroll('projects')}>Projects</li>
        <li className="link" onClick={() => props.onScroll('experiences')}>Experiences</li>
        <li className="link" onClick={() => props.onScroll('contact')}>Contact</li>
        <li className="link" onClick={() => props.onScroll('resume')}>Resume</li>
      </ul>
    </div>
  )
};

navbar.propTypes = {
  onScroll: PropTypes.func
}

export default navbar;

import React from 'react';
import '../styles/navbar.scss';
import logo from '../assets/img/logo.png';
import PropTypes from 'prop-types';

function navbar(props) {
  return (
    <div id ="navbar">
      <div className="imageContainer">
        <img src={logo} alt="Logo"/>
        <div className="logoContainer">
          <a href="https://github.com/PhilipEskins" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/philipeskins/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className="linkContainer">
        <div className="links">
          <ul>
            <li className="link" onClick={() => props.onScroll('firstview')}>Top</li>
            <li>|</li>
            <li className="link" onClick={() => props.onScroll('projects')}>Projects</li>
            <li>|</li>
            <li className="link" onClick={() => props.onScroll('experiences')}>Experiences</li>
            <li>|</li>
            <li className="link" onClick={() => props.onScroll('contact')}>Contact</li>
            <li>|</li>
            <li className="link" onClick={() => props.onScroll('resume')}>Resume</li>
          </ul>
        </div>
      </div>
      <div className="hamburgerMenu">
        <i className="fas fa-bars"></i>
          <div className="hamburgerLinks">
            <ul>
              <li className="" onClick={() => props.onScroll('firstview')}>Top</li>
              <li>|</li>
              <li className="" onClick={() => props.onScroll('projects')}>Projects</li>
              <li>|</li>
              <li className="" onClick={() => props.onScroll('experiences')}>Experiences</li>
              <li>|</li>
              <li className="" onClick={() => props.onScroll('contact')}>Contact</li>
              <li>|</li>
              <li className="" onClick={() => props.onScroll('resume')}>Resume</li>
            </ul>
          </div>
      </div>
    </div>
  )
};

navbar.propTypes = {
  onScroll: PropTypes.func
}

export default navbar;

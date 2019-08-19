import React from 'react';
import '../styles/firstview.scss';
import glacier from '../assets/img/glacier.jpg';
import PropTypes from 'prop-types';
function firstview(props) {

  return(
    <div id="firstview" className="lozad" data-background-image={glacier}>
      <div className="box">
        <div className="content">
          <h1>Philip Eskins</h1><span className="frontend">FRONT END DEVELOPER</span>
          <p>Thank you for visiting my website. I'm a Front End Developer open to new opportunities. On this site you'll be able to see some of my <span className="link" onClick={() => props.onScroll('projects')}>projects</span>, <span className="link" onClick={() => props.onScroll('experiences')}>experiences</span>, and find a printable version of my <span className="link" onClick={() => props.onScroll('resume')}>resume</span>. Feel free to <span className="link" onClick={() => props.onScroll('contact')}>contact me</span> if you think I'd be a good fit with a project you have.</p>
          <div className="logoContainer">
            <a href="https://github.com/PhilipEskins" target="_blank" rel="noopener noreferrer"><i className="fab fa-github logo"></i></a>
            <div className="link" onClick={() => props.onScroll('projects')}>
              <p>See more</p>
              <i className="fas fa-angle-double-down logo"></i>
            </div>
            <a href="https://www.linkedin.com/in/philipeskins/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin logo"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
};

firstview.propTypes = {
  onScroll: PropTypes.func
};

export default firstview;

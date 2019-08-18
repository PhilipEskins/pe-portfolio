import React from 'react';
import '../styles/firstview.scss';
import philip from '../assets/img/Phil_Squared_Photo.jpg';
import glacier from '../assets/img/glacier.jpg';
import PropTypes from 'prop-types';
function firstview(props) {

  return(
    <div id="firstview" className="lozad" data-background-image={glacier}>
      <div className="box">
        <div className="content">
          <h1>Philip Eskins<br />Front End Developer</h1>
          <img className="lozad" data-src={philip} alt="Philip Eskins" />
          <p>Thank you for visiting my website. I'm a Front End Developer open to new opportunities. On this site you'll be able to see some of my <span className="link" onClick={() => props.onScroll('projects')}>projects</span>, <span className="link" onClick={() => props.onScroll('experiences')}>experiences and skills</span>, and find a printable version of my <span className="link" onClick={() => props.onScroll('resume')}>resume</span>. Feel free to <span className="link" onClick={() => props.onScroll('contact')}>contact me</span> if you think I'd be a good fit with a project you have.</p>
          <div className="logoContainer">
            <a href="https://github.com/PhilipEskins" target="_blank"><i className="fab fa-github logo"></i></a>
            <a href="https://www.linkedin.com/in/philipeskins/" target="_blank"><i className="fab fa-linkedin logo"></i></a>
          </div>
          <div className="link" onClick={() => props.onScroll('projects')}>
            <p>See more</p>
            <i className="fas fa-angle-double-down logo"></i>
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

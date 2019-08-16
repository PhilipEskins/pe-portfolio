import React from 'react';
import '../styles/firstview.scss';
import philip from '../assets/img/Phil_Squared_Photo.jpg';
import downchevron from '../assets/img/down-chevron.png';
import PropTypes from 'prop-types';

function firstview(props) {

  return(
    <div id="firstview">
      <div className="box">
        <div className="content">
          <h1>Philip Eskins<br />Front End Developer</h1>
          <img src={philip} alt="Picture of Philip Eskins" />
          <p>Thank you for visiting my website. I'm a Front End Developer open to new opportunities. On this site you'll be able to see some of my <span className="link" onClick={() => props.onScroll('projects')}>projects</span>, <span className="link" onClick={() => props.onScroll('experiences')}>experiences</span>, see my skills, and find a printable version of my <span className="link" onClick={() => props.onScroll('resume')}>resume</span>. Feel free to <span className="link" onClick={() => props.onScroll('contact')}>contact me</span> if you think I'd be a good fit with a project you have.</p>
          <div className="link" onClick={() => props.onScroll('projects')}>
            <p>See more</p>
            <img src={downchevron} id="chevron"/>
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

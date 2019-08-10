import React from 'react';
import '../styles/firstview.scss';
import philip from '../assets/img/Phil_Squared_Photo.jpg'

function firstview() {

  function scroll(element) {
    // preventDefault();
    var scrollElement = document.getElementById(element);
    scrollElement.scrollIntoView({behavior:'smooth'});
  }

  return(
    <div id="firstview">
      <div className="box">
        <div className="content">
          <h1>Philip Eskins - Front End Developer</h1>
          <img src={philip} alt="Picture of Philip Eskins" />
          <p>Thank you for visiting my website. I'm a Front End Developer open to new opportunities. On this site you'll be able to see some of my projects, meetups I go to, what I'm currently learning, see my skills and expericens, and find a printable version of my <span onClick={() => scroll('resume')}>resume</span>. Feel free to contact me if you think I'd be a good fit with a project you have.</p>
          <p id="more">See more</p>
        </div>
      </div>
    </div>
  )
};

export default firstview;

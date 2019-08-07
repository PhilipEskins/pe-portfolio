import React from 'react';
import '../styles/firstview.scss';
import philip from '../assets/img/Phil_Squared_Photo.jpg'

function firstview() {
  return(
    <div id="firstview">
      <div class="box">
        <div class="content">
          <h1>Philip Eskins - Front End Developer</h1>
          <img src={philip} alt="Picture of Philip Eskins" />
          <p>Thank you for visiting my website. I'm an aspiring Front End Developer. On this site you'll be able to see some of my projects, activities I take part in, what I'm currently learning and what skills I already have, and find a printable version of my resume. Feel free to contact me if you think I'd be a good fit with a project you have.</p>
          <p id="more">See more</p>
        </div>
      </div>
    </div>
  )
};

export default firstview;

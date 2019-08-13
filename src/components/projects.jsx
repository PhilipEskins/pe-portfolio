import React from 'react';
import '../styles/projects.scss'
import Dogreact from '../assets/img/dogreact.png';

function projects() {
  return(
    <div>
      <hr id="projects" />
      <h1 className='header'>Projects</h1>
      <div id="projectArea">
        <div id="first">
          <div className="topPanel">
            <img src={Dogreact} />
            <h3>Dog React Game</h3>
            <p>A game I developed using React. It challengs the user to correctly guess the breed of the dog in the image from a drop down list of options. A correct guess will add one point to the score. After you get one point you have the option to submit your score to the database to be saved and it'll store the database key onto your local storage so you can update the score as you continue playing. The site also list the top 10 highest scores.</p>
          </div>
          <div className="bottomPanel">
            <p>Sample text</p>
          </div>
        </div>

        <div id="second">
          <div className="topPanel">
            <h3>Dog React Game</h3>
          </div>
          <div className="bottomPanel">
            <p>Sample text</p>
          </div>
        </div>

        <div id="third">
          <div className="topPanel">
            <h3>Dog React Game</h3>
          </div>
          <div className="bottomPanel">
            <p>Sample text</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default projects;

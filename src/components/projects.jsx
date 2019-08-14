import React from 'react';
import '../styles/projects.scss'
import Dogreact from '../assets/img/dogreact2.png';

function projects() {
  return(
    <div>
      <hr id="projects" />
      <h1 className='header'>Projects</h1>
      <div id="projectArea">
        <div id="first">
          <div className="topPanel">
            <img src={Dogreact} />
            <h3>Dog Guessing Game</h3>
            <p>A game I developed using React. It challenges the user to correctly guess the breed of the dog in the image from a drop down list of options. A correct guess will add one point to the score. After you get one point you have the option to submit your score to the database to be saved and it'll store the database key onto your local storage so you can update the score as you continue playing. The site also list the top 10 highest scores.</p>
            <div className="center"><a href="https://dog-react.web.app/" target="_blank">View live version</a> | <a href="https://github.com/PhilipEskins/dog-guessing-game" target="_blank" >View Github Repo</a><div className="center">Links open in a new window</div></div>
            <div className="cutout"></div>
          </div>
          <div className="bottomPanel">
            <p>Skills used:</p>
            <span>React, Redux, Firebase, API, CSS animation, local storage, HTML, JSX, TypeScript</span>
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

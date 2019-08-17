import React from 'react';
import '../styles/projects.scss'
import Dogreact from '../assets/img/dogreact2.png';
import Disneyland from '../assets/img/disneyland-angular.png';
import Monopoly from '../assets/img/Monopoly.png';
import Doggame from '../assets/img/dog-game.png';

function projects() {
  return(
    <div>
      <hr id="projects" />
      <h2 className='header'>Projects</h2>
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
            <img src={Disneyland} />
            <h3>Disneyland.com Clone (Angular)</h3>
            <p>A clone of the Disneyland.com website using Angular. The video plays, you might have to refresh a few times to get it to load. The only link that works is the Attractions one under 'Things to do'. This will take you to a simple page that displays the attractions I have entered plus an Admin link at the bottom that lets you add, edit or delete attractions.</p>
            <div className="center"><a href="https://disneyland-clone.firebaseapp.com/" target="_blank">View live version</a> | <a href="https://github.com/PhilipEskins/disneyland-clone" target="_blank">View Github Repo</a><div className="center">Links open in a new window</div></div>
            <div className="cutout"></div>
          </div>
          <div className="bottomPanel">
            <p>Skills used:</p>
            <span>HTML, CSS, JavaScript, Angular7</span>
          </div>
        </div>

        <div id="third">
          <div className="topPanel">
            <img src={Monopoly} />
            <h3>Monopoly recreation</h3>
            <p>A group project that recreates Monopoly using Angular. Each property is its own image and I devised the CSS grid that put them all in place and rotated them as needed. You are able to roll the dice and the piece will move around the board. You can also purchase properties and even be sent to jail. I had my team have two standups per day to make sure we were all on task and focusing on what needed to be done in the time frame we had allowed.</p>
            <div className="center"><a href="https://monopoly-4bd44.firebaseapp.com/" target="_blank">View live version</a> | <a href="https://github.com/PhilipEskins/monopoly" target="_blank">View Github Repo</a><div className="center">Links open in a new window</div></div>
            <div className="cutout"></div>
          </div>
          <div className="bottomPanel">
            <p>Skills used:</p>
            <span>HTML, CSS, SCSS, Sketch, Angular, Firebase</span>
          </div>
        </div>

        <div id="fourth">
          <div className="topPanel">
            <img src={Doggame} />
            <h3>Dog Owner Sim</h3>
            <p>Original game idea that I envisioned and worked on with a group. I completed the backend logic for the game. The premise of the game is that you just got home from work and you need to tire out your dog before you go to bed. If you don't tire out your dog enough you will both be restless and you are lacking energy the next day. You are able to take your dog on a walk, play with your dog, buy toys to increase the multiplier for playtime, or take your dog to the dog park.</p>
            <div className="center"><a href="https://philipeskins.github.io/dog-game/" target="_blank">View live version</a> | <a href="https://github.com/PhilipEskins/dog-game" target="_blank">View Github Repo</a><div className="center">Links open in a new window</div></div>
            <div className="cutout"></div>
          </div>
          <div className="bottomPanel">
            <p>Skills used:</p>
            <span>HTML, CSS, SCSS, Bootstrap, JavaScript, jQuery</span>
          </div>
        </div>

      </div>
    </div>
  )
};

export default projects;

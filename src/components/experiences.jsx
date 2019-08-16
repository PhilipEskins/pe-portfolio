import React from 'react';
import '../styles/experiences.scss';

function experiences() {
  return(
    <div id="experiencesComponent">
      <hr id="experiences" />
      <h2 className="header"><span className="background">Experiences</span></h2>

      <div className="experiencesContainer">
        <div className="rfpio background">
          <h3>RFPIO Inc.</h3>
          <p>Beaverton, OR | Front End Developer Intern</p>
          <ul>
            <li>Worked collaboratively with another intern and the Senior Marketing Manager on implementing designs to foster greater conversions.</li>
            <li>Analyzed website performance using Google Analytics and Hotjar and proposed changes to improve conversion rates on the website.</li>
            <li>Assisted implementation team by providing step-by-step instructions on replicating a Gutenberg Block on the Wordpress site.</li>
            <li>Developed 3 landing pages using front end best practices within the Wordpress framework.</li>
          </ul>
        </div>

        <div className="epicodus background">
          <h3>Epicodus</h3>
          <p>Portland, OR | Front End Developer Student</p>
          <ul>
            <li>Attended a full time 27-week course in Front End Development.</li>
            <li>Command line and Git experience from day one.</li>
            <li>Experience with multiple programming languages and technologies including HTML, CSS, SASS, JavaScript, Angular, React, Webpack, Karma/Jasmine, TypeScript, Firebase, Sketch and UI/UX.</li>
            <li>Strong understanding of design and UX sensibilities using current CSS and responsive design.</li>
          </ul>
        </div>

        <div className="jacobs background">
          <h3>Jacobs Heating & Air Conditioning</h3>
          <p>Milwaukie, OR | Dispatcher </p>
          <ul>
            <li>Managed a team of 15 technicians, creating the schedule for each and making sure they were efficient and organized.</li>
            <li>Devised my own system for problem solving the fast paced and rapidly changing environment.</li>
            <li>Provided detailed written and verbal communication regarding the current schedule to coworkers.</li>
            <li>Strategically acted when emergency calls came in to provide a quick turnaround for customers.</li>
            <li>Used time management skills to monitored the technicians during the day to make sure all tickets were completed within expected timeframe.</li>
            <li>Sought out new opportunities to expand my knowledge of the company processes in order to assist in other areas when needed.</li>
          </ul>
        </div>

      </div>
    </div>
  )
};

export default experiences;

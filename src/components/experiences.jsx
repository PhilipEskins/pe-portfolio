import React from 'react';
import '../styles/experiences.scss';

function experiences() {
  return(
    <div id="experiencesComponent">
      <hr id="experiences" />
      <h2 className="header"><span className="background">Experiences</span></h2>

      <div className="experiencesContainer">
        <div className="rfpio background">
          <h3>RFPIO</h3>
        </div>

        <div className="epicodus background">
          <h3>Epicodus</h3>
        </div>

        <div className="jacobs background">
          <h3>Jacobs Heating & Air Conditioning</h3>
        </div>

      </div>
    </div>
  )
};

export default experiences;

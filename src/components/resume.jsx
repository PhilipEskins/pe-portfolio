import React from 'react';
import '../styles/resume.scss';
import public_resume from '../assets/docs/resume.pdf'

function resume() {
  return(
    <div id="resume">
      <h1>Resume works</h1>
          <iframe src={public_resume}>
            <p>Your browser does not support PDFs.
              <a href="https://example.com/test.pdf">Download the PDF</a>.
            </p>
          </iframe>
    </div>
  )
};

export default resume;

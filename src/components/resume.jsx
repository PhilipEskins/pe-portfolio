import React from 'react';
import '../styles/resume.scss';
import public_resume from '../assets/docs/resume.pdf'

function resume() {
  return(
    <div>
      <hr id="resume" />
      <h1 className="header">Resume</h1>
          <iframe src={public_resume}>
            <p>Your browser does not support PDFs.
              <a href={public_resume}>Download the PDF</a>.
            </p>
          </iframe>
    </div>
  )
};

export default resume;

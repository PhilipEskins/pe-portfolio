import React from 'react';
import '../styles/resume.scss';
import public_resume from '../assets/docs/resume.pdf'

function resume() {
  return(
    <div>
      <hr id="resume" />
      <h2 className="header">Resume</h2>
          <iframe className="lozad" data-src={public_resume} title="Philip's Resume">
            <p>Your browser does not support PDFs.
              <a href={public_resume}>Download the PDF</a>.
            </p>
          </iframe>
    </div>
  )
};

export default resume;

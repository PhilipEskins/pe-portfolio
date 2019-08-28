import React from 'react';
import '../styles/resume.scss';
import public_resume from '../assets/docs/resume.pdf'

function resume() {
  return(
    <div>
      <hr id="resume" />
      <div className="resumeContainer">
      <h2 className="header" id="resumeHeader">Resume</h2>
        <iframe className="lozad" data-src={public_resume} title="Philip's Resume">
          <p>Your browser does not support PDFs.
            <a href={public_resume}>Download the PDF</a>.
          </p>
        </iframe>
        <div id="resumeDownload">
          <p>Download my resume <a href={public_resume}>here</a></p>
        </div>
      </div>
    </div>
  )
};

export default resume;

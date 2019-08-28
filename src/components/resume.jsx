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
          <p>Click the button below to download my resume</p>
          <form method="GET" action={public_resume}>
            <button type="submit">Resume</button>
          </form>
        </iframe>
        <div id="resumeDownload">
          <p>Click the button below to download my resume</p>
          <form method="GET" action={public_resume}>
            <button type="submit">Resume</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default resume;

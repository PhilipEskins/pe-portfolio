import React from 'react';
import '../styles/contact.scss';

function contact() {
  return(
    <div id="contactComponent">
      <hr id="contact" />
      <h1 className="header">Contact Me</h1>
      <div className="formContainer">
        <form name="contact" className="form" method="POST" data-netlify="true">
          <div className="name">
            <label htmlFor="name">*Name</label>
            <input type="text" id="name" />
          </div>
          <div className="email">
            <label htmlFor="email">*Email</label>
            <input type="text" id="email" />
          </div>
          <div className="message">
            <label htmlFor="message">*Message</label>
            <textarea id="message" placeholder="Type something here" rows="10"></textarea>
          </div>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default contact;

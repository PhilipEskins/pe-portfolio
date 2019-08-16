import React from 'react';
import '../styles/contact.scss';

function contact() {
  return(
    <div>
      <hr id="contact" />
      <h1 className="header">Contact Me</h1>
      <form name="contact" className="form">
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
          <textarea id="message" placeholder="Type something here"></textarea>
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default contact;

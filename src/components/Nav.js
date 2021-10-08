import React, {useState} from 'react';

export default function Nav(props) {

  return (
    <>
    <nav className="nav">
      <div className="nav-links">
      <a className="link projects" href="#projects" rel="noreferrer" style={{textDecoration: "none"}}>
        <img src="/img/tag.png" alt="projects"/>
        <p>projects</p>
      </a>
        <a className="link" href='https://www.linkedin.com/in/morancathy/' target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
          <img src="/img/linkedin.svg" alt="linkedin"/>
          <p>linkedin</p>
        </a>
        <a className="link" href='https://github.com/morancathy' target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
          <img src="/img/GitHub.png" alt="github"/>
          <p>github</p>
        </a>

          <a className="link email" href='' target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
            <img src="/img/email.png" alt="email"/>
            <p>contact</p>
          </a>
          <a className="link pdf" href='' target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
            <img src="/img/pdf.png" alt="resume"/>
            <p>resume</p>
          </a>

      </div>




    </nav>
    </>
  )
};

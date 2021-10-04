import React from 'react';

export default function Footer(props) {

  return (
    <footer>
      <div className="copyright-fun">
        <p>@ Cathy Moran 2021 <span>~never stop exploring~</span></p>
      </div>
      <div className="footer-links">
        <a className="link" href='https://www.linkedin.com/in/morancathy/' target="_blank">
          <img src="/img/linkedin.svg" alt="linkedin"/>
        </a>
      <a className="link" href='https://github.com/morancathy' target="_blank">
        <img src="/img/GitHub.png" alt="github"/>
      </a>
        <p>Resume</p>
      </div>
    </footer>
  )
};
// <a className="link" href='https://www.linkedin.com/in/morancathy/' target="_blank">
//   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="linkedin" />
// </a>
// <a className="link" href='https://github.com/morancathy' target="_blank">
//   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
// </a>

import React from 'react';

export default function About(props) {

  return (
    <div className="about-me">
      <img src="/img/Kili.JPG" alt="summitting Kilimanjaro"/>
      <div className="about-me-text">
        <h2>Cathy Moran</h2>
        <p className="first-p">always reaching for the sky,</p>
        <p>I am a <strong>software developer</strong> who goes above and beyond. I am passionate about coding, whether it's building an API or a front-end.</p>
        <p className="last-p">A natural multi-tasker, I enjoy solving problems and thrive in fast-paced environments.</p>
      </div>
    </div>
  )
};

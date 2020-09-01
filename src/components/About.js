import React from 'react';
import CV from '../images/resume.pdf'

function About() {
  return (
    <div id="about-me" className="page-section page-section--light">
    <div className="wrapper">
      <h2 className="page-section__title page-section__title--dark">About Me</h2>
      <div className="page-section__narrow-centered">
        <p className="page-section__text-desc pb-2">
          My full name is Gergely Sajo, but just call me Gary. I am a self-taught developer located in Vienna, Austria. Currently, I am pursuing the opportunity to begin my career in web development.
          <br/>
          <br/>
          The started getting into web development by wanting to create a website for myself, and wanted to know how web technologies work in detail, so I started a course about web development.
          <br/>
          <br/>
          One course led to another and then another and so on...
        </p>
        <a href={CV} target="_blank"><button className="btn btn-dark">Download my CV</button></a>
      </div>
    </div>
  </div>
  )
}

export default About;
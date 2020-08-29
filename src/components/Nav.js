import React from 'react';

const Nav = ({ sticky }) => {

  return (
    <div id="Nav" className={sticky ? "nav-sticky" : "nav"}>
      <div className="wrapper nav-inner">
          <div className={sticky ? "logo-sticky" : "logo"}>
            <a href="#">Gergely Sajo</a>
        </div>
        <div className="nav-bar">
          <ul className={sticky ? "nav-elements-sticky" : "nav-elements"}>
            <li><a href="#my-projects" id="my-projects-link">My Projects</a></li>
            <li><a href="#skills" id="skills-link">Skills</a></li>
            <li><a href="#about-me" id="about-me-link">About Me</a></li>
            <li><a href="#resume" id="resume-link">Resume</a></li>
            <li><a href="#contact" id="contact-link">Contact</a></li>
          </ul>
        </div>
      </div>  
    </div>
  )
}

export default Nav
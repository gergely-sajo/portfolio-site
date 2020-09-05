import React, { useState } from 'react';
import CV from '../images/resume.pdf';

const Header = ({ sticky }) => {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false)

  let mobileMenu
  let mobileMenuBackgroundShadow

  if (mobileMenuOpen) {
    mobileMenu =  
      <div className="nav__mobile">
        <ul className="nav__elements--mobile" onClick={() => setmobileMenuOpen(!mobileMenuOpen)}>
          <a href="#" id="home" ><li>Home</li></a>
          <a href="#my-projects" id="my-projects-link" ><li>My Projects</li></a>
          <a href="#skills" id="skills-link"><li>Skills</li></a>
          <a href="#about-me" id="about-me-link"><li>About Me</li></a>
          <a href={CV} target="_blank"><li>Download CV</li></a>
          <a href="#contact" id="contact-link"><li>Contact</li></a>
        </ul>
      </div>

      mobileMenuBackgroundShadow = <div className="nav__mobile__background-shadow" onClick={() => setmobileMenuOpen(!mobileMenuOpen)}></div>
  }

  return (
    <div id="nav" className={sticky ? "nav-sticky" : "nav"}>

      <div className="wrapper nav-inner">
          <div className={sticky ? "logo-sticky" : "logo"}>
            <a href="#">Gergely Sajo</a>
        </div>
        
        <div className="nav__mobile--menu">
          <span 
            className={mobileMenu && sticky ? "nav__mobile-menu--icon--menu-open--sticky" : (mobileMenu && !sticky ? "nav__mobile-menu--icon--menu-open" : (sticky && !mobileMenu ? "nav__mobile-menu--icon-sticky" : "nav__mobile-menu--icon"))}
            onClick={() => setmobileMenuOpen(!mobileMenuOpen)}
            />
          { mobileMenuBackgroundShadow }
          { mobileMenu }
        </div>

        <div className="nav-bar">
          <ul className={sticky ? "nav-elements-sticky" : "nav-elements"}>
            <li><a href="#my-projects" id="my-projects-link">My Projects</a></li>
            <li><a href="#skills" id="skills-link">Skills</a></li>
            <li><a href="#about-me" id="about-me-link">About Me</a></li>
            <li><a href={CV} target="_blank">Download CV</a></li>
            <li><a href="#contact" id="contact-link">Contact</a></li>
          </ul>
        </div>

      </div>  
    </div>
  )
}

export default Header

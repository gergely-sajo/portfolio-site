import React from 'react';
import slideshow from '../../images/slideshow.webp';
import { FaJsSquare } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

function Slideshow() {
  return (
    <div className="project-preview">
      <div className="project-preview__img--left project-preview__img--desktop">
        <img className="project__img" src={slideshow} alt="Slideshow"/>
      </div>
      <div className="project-preview__content--right">
          <h3 className="page-section__subtitle">Slideshow</h3>
          <p className="page-section__text-desc">My first small project was a simple slideshow where you can go forwards, backwards and you can start and stop the slideshow. Once the images are done, it automatically start over from the beginning.</p>
          <div className="project-preview__img--left project-preview__img--mobile">
            <img className="project__img" src={slideshow} alt="Slideshow"/>
          </div>
          <div className="project__tech-list">
          <h4 className="page-section__text-title page-section__text-title--black">Stack Used:</h4>
          <ul className="page-section__text-desc">
            <li>
              <FaHtml5 /> HTML
            </li>
            <li>
              <DiCss3 /> CSS
            </li>
            <li>
              <FaJsSquare /> JavaScript
            </li>
            <li>
              <SiJquery /> jQuery
            </li>
          </ul>
          <a href="https://gergely-sajo-slideshow.netlify.app/" target="_blank"><button className="btn btn-dark m-r--s">View Site</button></a>
          <a href="https://github.com/gergely-sajo/slideshow-jquery" target="_blank"><button className="btn btn-dark">View Code</button></a>
        </div>
      </div>   
    </div>  
  )
}
  
export default Slideshow;
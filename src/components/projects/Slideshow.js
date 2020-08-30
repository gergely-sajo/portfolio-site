import React from 'react';
import slideshow from '../../images/slideshow.png';
import { FaJsSquare } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

function Slideshow() {
  return (
      <div className="project-preview">
        <div className="project-preview__img">
              <img className="project__img" src={slideshow}/>
        </div>
        <div className="project-preview__content project-preview__content-right">
          <div className="project__content-box">
            <h3 className="project__title">Slideshow</h3>
            <p className="project__desc">My first small project was a simple slideshow where you can go forwards, backwards and you can start and stop the slideshow. Once the images are done, it automatically start over from the beginning.</p>
          </div>
          <div className="project__tech-list">
            <h4 className="project__tech-list-title">Stack Used:</h4>
            <ul className="project__tech-list-items">
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
          </div>
          <a href="https://gergely-sajo-slideshow.netlify.app/" target="_blank"><button className="btn btn-dark sm-r-m">View Site</button></a>
          <a href="https://github.com/gergely-sajo/slideshow-jquery" target="_blank"><button className="btn btn-dark">View Code</button></a>
        </div>   
      </div>  
  )
}
  
export default Slideshow;
import React from 'react';
import randomColorGenerator from '../../images/random-color-generator.png';
import { FaJsSquare } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";

function RandomColorGenerator() {
  return (
      <div className="project-preview">
        <div className="project-preview__content project-preview__content-left">
          <div className="project__content-box">
            <h3 className="project__title">Random Color Generator</h3>
            <p className="project__desc">By clicking on the "CLICK ME!" button we can generate a random color for the background, and we also get the hex color code for the color generated.</p>
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
            </ul>
          </div>
          <a href="https://gergely-sajo-random-color-generator.netlify.app/" target="_blank"><button className="btn btn-dark sm-r-m">View Site</button></a>
          <a href="https://github.com/gergely-sajo/random-color-generator" target="_blank"><button className="btn btn-dark">View Code</button></a>
        </div>
        <div className="project-preview__img">
            <img className="project__img" src={randomColorGenerator}/>
        </div>
      </div>
  )
}

export default RandomColorGenerator;

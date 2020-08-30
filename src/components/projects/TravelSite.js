import React from 'react';
import travelSite from '../../images/travel-site.png';
import { FaJsSquare } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { SiNodeDotJs } from "react-icons/si";

function TravelSite() {
  return (
      <div className="project-preview">
        <div className="project-preview__img">
              <img className="project__img" src={travelSite}/>
        </div>
        <div className="project-preview__content project-preview__content-right">
          <div className="project__content-box">
            <h3 className="project__title">Travel site</h3>
            <p className="project__desc">The travel site is meant to showcase the BEM philosophy and mobile-first design.</p>
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
                  <SiNodeDotJs /> Node.Js
                </li>
                <li>
                  <SiWebpack /> Webpack
                </li>
            </ul>
          </div>
          <a href="https://gergely-sajo-travel-site.netlify.app/" target="_blank"><button className="btn btn-dark sm-r-m">View Site</button></a>
          <a href="https://github.com/gergely-sajo/travel-site" target="_blank"><button className="btn btn-dark">View Code</button></a>
        </div>   
      </div>  
  )
}
  
export default TravelSite;
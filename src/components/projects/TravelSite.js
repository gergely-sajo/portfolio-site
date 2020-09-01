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
      <div className="project-preview__img--left project-preview__img--desktop">
        <img className="project__img" src={travelSite}/>
      </div>
      <div className="project-preview__content--right">
          <h3 className="project__title">Travel site</h3>
          <p className="page-section__text-desc project__desc">The travel site is meant to showcase the BEM philosophy and mobile-first design.</p>
          <div className="project-preview__img--left project-preview__img--mobile">
            <img className="project__img" src={travelSite}/>
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
          <a href="https://gergely-sajo-travel-site.netlify.app/" target="_blank"><button className="btn btn-dark sm-r-m">View Site</button></a>
          <a href="https://github.com/gergely-sajo/travel-site" target="_blank"><button className="btn btn-dark">View Code</button></a>       
        </div>
      </div>   
    </div>  
  )
}
  
export default TravelSite;
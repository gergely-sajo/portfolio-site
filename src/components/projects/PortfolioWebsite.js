import React from 'react';
import portfolio from '../../images/portfolio-site.png';
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";

function PortfolioWebsite() {
  return (
    <div className="project-preview">
      <div className="project-preview__img--left project-preview__img--desktop">
        <img className="project__img" src={portfolio} alt="Portfolio website, this website"/>
      </div>
      <div className="project-preview__content--right">
          <h3 className="page-section__subtitle">Portfolio Website</h3>
          <p className="page-section__text-desc">Created to showcase my work (both the finished project and their repective code) and skills, plus for visitors to get to know me a little bit better than only through my resume.</p>
          <div className="project-preview__img--left project-preview__img--mobile">
            <img className="project__img" src={portfolio} alt="Portfolio website, this website"/>
          </div>
          <div className="project__tech-list">
            <h4 className="page-section__text-title page-section__text-title--black">Stack Used:</h4>
            <ul className="page-section__text-desc">
              <li>
                <FaJsSquare /> JavaScript
              </li>
              <li>
                <FaReact /> React.js
              </li>
              <li>
                <DiCss3 /> CSS
              </li>
              <li>
                <FaHtml5 /> HTML
              </li>
            </ul>
            <a href="https://github.com/gergely-sajo/portfolio-site" target="_blank"><button className="btn btn-dark">View Code</button></a>
          </div>
      </div>
    </div>  
  )
}
  
export default PortfolioWebsite;
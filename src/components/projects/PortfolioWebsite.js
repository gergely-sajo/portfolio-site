import React from 'react';
import shoppingList from '../../images/facebook-like-app.png';
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";

function PortfolioWebsite() {
  return (
      <div className="project-preview">
        <div className="project-preview__img">
              <img className="project__img" src={shoppingList}/>
        </div>
        <div className="project-preview__content project-preview__content-right">
          <div className="project__content-box">
            <h3 className="project__title">Portfolio Website</h3>
            <p className="project__desc">Created to showcase my work (both the finished project and their repective code) and skills, plus for visitors to get to know me a little bit better than only through my resume.</p>
          </div>
          <div className="project__tech-list">
            <h4 className="project__tech-list-title">Stack Used:</h4>
            <ul className="project__tech-list-items">
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
          </div>
          <a href="https://github.com/gergely-sajo/portfolio-site" target="_blank"><button className="btn btn-dark">View Code</button></a>
        </div>   
      </div>  
  )
}
  
export default PortfolioWebsite;
import React from 'react';
import counterApp from '../../images/counter-app.png';
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function CounterApp() {
  return (
    <div className="project-preview">
      <div className="project-preview__img--left project-preview__img--desktop">
        <img className="project__img" src={counterApp}/>
      </div>
      <div className="project-preview__content--right">
          <h3 className="page-section__subtitle">Counter App</h3>
          <p className="page-section__text-desc">A simple counter app, where users can add and remove counters, and count on the counters by incrementing their values. A total counter is on the top which counts the counters which are not zero. Many "counters" in this description.</p>
          <div className="project-preview__img--left project-preview__img--mobile">
            <img className="project__img" src={counterApp}/>
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
          </ul>
          <a href="https://gergely-sajo-counter-app.netlify.app/" target="_blank"><button className="btn btn-dark m-r--s">View Site</button></a>
          <a href="https://github.com/gergely-sajo/counter" target="_blank"><button className="btn btn-dark">View Code</button></a>
        </div>      
      </div>   
    </div>  
  )
}
  
export default CounterApp;
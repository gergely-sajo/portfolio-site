import React from 'react';
import counterApp from '../../images/counter-app.png';
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function CounterApp() {
  return (
    <div className="project-preview">
      <div className="project-preview__img">
        <img className="project__img" src={counterApp}/>
      </div>
      <div className="project-preview__content project-preview__content-right">
        <div className="project__content-box">
          <h3 className="project__title">Counter App</h3>
          <p className="project__desc">A simple counter app, where users can add and remove counters, and count on the counters by incrementing their values. A total counter is on the top which counts the counters which are not zero. Many "counters" in this description.</p>
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
          </ul>
        </div>
        <a href="https://gergely-sajo-counter-app.netlify.app/" target="_blank"><button className="btn btn-dark sm-r-m">View Site</button></a>
        <a href="https://github.com/gergely-sajo/counter" target="_blank"><button className="btn btn-dark">View Code</button></a>
      </div>   
    </div>  
  )
}
  
export default CounterApp;
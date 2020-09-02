import React from 'react';
import facebookLikeApp from '../../images/facebook-like-app.png';
import { FaJsSquare } from "react-icons/fa";
import { SiNodeDotJs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function FacebookLikeApp() {
  return (
    <div className="project-preview">
      <div className="project-preview__content--left">
          <h3 className="page-section__subtitle">Facebook-like App</h3>
          <p className="page-section__text-desc">New users must register first, or if they have a user account, they can login. Within the app it is possible to post, edit and delete content. Users can follow each other, as well.</p>
          <div className="project-preview__img--right project-preview__img--mobile">
            <img className="project__img" src={facebookLikeApp}/>
          </div>
          <div className="project__tech-list">
            <h4 className="page-section__text-title page-section__text-title--black">Stack Used:</h4>
            <ul className="page-section__text-desc">
              <li>
                <FaJsSquare /> JavaScript
              </li>
              <li>
                <SiNodeDotJs /> Node.Js
              </li>
              <li>
                <SiMongodb /> Mongo.db
              </li>
              <li>
                <SiWebpack /> Webpack
              </li>
              <li>
                <FaBootstrap /> Bootstrap
              </li>
              <li>
                <AiOutlineStar /> Express.js
              </li>
            </ul>
            <a href="https://gergely-sajo-facebook-like-app.herokuapp.com/" target="_blank"><button className="btn btn-dark sm-r-m">View Site</button></a>
            <a href="https://github.com/gergely-sajo/facebook-like-app" target="_blank"><button className="btn btn-dark">View Code</button></a>
          </div>
      </div>
      <div className="project-preview__img--right project-preview__img--desktop">
        <img className="project__img" src={facebookLikeApp}/>
      </div>
    </div>
  )
}

export default FacebookLikeApp;

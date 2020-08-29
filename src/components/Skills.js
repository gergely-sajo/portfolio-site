import React from 'react';
import { FaJsSquare } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNodeDotJs } from "react-icons/si";
import { AiOutlineStar } from "react-icons/ai";
import { FaBootstrap } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { SiHeroku } from "react-icons/si";

function Skills() {
  return (
    <div id="skills" className="page-section page-section--dark">
      <div className="wrapper">
        <h2 className="page-section__title page-section__title--light">Skills</h2>
        <div className="skills-container">
          <div className="skillset">
            <p className="skillset__title">Languages</p>
            <ul className="skillset">
              <li><FaHtml5 /> HTML5</li>
              <li><DiCss3 /> CSS3</li>
              <li><FaJsSquare /> JavaScript</li>
            </ul>
          </div>
          <div className="skillset">
            <p className="skillset__title">Frameworks & Libraries</p>
            <ul className="skillset">
              <li><FaReact /> React</li>
              <li><SiNodeDotJs /> Node.js</li>
              <li><AiOutlineStar /> Express.js</li>
              <li><SiJquery /> jQuery</li>
              <li><FaBootstrap /> Bootstrap</li>
              <li><AiOutlineStar /> Lodash</li>
            </ul>
          </div>
          <div className="skillset">
            <p className="skillset__title">Tools</p>
            <ul className="skillset">
              <li><FaNpm /> NPM</li>
              <li><SiWebpack /> Webpack</li>
            </ul>
          </div>
          <div className="skillset">
            <p className="skillset__title">Additional Stuff</p>
            <ul className="skillset">
              <li><FaGithub /> Git & Github</li>
              <li><SiMongodb /> Mongodb</li>
              <li><FaWordpress /> Wordpress</li>
              <li><SiNetlify /> Netlify</li>
              <li><SiHeroku /> Heroku</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
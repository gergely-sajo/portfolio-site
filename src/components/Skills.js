import React from 'react';

import Skillset from './skillComponents/Skillset';

import { FaJsSquare , FaHtml5 , FaReact , FaBootstrap , FaNpm , FaGithub , FaWordpress} from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiJquery , SiNodeDotJs, SiWebpack, SiMongodb, SiNetlify , SiHeroku } from "react-icons/si";
import { AiOutlineStar } from "react-icons/ai";
import { FiCode } from "react-icons/fi";

function Skills() {
  return (
    <div id="skills" className="page-section page-section--dark">
      <div className="wrapper">
        <h2 className="page-section__title page-section__title--light">Skills</h2>
        <div className="page-section__flex">
          <div className="row__3">
            <Skillset
              skillsetTitle={"Languages"}
              stackList={[
                {stackIcon: <FaHtml5/>, stackName: "HTML5"},
                {stackIcon: <DiCss3/>, stackName: "CSS3"},
                {stackIcon: <FaJsSquare/>, stackName: "Javascript"}
              ]}
            />
          </div>
          <div className="row__3">
            <Skillset
              skillsetTitle={"Frameworks & Libs"}
              stackList={[
                {stackIcon: <FaReact/>, stackName: "React"},
                {stackIcon: <SiNodeDotJs/>, stackName: "Node.js"},
                {stackIcon: <AiOutlineStar/>, stackName: "Express.js"},
                {stackIcon: <SiJquery/>, stackName: "jQuery"},
                {stackIcon: <FaBootstrap/>, stackName: "Bootstrap"},
                {stackIcon: <AiOutlineStar/>, stackName: "Loadash"}
              ]}
            />
          </div>
          <div className="row__3">
            <Skillset
              skillsetTitle={"Tools"}
              stackList={[
                {stackIcon: <FaNpm/>, stackName: "NPM"},
                {stackIcon: <SiWebpack/>, stackName: "Webpack"}
              ]}
            />
          </div>
          <div className="row__3">
            <Skillset
              skillsetTitle={"Tools"}
              stackList={[
                {stackIcon: <FaGithub/>, stackName: "Git & Github"},
                {stackIcon: <SiMongodb/>, stackName: "Mongodb"},
                {stackIcon: <FaWordpress/>, stackName: "Wordpress"},
                {stackIcon: <FiCode/>, stackName: "ejs"},
                {stackIcon: <SiNetlify/>, stackName: "Netlify"},
                {stackIcon: <SiHeroku/>, stackName: "Heroku"}
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
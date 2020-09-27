import React from 'react';

import ProjectPreviewImgLeft from './projectComponents/ProjectPreviewImgLeft';

import travelSite from '../../images/travel-site.png';
import { FaJsSquare , FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiWebpack , SiNodeDotJs } from "react-icons/si";

function TravelSite() {
  return (
    <ProjectPreviewImgLeft
      imgSrc={travelSite}
      imgAlt="Travel site"
      projectName="Travel site"
      projectDesc="The travel site is meant to showcase the BEM philosophy and mobile-first design."
      viewSite="https://gergely-sajo-travel-site.netlify.app/"
      viewCode="https://github.com/gergely-sajo/travel-site"
      stackList={[
        {stackIcon: <FaHtml5/>, stackName: "HTML"},
        {stackIcon: <DiCss3/>, stackName: "CSS"},
        {stackIcon: <FaJsSquare/>, stackName: "Javascript"},
        {stackIcon: <SiNodeDotJs/>, stackName: "Node.js"},
        {stackIcon: <SiWebpack/>, stackName: "Webpack"}
      ]}
    /> 
  )
}
  
export default TravelSite;
import React from 'react';

import ProjectPreviewImgLeft from './projectComponents/ProjectPreviewImgLeft'

import slideshow from '../../images/slideshow.png';
import { FaJsSquare , FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiJquery } from "react-icons/si";

function Slideshow() {
  return (
    <ProjectPreviewImgLeft
      imgSrc={slideshow}
      imgAlt="Slideshow"
      projectName="Slideshow"
      projectDesc="My first small project was a simple slideshow where you can go forwards, backwards and you can start and stop the slideshow. Once the images are done, it automatically start over from the beginning."
      viewSite="https://gergely-sajo-slideshow.netlify.app/"
      viewCode="https://github.com/gergely-sajo/slideshow-jquery"
      stackList={[
        {stackIcon: <FaHtml5/>, stackName: "HTML"},
        {stackIcon: <DiCss3/>, stackName: "CSS"},
        {stackIcon: <FaJsSquare/>, stackName: "Javascript"},
        {stackIcon: <SiJquery/>, stackName: "jQuery"}
      ]}
    />
  )
}
  
export default Slideshow;
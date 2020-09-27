import React from 'react';

import ProjectPreviewImgRight from './projectComponents/ProjectPreviewImgRight';

import facebookLikeApp from '../../images/facebook-like-app.png';
import { FaJsSquare , FaBootstrap , FaHtml5 } from "react-icons/fa";
import { SiNodeDotJs , SiMongodb , SiWebpack } from "react-icons/si";
import { AiOutlineStar } from "react-icons/ai";


function FacebookLikeApp() {
  return (
    <ProjectPreviewImgRight
      imgSrc={facebookLikeApp}
      imgAlt="Facebook like app"
      projectName="Facebook-like App"
      projectDesc="New users must register first, or if they have a user account, they can login. Within the app it is possible to post, edit and delete content. Users can follow each other, as well."
      viewSite="https://gergely-sajo-facebook-like-app.herokuapp.com/"
      viewCode="https://github.com/gergely-sajo/facebook-like-app"
      stackList={[
        {stackIcon: <FaJsSquare/>, stackName: "Javascript"},
        {stackIcon: <SiNodeDotJs/>, stackName: "Node.js"},
        {stackIcon: <SiMongodb/>, stackName: "MongoDB"},
        {stackIcon: <SiWebpack/>, stackName: "Webpack"},
        {stackIcon: <FaBootstrap/>, stackName: "Bootstrap"},
        {stackIcon: <AiOutlineStar/>, stackName: "Express.js"},
        {stackIcon: <AiOutlineStar/>, stackName: "EJS"},
        {stackIcon: <FaHtml5/>, stackName: "HTML"}
      ]}
    />
  )
}

export default FacebookLikeApp;

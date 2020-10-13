import React from "react";

import ProjectPreviewImgLeft from "./projectComponents/ProjectPreviewImgLeft";

import portfolio from "../../images/portfolio-site.png";
import { FaJsSquare, FaReact, FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";

function PortfolioWebsite() {
  return (
    <ProjectPreviewImgLeft
      imgSrc={portfolio}
      imgAlt="Portfolio Website"
      projectName="Portfolio Website"
      projectDesc="Created to showcase my work (both the finished project and their repective code) and skills, plus for visitors to get to know me a little bit better than only through my resume."
      viewSite="https://gergelysajo.netlify.app/"
      viewCode="https://github.com/gergely-sajo/portfolio-site"
      stackList={[
        { stackIcon: <FaJsSquare />, stackName: "Javascript" },
        { stackIcon: <FaReact />, stackName: "React" },
        { stackIcon: <DiCss3 />, stackName: "CSS" },
        { stackIcon: <FaHtml5 />, stackName: "HTML" }
      ]}
    />
  );
}

export default PortfolioWebsite;

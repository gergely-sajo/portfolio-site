import React from "react";

import ProjectPreviewImgRight from "./projectComponents/ProjectPreviewImgRight";

import randomColorGenerator from "../../images/random-color-generator.png";
import { FaJsSquare, FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";

function RandomColorGenerator() {
  return (
    <ProjectPreviewImgRight
      imgSrc={randomColorGenerator}
      imgAlt="Random Color Generator"
      projectName="Random Color Generator"
      projectDesc="By clicking on the CLICK ME! button we can generate a random color for the background, and we also get the hex color code for the color generated."
      viewSite="https://gergely-sajo-random-color-generator.netlify.app/"
      viewCode="https://github.com/gergely-sajo/random-color-generator"
      stackList={[
        { stackIcon: <FaHtml5 />, stackName: "HTML" },
        { stackIcon: <DiCss3 />, stackName: "CSS" },
        { stackIcon: <FaJsSquare />, stackName: "Javascript" }
      ]}
    />
  );
}

export default RandomColorGenerator;

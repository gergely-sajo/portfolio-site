import React from "react";

import ProjectPreviewImgLeft from "./projectComponents/ProjectPreviewImgLeft";

import nailsByRenee from "../../images/nails-by-renee.png";
import { FaJsSquare, FaHtml5, FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";

function TravelSite() {
  return (
    <ProjectPreviewImgLeft
      imgSrc={nailsByRenee}
      imgAlt="Nails by Renee"
      projectName="Nails by Renee"
      projectDesc="This one-page website was made for a nail saloon located in Budapest, HU."
      viewSite="https://nailsbyrenee.netlify.app/"
      viewCode="https://github.com/gergely-sajo/nails-by-renee"
      stackList={[
        { stackIcon: <FaHtml5 />, stackName: "HTML" },
        { stackIcon: <DiCss3 />, stackName: "CSS" },
        { stackIcon: <FaJsSquare />, stackName: "Javascript" },
        { stackIcon: <FaReact />, stackName: "React.js" }
      ]}
    />
  );
}

export default TravelSite;

import React from 'react';

import ProjectPreviewImgLeft from './projectComponents/ProjectPreviewImgLeft';

import counterApp from '../../images/counter-app.png';
import { FaJsSquare, FaReact } from 'react-icons/fa';

function CounterApp() {
  return (
    <ProjectPreviewImgLeft
      imgSrc={counterApp}
      imgAlt="Counter app"
      projectName="Counter App"
      projectDesc="A simple counter app, where users can add and remove counters, and count on the counters by incrementing their values. A total counter is on the top which counts the counters which are not zero. Many counters in this description."
      viewSite="https://gergely-sajo-counter-app.netlify.app/"
      viewCode="https://github.com/gergely-sajo/counter"
      stackList={[
        {stackIcon: <FaJsSquare/>, stackName: "Javascript"},
        {stackIcon: <FaReact/>, stackName: "React"}
      ]}
    />
  )
}
  
export default CounterApp;
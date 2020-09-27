import React from 'react';

import ProjectPreviewImgRight from './projectComponents/ProjectPreviewImgRight';

import shoppingList from '../../images/shopping-list.png';
import { FaJsSquare , FaHtml5 } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { SiMongodb, SiWebpack } from "react-icons/si";
import { DiCss3 } from "react-icons/di";


function ShoppingList() {
  return (
    <ProjectPreviewImgRight
      imgSrc={shoppingList}
      imgAlt="Shopping list"
      projectName="Shopping list"
      projectDesc="The app is password protected. Username: username - Password: password - A shopping list or shopping cart, where you can add items, delete them, and once you are ready with the shopping, you can clear all items from the shopping list. "
      viewSite="https://gergely-sajo-shopping-list.herokuapp.com/"
      viewCode="https://github.com/gergely-sajo/shopping-list"
      stackList={[
        {stackIcon: <FaJsSquare/>, stackName: "Javascript"},
        {stackIcon: <AiOutlineStar/>, stackName: "Express.js"},
        {stackIcon: <SiMongodb/>, stackName: "MongoDB"},
        {stackIcon: <SiWebpack/>, stackName: "Webpack"},
        {stackIcon: <DiCss3/>, stackName: "CSS"},
        {stackIcon: <FaHtml5/>, stackName: "HTML"}
      ]}
    />
  )
}

export default ShoppingList;

import React from 'react';
import shoppingList from '../../images/shopping-list.png';
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";

function ShoppingList() {
  return (
    <div className="project-preview">
      <div className="project-preview__content--left">
          <h3 className="page-section__subtitle">Shopping list</h3>
          <h4 className="page-section__text-title page-section__text-title--black">The app is password protected.</h4>
          <ul className="page-section__text-desc page-section__text-desc--black">
            <li>
              <BiUserCircle /> Username: "username"
            </li>
            <li>
              <RiLockPasswordFill /> Password: "password"
            </li>
          </ul>
          <p className="page-section__text-desc">A shopping list or shopping cart, where you can add items, delete them, and once you are ready with the shopping, you can clear all items from the shopping list.</p>
          <div className="project-preview__img--right project-preview__img--mobile">
            <img className="project__img" src={shoppingList}/>
          </div>
          <div className="project__tech-list">
            <h4 className="page-section__text-title page-section__text-title--black">Stack Used:</h4>
            <ul className="page-section__text-desc">
              <li>
                <FaJsSquare /> JavaScript
              </li>
              <li>
                <AiOutlineStar /> Express.js
              </li>
              <li>
                <SiMongodb /> Mongo.db
              </li>
              <li>
                <DiCss3 /> CSS
              </li>
              <li>
                <FaHtml5 /> HTML
              </li>
            </ul>
            <a href="https://gergely-sajo-shopping-list.herokuapp.com/" target="_blank"><button className="btn btn-dark m-r--s">View Site</button></a>
            <a href="https://github.com/gergely-sajo/shopping-list" target="_blank"><button className="btn btn-dark">View Code</button></a>
          </div>
      </div>
      <div className="project-preview__img--right project-preview__img--desktop">
        <img className="project__img" src={shoppingList}/>
      </div>
    </div>
  )
}

export default ShoppingList;

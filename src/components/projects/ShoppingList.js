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
        <div className="project-preview__content project-preview__content-left">
          <div className="project__content-box">
            <h3 className="project__title">Shopping list</h3>
            <h4 className="authentic-info--title">The app is password protected.</h4>
            <ul className="authentic-info">
              <li>
                <BiUserCircle /> Username: username
              </li>
              <li>
                <RiLockPasswordFill /> Password: password
              </li>
            </ul>
            <p className="project__desc">A shopping list or shopping cart, where you can add items, delete them, and once you are ready with the shopping, you can clear all items from the shopping list.</p>
          </div>
          <div className="project__tech-list">
            <h4 className="project__tech-list-title">Stack Used:</h4>
            <ul className="project__tech-list-items">
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
          </div>
          <a href="https://gergely-sajo-shopping-list.herokuapp.com/" target="_blank"><button className="btn btn-dark sm-r-m">View Site</button></a>
          <a href="https://github.com/gergely-sajo/shopping-list" target="_blank"><button className="btn btn-dark">View Code</button></a>
        </div>
        <div className="project-preview__img">
            <img className="project__img" src={shoppingList}/>
        </div>
      </div>
  )
}

export default ShoppingList;

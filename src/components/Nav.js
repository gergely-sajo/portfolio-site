import React from 'react';

function Nav() {
  return (
    <div id="Nav" className="nav">
      <div className="wrapper nav-inner">
          <div className="logo">
            <a href="#">Gergely Sajo</a>
        </div>
        <div className="nav-bar">
          <ul className="nav-elements">
            <li className="nav-items">
              <a href="#">My Projects</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>  
    </div>
  )
}

export default Nav;
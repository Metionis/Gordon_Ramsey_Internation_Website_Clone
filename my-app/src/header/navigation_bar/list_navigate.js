import React from "react";
import "./styles/navigation_bar.css";

function Listnavigate () {
  return (
    <nav role="navigation" className="navi-list">
      <ul>
        <li className="menu-item">ACADEMY</li>
        <li className="menu-item">
          <a className="titile">
            RESTAURANTS & BARS
          </a>
          <ul>
            <li className="submenu">
              <a title="UK RESTAURANTS">UK RESTAURANTS</a>
            </li>
            <li className="submenu">
              <a title="US RESTAURANTS">US RESTAURANTS</a>
            </li>
          </ul>
        </li>
        <li className="menu-item">RECIPES</li>
        <li className="menu-item">MASTERCLASSES</li>
        <li className="menu-item">ABOUT GORDON</li>
        <li className="menu-item">TV</li>
        <li className="menu-item">CAREERS</li>
        <li class="gift-button menu-item">GIFT</li>
      </ul>
    </nav>
  );
}

export default Listnavigate;
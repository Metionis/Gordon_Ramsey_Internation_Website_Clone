import React from "react";
import "./styles/navigation_bar.css";

function Listnavigate () {
  return (
    <nav role="navigation" className="navi-list">
      <ul>
        <li>ACADEMY</li>
        <li>RESTAURANTS & BARS</li>
        <li>RECIPES</li>
        <li>MASTERCLASSES</li>
        <li>ABOUT GORDON</li>
        <li>TV</li>
        <li>CAREERS</li>
        <li class="gift-button">GIFT</li>
      </ul>
    </nav>
  );
}

export default Listnavigate;
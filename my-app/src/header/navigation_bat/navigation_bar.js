import React from "react";
import Logo from "./logo";
import Listnavigate from "./list_navigate";
import "../navigation_bar.css";

function Navi () {
  return (
    <div className="navigation-bar">
      <Logo />
      <Listnavigate />
    </div>
  )
}

export default Navi;
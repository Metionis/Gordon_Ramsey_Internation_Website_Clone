import React from "react";
import Logo from "./logo";
import Listnavigate from "./list_navigate";
import Sticker from "./sticker-container";

function Navi () {
  return (
    <div className="navigation-bar">
      <Logo />
      <Listnavigate />
      <Sticker />
    </div>
  )
}

export default Navi;
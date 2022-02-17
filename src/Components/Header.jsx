import React from "react";
import classes from "./Header.css";
import { BsMoon } from "react-icons/bs";
function Header() {
  return (
    <div className="Header">
      <div className="world">Where in the world?</div>

      <div className="mode">
        <BsMoon />
        <span>Dark mode</span>
        
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import classes from "./Header.css";
import { BsMoon } from "react-icons/bs";
import {MdOutlineLightMode} from"react-icons/md";

function Header() {
function changeTheme(){
 
// console.log("theme change")
}

  return (
    <div className="Header">
      <div className="world">Where in the world?</div>

      <div className="mode">
     
        <BsMoon onClick={changeTheme}/>
        <MdOutlineLightMode/>
        <span>Dark mode</span>
        
      </div>
    </div>
  );
}

export default Header;

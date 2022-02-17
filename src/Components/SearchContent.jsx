import React from "react";
import "./SearchContent.css";
import { MdSearch } from "react-icons/md";

function SearchContent() {
  return (
    <div className="searchcont">
      <div className="searchBox">
        <MdSearch className="searchIcon" />
        <input
          className="TextBox"
          type="search"
          placeholder="Search for a country..."
        ></input>
      </div>
      <div className="select">
        <select className="selectItem">
          <option>India</option>
          <option>China</option>
          <option>America</option>
        </select>
      </div>
    </div>
  );
}

export default SearchContent;

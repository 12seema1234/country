import React from "react";
import {IoIosArrowRoundBack } from "react-icons/io";
import FlagImage from "../Components/afganistan.png";
import classes from "./DetailPage.css";

function DetailPage() {
  return (
    <div className="maindiv">
      <div className="buttondiv">
        <IoIosArrowRoundBack className="arrow" />
        <button type="button">back</button>
      </div>
      <div className="contentdiv">
        <div className="flagdiv">
          <img src={FlagImage} />
        </div>
        <div className="datamain">
          <div className="datainfo-1">
            <span>Afganistan</span>
            <span>Native Name: </span>
            <span>Population:</span>
            <span>Region:</span>
            <span>Native Region:</span>
            <span>Capital:</span>
            <span>Border countries:</span>
          </div>
          <div className="datainfo-2">
            <span>Top level Domen:</span>
            <span>Curencies:</span>
            <span>Languages:</span>
          </div>
        </div>
      </div>
     
     
    </div>
  );
}

export default DetailPage;

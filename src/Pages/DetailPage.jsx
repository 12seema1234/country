import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import FlagImage from "../Components/afganistan.png";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios"
import "./DetailPage.css"

const getAPIForCuntry = (alphacode) =>
  `https://restcountries.com/v2/alpha/${alphacode}`;

  const concatLanguage = (initialVal , item)=> initialVal + item.name + ", "
  const concatCurrencie =(initialVal , item)=> initialVal + item.name + ", "
  const concatDomen =(initialVal ,item)=> initialVal + item
  const boderCountry =(initialVal ,item)=> initialVal + item
  
//Api fetching in functional component.

/*
 * Comcepot for Api Fetching:-
 * 1. Api should be fetched on component did mount
 * 2. Response data will be saved on component local state for further use.
 *
 * Question:- How you will manage lifcycle of compoent in functioncal component ?
 * Answer: componentDidMount() this will work only in class compoennt. In other owrds
 *  lifcycle callbacks could only be used in calss based component.
 * 
 * What the option we have.
    we wll use hooks 

    useEffectHooks(params1  , prams2)

    @params1  will be a callback function

    @prams2 dependency array

    useEffect hooks can be used multiple times in a comoponent.

    Use effect could be used for any kind of side effects.

    useState hooks for saving data

    
  const myArray = [{name:"abc"} ,{name:"DEF"},{name:"GHI"}];

  console.log(myArray.reduce(concatObject , "" ))

 `
 */

function DetailPage() {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);
  const navigate =useNavigate();
  const url = getAPIForCuntry(alpha3Code);
  console.log(url);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setCountry(response.data);
    });
  }, []);

  if(!country) {
    return <p>Loading...</p>
  }

   
   function ChangeBack(){
     navigate(-1)
   }
    // console.log("button clicked")
  
 
//  function HomeButton() {
//   const history = useHistory();
//   function handleClick() {
//     history.push("/home");
//   }
 
  return (
    <div className="maindiv">
      <div className="buttondiv" onClick={ChangeBack}>
        <IoIosArrowRoundBack className="arrow" />
        <button type="button" >back</button>
      </div>
      <div className="contentdiv">
        <div className="flagdiv">
          <img src={country.flags.png} />
        </div>
        <div className="datamain">

          <div className="datainfo-1">
          <span>{country.name}</span>
            <span>Native Name:{country.nativeName} </span>
            <span>Population:{country.population}</span>
            <span>Region:{country.region}</span>
            <span>Native Region:{country.region}</span>
            <span>Capital:{country.capital}</span>
            <span>Border countries:{country.borders ? country.borders.reduce(boderCountry, "")
          :null}</span>
          </div>
          <div className="datainfo-2">
            <span>Top level Domen:{country.topLevelDomain.reduce(concatDomen,"")}</span>
            <span>Curencies:{country.currencies.reduce(concatCurrencie, "")}</span>
            <span>Languages:{country.languages.reduce(concatLanguage , "")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;

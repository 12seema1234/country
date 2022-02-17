import React from "react";
import CountryCard from "../Components/CountryCard";
import SearchContent from '../Components/SearchContent'

function Home() {
  return (
    <div>
     <SearchContent/>
     <CountryCard/>
    </div>
  );
}

export default Home;

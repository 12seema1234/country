import axios from "axios";
import React, { Component } from "react";
import "./CountryCard.css";
import { useNavigate } from "react-router-dom";

// const withHook = (Component, useHook, hookName = 'hookvalue') => {
//   return function WrappedComponent(props) {
//     const hookValue = useHook();
//     return <Component {...props} {...{[hookName]: hookValue}} />;
//   };
// };

function withHook(Component, useHook, hookName) {
  return function WrappedComponent(props) {
    const hookValue = useHook();
    return <Component {...props} {...{ [hookName]: hookValue }} />;
  };
}

class CountryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };

    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    axios
      .get("https://restcountries.com/v2/all")
      .then((Response) => {
        console.log(Response);
        // this.state.posts.push(Response.data)
        this.setState({ posts: Response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  clickHandler(alpha3Code) {
    this.props.navigate("/pages/" + alpha3Code);
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="mainDiv">
        {!posts.length > 0 ? (
          <p>Loading ...</p>
        ) : (
          posts.map((country, index) => {
            return(
              <div className="maincard" key={country.alpha3Code} onClick={() => this.clickHandler(country.alpha3Code)}>
                <div className="flagsec">
                  <img className="Img" src={country.flags.png} />
                </div>
                <div className="flaginfo">
                  <span>{country.name}</span>
                  <span>Population:{country.population}</span>
                  <span>Region:{country.region}</span>
                  <span>Capital:{country.capital}</span>
                </div>
              </div>
              );
          })
        )}
      </div>
    );
  }
}

export default withHook(CountryCard, useNavigate, "navigate");

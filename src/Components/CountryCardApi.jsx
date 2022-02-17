import React, { Component } from "react";
import axios from "axios";

export class CountryCardApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((Response) => {
        console.log(Response);
        // this.state.posts.push(Response.data)
        this.setState({ posts: Response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        {!posts.length > 0 ? (
          <p>Loading ...</p>
        ) : (
          posts.map((country, index) => {
            return <div key={index}>{country.name.common}</div>;
          })
        )}
      </div>
    );
  }
}

export default CountryCardApi;

import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import NewsCategory from "./component/NewsCategory";

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_OCEAN;
  c = "Prasanna";
  render() {
    return (
      <div>
        <Navbar />
        <NewsCategory apikey={this.apikey} />
      </div>
    );
  }
}

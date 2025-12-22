import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/News";
import { NavbarWithNavigate } from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    query: "",
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({progress : progress});
  };

  handleQuery = (searchText) => {
    this.setState({ query: searchText });
  };

  render() {
    return (
      <Router>
        <NavbarWithNavigate handleQuery={this.handleQuery} />
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
        />

        <Routes>
          <Route path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} query={this.state.query} />} />
          <Route path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} category="business" />} />
          <Route path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} category="entertainment" />} />
          <Route path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} category="health" />} />
          <Route path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} category="science" />} />
          <Route path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} category="sports" />} />
          <Route path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} category="technology" />} />
        </Routes>
        <Footer/>
      </Router>
    );
  }
}

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/News";
import { NavbarWithNavigate } from "./components/Navbar";

export default class App extends Component {
  state = {
    query: "",
  };

  handleQuery = (searchText) => {
    this.setState({ query: searchText });
  };

  render() {
    return (
      <Router>
        <NavbarWithNavigate handleQuery={this.handleQuery} />

        <Routes>
          <Route path="/" element={<News query={this.state.query} />} />
          <Route path="/business" element={<News category="business" />} />
          <Route path="/entertainment" element={<News category="entertainment" />} />
          <Route path="/health" element={<News category="health" />} />
          <Route path="/science" element={<News category="science" />} />
          <Route path="/sports" element={<News category="sports" />} />
          <Route path="/technology" element={<News category="technology" />} />
        </Routes>
      </Router>
    );
  }
}

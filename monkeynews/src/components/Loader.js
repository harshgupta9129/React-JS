import React, { Component } from "react";
import loader from "./Loading.gif";

export default class Loader extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
        <img src={loader} alt="" />
      </div>
    );
  }
}

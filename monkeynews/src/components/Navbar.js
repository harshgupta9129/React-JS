import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

class Navbar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.query.trim() === "") return;

    this.props.handleQuery(this.state.query);
    this.props.navigate("/");
    this.setState({ query: "" });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MonkeyNews
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {[
                "business",
                "entertainment",
                "health",
                "science",
                "sports",
                "technology",
              ].map((cat) => (
                <li className="nav-item" key={cat}>
                  <Link className="nav-link" to={`/${cat}`}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>

            <form className="d-flex" onSubmit={this.handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search news..."
                value={this.state.query}
                onChange={this.handleChange}
              />
              <button className="btn btn-outline-success">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export function NavbarWithNavigate(props) {
  const navigate = useNavigate();
  return <Navbar {...props} navigate={navigate} />;
}

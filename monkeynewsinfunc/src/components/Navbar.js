import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") return;

    props.handleQuery(query);
    props.navigate("/");
    setQuery("");
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary p-3">
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

          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search news..."
              value={query}
              onChange={handleChange}
            />
            <button className="btn btn-outline-success">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export function NavbarWithNavigate(props) {
  const navigate = useNavigate();
  return <Navbar {...props} navigate={navigate} />;
}

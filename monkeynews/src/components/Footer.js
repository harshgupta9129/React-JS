import React from "react";
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row">
          {/* Brand */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">🐒 MonkeyNews</h5>
            <p className="text-muted">
              Get the latest headlines, trending stories, and breaking news from
              around the world in one place.
            </p>
          </div>

          {/* Categories */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Categories</h6>
            <ul className="list-unstyled">
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
          </div>

          {/* Info */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">About</h6>
            <p className="text-muted">
              Powered by NewsAPI. Built with React & Bootstrap.
            </p>
            <p className="text-muted mb-0">
              © {new Date().getFullYear()} MonkeyNews
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-2 bg-black text-secondary">
        Made with ❤️ using React
      </div>
    </footer>
  );
}

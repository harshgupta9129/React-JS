import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { title, description, imageurl, url, pubDate } = this.props;

    return (
      <div className="card my-3" style={{ width: "18rem" }}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1"}}>
          {this.props.source}
        </span>
        <img
          src={imageurl}
          className="card-img-top"
          alt="news"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x200?text=No+Image";
          }}
        />

        <div className="card-body">
          <h5 className="card-title">
            {title ? title.slice(0, 80) : "No Title"}
          </h5>

          <p className="card-text">
            {description ? description.slice(0, 120) : "No description"}
          </p>

          <p className="card-text">
            <small className="text-muted">
              {pubDate ? new Date(pubDate).toLocaleString() : ""}
            </small>
          </p>

          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

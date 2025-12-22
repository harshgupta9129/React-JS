import React from "react";


export default function NewsItem (props) {
  const { title, description, imageurl, url, pubDate } = props;

  return (
    <div className="card my-3" style={{ width: "18rem" }}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1" }}>
        {props.source}
      </span>
      <img
        src={imageurl}
        className="card-img-top"
        alt="news"
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

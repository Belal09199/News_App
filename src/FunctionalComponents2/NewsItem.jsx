import React from "react";
import { Link } from "react-router-dom";

export default function NewsItem(props) {
  return (
    <>
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-2">
        <div className="card">
          <img
            src={props.pic ? props.pic : "./images/noimage.jpeg"}
            height={200}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title.slice(0, 30) + "..."}</h5>
            <div className="source">
              <p>{props.source}</p>
              <p>{new Date(props.date).toLocaleDateString()}</p>
            </div>
            <p className="card-text">
              {props.description.slice(0, 40) + "..."}
            </p>
            <Link
              to={props.url}
              target="_blank"
              rel="noreferrer"
              className="btn background text-light w-100"
            >
              Read Full Article
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

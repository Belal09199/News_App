import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <>
        <div className=" col-lg-3 col-md-4 col-sm-6 col-12">
          <div
            className="card mb-3"
            style={{
              backgroundColor: "#0e2e50",
              color: "#fff",
              height: "450px",
            }}
          >
            <img
              src={this.props.pic}
              className="card-img-top"
              height="180px"
              width="100%"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {this.props.title.slice(0, 50) + "..."}
              </h5>
              <hr></hr>
              <span className="card-source">{this.props.source.name}</span>
              <span className="card-date">
                {new Date(this.props.date).toLocaleDateString()}
              </span>
              <hr></hr>
              <p className="card-text">
                {this.props.description.slice(0, 100) + "..."}
              </p>
              <a
                href={this.props.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-100 btn-md"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  postSearch(e) {
    e.preventDefault();
    this.props.getSearch(this.state.search);
    this.setState({ search: "" });
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg background sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/">
              NewsApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list text-light fs-1"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-light active"
                    aria-current="page"
                    to="/"
                    onClick={() => this.props.getSearch("")}
                  >
                    All
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="/politics "
                    onClick={() => this.props.getSearch("")}
                  >
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="/crimes"
                    onClick={() => this.props.getSearch("")}
                  >
                    Crime
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="/education"
                    onClick={() => this.props.getSearch("")}
                  >
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="/science"
                    onClick={() => this.props.getSearch("")}
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="/technology"
                    onClick={() => this.props.getSearch("")}
                  >
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="/sports"
                    onClick={() => this.props.getSearch("")}
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="/cricket"
                    onClick={() => this.props.getSearch("")}
                  >
                    Cricket
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Other
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/entertainment"
                        onClick={() => this.props.getSearch("")}
                      >
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/economics"
                        onClick={() => this.props.getSearch("")}
                      >
                        Economics
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/world"
                        onClick={() => this.props.getSearch("")}
                      >
                        World
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/india"
                        onClick={() => this.props.getSearch("")}
                      >
                        India
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/jokes"
                        onClick={() => this.props.getSearch("")}
                      >
                        Jokes
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/mahakumbh"
                        onClick={() => this.props.getSearch("")}
                      >
                        Mahakumbh
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => this.props.getLanguage("hi")}
                      >
                        Hindi
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => this.props.getLanguage("en")}
                      >
                        English
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" onSubmit={(e) => this.postSearch(e)}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name="search"
                  onChange={(e) => this.setState({ search: e.target.value })}
                  value={this.state.search}
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

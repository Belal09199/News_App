import React, { Component } from "react";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  getData(e) {
    this.setState({ search: e.target.value });
  }
  postData(e) {
    e.preventDefault();
    this.props.changeSearch(this.state.search);
    this.setState({ search: "" });
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbg sticky-top">
          <div className="container ">
            <a className="navbar-brand" style={{ color: "#E74C3C" }} href="/">
              NewsApp
            </a>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                    style={{ color: "#ffffff" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/politics">
                    Politics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/education">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/science">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/technology">
                    Technology
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/crime">
                    Crime
                  </a>
                </li>
                <li className="nav-item dropdown text-light">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Other
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/sports">
                        Sports
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cricket">
                        Cricket
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/olympics">
                        Olympics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/entertainment">
                        Entertainment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/health">
                        Health
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/economics">
                        Economics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/world">
                        World
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/corporate">
                        Corporate
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/it">
                        IT
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link text-light dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => this.props.changeLanguage("hi")}
                      >
                        Hindi
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => this.props.changeLanguage("en")}
                      >
                        English
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" onSubmit={(e) => this.postData(e)}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => this.getData(e)}
                  value={this.state.search}
                />
                <button
                  className="btn btn-outline-success text-light"
                  type="submit"
                >
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

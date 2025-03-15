import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "hi",
      search: "",
    };
    this.getLanguage = this.getLanguage.bind(this);
  }

  getLanguage(input) {
    this.setState({ language: input });
  }

  getSearch = (input) => {
    this.setState({ search: input });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar getLanguage={this.getLanguage} getSearch={this.getSearch} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="All"
                />
              }
            />
            <Route
              path="/politics"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Politics"
                />
              }
            />
            <Route
              path="/crimes"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Crime"
                />
              }
            />
            <Route
              path="/education"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Education"
                />
              }
            />
            <Route
              path="/science"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Science"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Technology"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Sports"
                />
              }
            />
            <Route
              path="/cricket"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Cricket"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Entertainment"
                />
              }
            />
            <Route
              path="/economics"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Economics"
                />
              }
            />
            <Route
              path="/world"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="World"
                />
              }
            />
            <Route
              path="/india"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="India"
                />
              }
            />
            <Route
              path="/jokes"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Jokes"
                />
              }
            />
            <Route
              path="/mahakumbh"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Mahakumbh"
                />
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

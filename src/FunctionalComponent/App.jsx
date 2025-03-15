import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

export default function App() {
  let [language, setLanguage] = useState("hi");
  let [search, setSearch] = useState("");
  function getLanguage(input) {
    setLanguage(input);
  }

  let getSearch = (input) => {
    setSearch(input);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar getLanguage={getLanguage} getSearch={getSearch} />
        <Routes>
          <Route
            path="/"
            element={<Home search={search} language={language} q="All" />}
          />
          <Route
            path="/politics"
            element={<Home search={search} language={language} q="Politics" />}
          />
          <Route
            path="/crimes"
            element={<Home search={search} language={language} q="Crime" />}
          />
          <Route
            path="/education"
            element={<Home search={search} language={language} q="Education" />}
          />
          <Route
            path="/science"
            element={<Home search={search} language={language} q="Science" />}
          />
          <Route
            path="/technology"
            element={
              <Home search={search} language={language} q="Technology" />
            }
          />
          <Route
            path="/sports"
            element={<Home search={search} language={language} q="Sports" />}
          />
          <Route
            path="/cricket"
            element={<Home search={search} language={language} q="Cricket" />}
          />
          <Route
            path="/entertainment"
            element={
              <Home search={search} language={language} q="Entertainment" />
            }
          />
          <Route
            path="/economics"
            element={<Home search={search} language={language} q="Economics" />}
          />
          <Route
            path="/world"
            element={<Home search={search} language={language} q="World" />}
          />
          <Route
            path="/india"
            element={<Home search={search} language={language} q="India" />}
          />
          <Route
            path="/jokes"
            element={<Home search={search} language={language} q="Jokes" />}
          />
          <Route
            path="/mahakumbh"
            element={<Home search={search} language={language} q="Mahakumbh" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

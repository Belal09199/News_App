import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

export default function App() {
  let [language, setLanguage] = useState("hi");

  const changeLanguage = (data) => {
    setLanguage(data);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar changeLanguage={changeLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/*" element={<Home language={language} q="All " />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

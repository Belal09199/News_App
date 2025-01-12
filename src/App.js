import React, { Component } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
export default class  App extends Component 
{
  constructor()
  {
    super()
    this.state={
      language:"hi",
      search:""
    }
  }
  changeLanguage=(data)=>
  {
    this.setState({language:data})
  }

  changeSearch=(data)=>
    {
      this.setState({search:data})
    }

 render()
 {     
  return (
    <>
    <BrowserRouter>
    <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>
    <Routes>
      <Route path="/" element={<Home search={this.state.search} language={this.state.language} q="All"/>}/>
      <Route path="/politics" element={<Home search={this.state.search} language={this.state.language} q="Politics"/>}/>
      <Route path="/education" element={<Home search={this.state.search} language={this.state.language} q="Education"/>}/>
      <Route path="/science" element={<Home search={this.state.search} language={this.state.language} q="Science"/>}/>
      <Route path="/technology" element={<Home search={this.state.search} language={this.state.language} q="Technology"/>}/>
      <Route path="/crime" element={<Home search={this.state.search} language={this.state.language} q="Crime"/>}/>
      <Route path="/sports" element={<Home search={this.state.search} language={this.state.language} q="Sports"/>}/>
      <Route path="/cricket" element={<Home search={this.state.search} language={this.state.language} q="Cricket"/>}/>
      <Route path="/olympics" element={<Home search={this.state.search} language={this.state.language} q="Olympics"/>}/>
      <Route path="/entertainment" element={<Home search={this.state.search} language={this.state.language} q="Entertainment"/>}/>
      <Route path="/health" element={<Home search={this.state.search} language={this.state.language} q="Health"/>}/>
      <Route path="/economics" element={<Home search={this.state.search} language={this.state.language} q="Economics"/>}/>
      <Route path="/world" element={<Home search={this.state.search} language={this.state.language} q="World"/>}/>
      <Route path="/corporate" element={<Home search={this.state.search} language={this.state.language} q="Corporate"/>}/>
      <Route path="/it" element={<Home search={this.state.search} language={this.state.language} q="IT"/>}/>
     
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}
}


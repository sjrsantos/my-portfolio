// src/App.js
import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename="/My-Portfolio">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/My-Portfolio/" element={<Home />} />
        <Route path="/My-Portfolio/about" element={<About />} />
        <Route path="/My-Portfolio/projects" element={<Projects />} />
        <Route path="/My-Portfolio/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

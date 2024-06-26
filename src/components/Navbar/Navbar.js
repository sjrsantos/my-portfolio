// src/components/Navbar/Navbar.js
import React from "react";
import { Nav, NavLink } from "./Navbar.styles";

const Navbar = () => (
  <Nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </Nav>
);

export default Navbar;

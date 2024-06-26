// src/components/Navbar/Navbar.js
import React from "react";
import { Nav, NavLink } from "./Navbar.styles";

const Navbar = () => (
  <Nav>
    <NavLink to="/My-Portfolio/">Home</NavLink>
    <NavLink to="/My-Portfolio/about">About</NavLink>
    <NavLink to="/My-Portfolio/projects">Projects</NavLink>
    <NavLink to="/My-Portfolio/contact">Contact</NavLink>
  </Nav>
);

export default Navbar;

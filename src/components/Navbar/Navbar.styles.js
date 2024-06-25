// src/components/Navbar/Navbar.styles.js
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #333;
  padding: 1rem;
  display: flex;
  justify-content: center;
  position: fixed; /* Adiciona posicionamento fixo */
  top: 0; /* Alinha o navbar ao topo da tela */
  width: 100%; /* Define a largura como 100% da tela */
  z-index: 1000; /* Ajusta a camada para ficar acima de outros elementos */
`;

export const NavLink = styled(Link)`
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

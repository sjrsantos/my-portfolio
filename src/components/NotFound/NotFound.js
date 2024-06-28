import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: #333;
  background-color: #f9f9f9;
  padding: 2rem;
`;

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.25rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const NotFound = () => (
  <NotFoundWrapper>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <HomeLink to="/">
      Go Home <FaHome />
    </HomeLink>
  </NotFoundWrapper>
);

export default NotFound;

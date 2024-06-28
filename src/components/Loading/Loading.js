import React from "react";
import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: #333;
  background-color: #f9f9f9;
`;

const Spinner = styled(FaSpinner)`
  font-size: 3rem;
  animation: ${spin} 2s linear infinite;
  margin-top: 1rem;
  color: #007bff;
`;

const Loading = () => (
  <LoadingWrapper>
    <h1>Loading...</h1>
    <Spinner />
  </LoadingWrapper>
);

export default Loading;

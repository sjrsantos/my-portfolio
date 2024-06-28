import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem 1rem;
  text-align: center;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;

  @media (min-width: 480px) {
    padding: 4rem 1rem 2rem;
  }

  @media (min-width: 768px) {
    padding: 5rem 1rem 3rem;
  }

  h1 {
    margin-top: 1rem;
    color: white; /* Change h1 color to white */
  }
`;

export const BackgroundWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background: url("https://media.giphy.com/media/doXBzUFJRxpaUbuaqz/giphy.gif")
    no-repeat center center fixed;
  background-size: cover;
`;

export const ProjectItem = styled(motion.a)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1rem 0;
  width: 100%;
  max-width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 150px;
  margin-bottom: 1rem;
  border-radius: 10px;
`;

export const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const ProjectActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

export const ProjectLink = styled.a`
  margin-top: 0.5rem;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ShareButton = styled.button`
  background: none;
  border: none;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #007bff;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

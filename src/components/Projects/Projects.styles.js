import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem; /* Adjust padding for smaller screens */
  position: relative; /* Ensure the wrapper is positioned relatively */
  min-height: 100vh; /* Ensure it covers the full height */
  color: white; /* Change text color to white */
  overflow: hidden; /* Prevent scroll bars */

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const BackgroundWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1; /* Position it behind the content */
  background: url("https://media.giphy.com/media/doXBzUFJRxpaUbuaqz/giphy.gif")
    no-repeat center center fixed; /* Use direct GIF URL */
  background-size: cover;
`;

export const ProjectItem = styled(motion.div)`
  background: rgba(
    255,
    255,
    255,
    0.9
  ); /* Adjust background to be semi-transparent */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1rem 0;
  width: 100%;
  max-width: 600px; /* Set a max width for the cards */
  height: auto; /* Allow the height to adjust based on content */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black; /* Set text color to black for ProjectItem content */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ProjectIcon = styled.div`
  margin-bottom: 1rem;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 150px; /* Limit the maximum height of the image */
  margin-bottom: 1rem; /* Space between image and other content */
  border-radius: 10px; /* Add rounded corners */
`;

export const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const ProjectLink = styled.div`
  margin-top: 0.5rem;
  color: rgba(0, 0, 0, 0.8); /* Adjust color for better visibility */
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

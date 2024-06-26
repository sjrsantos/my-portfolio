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
  max-width: 600px; /* Adjusted the max width to 600px */
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: black; /* Set text color to black for ProjectItem content */

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ProjectLink = styled.div`
  margin-top: 0.5rem;
  color: rgba(0, 0, 0, 0.8); /* Adjust color for better visibility */
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

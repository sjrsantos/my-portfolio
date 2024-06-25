// src/components/About/About.styles.js
import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutWrapper = styled(motion.div)`
  padding: 2rem;
  background: #f9f9f9; /* Change background color as needed */
  border-radius: 10px; /* Adds rounded borders */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a soft shadow */
  max-width: 800px; /* Sets maximum container width */
  margin: 0 auto; /* Centers container on the page */
  text-align: center; /* Centers text */
  font-family: "Roboto", sans-serif; /* Chooses a font */
  color: #333; /* Sets text color */

  h1 {
    font-size: 2.5rem; /* Sets font size for main header */
    margin-bottom: 1rem; /* Adds space below header */
  }

  h2 {
    font-size: 2rem; /* Sets font size for subheadings */
    margin-top: 2rem; /* Adds space above subheadings */
  }

  p {
    font-size: 1.1rem; /* Sets font size for paragraphs */
    line-height: 1.6; /* Sets line spacing for better readability */
    margin-bottom: 1.5rem; /* Adds space below paragraphs */
  }
`;

export const CardWrapper = styled(motion.div)`
  padding: 2rem;
  background: #ffffff; /* Change background color as needed */
  border-radius: 10px; /* Adds rounded borders */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a soft shadow */
  margin-bottom: 2rem; /* Adds space below each card */
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.5s, transform 0.5s ease-out;
`;

import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem 1rem; /* Adjust padding for smaller screens */
  text-align: center;
  font-family: "Roboto", sans-serif; /* Choose a font */
  overflow-x: hidden; /* Prevent horizontal scrolling */

  @media (min-width: 480px) {
    padding: 4rem 1rem 2rem;
  }

  @media (min-width: 768px) {
    padding: 5rem 1rem 3rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    font-size: 1.5rem;
    color: #007bff;
    text-decoration: none;
    margin: 0.1rem 0; /* Add margin between links */

    &:hover {
      color: #0056b3;
    }

    svg {
      margin-left: 0.5rem;
    }
  }

  h1,
  h2,
  p {
    margin-bottom: 1rem; /* Small vertical spacing for mobile screens */
  }

  h1 {
    margin-top: 1rem; /* Add space above main header */
  }

  .directly-contact {
    margin-top: 2rem; /* Add space above the "Directly Contact" section */
  }

  @media (min-width: 480px) {
    h1,
    h2,
    p {
      margin-bottom: 1rem; /* Adjust vertical spacing for medium screens */
    }
  }

  @media (min-width: 768px) {
    h1,
    h2,
    p {
      margin-bottom: 1rem; /* Increase vertical spacing for larger screens */
    }
  }
`;

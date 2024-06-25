// src/components/Projects/Projects.styles.js
import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsWrapper = styled.div`
  padding: 2rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  width: 80%;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: #0070f3;
  display: flex;
  justify-content: end;
  &:hover {
    text-decoration: underline;
  }
`;

// src/components/Home/Home.styles.js
import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f0f0;
  color: #333;
`;

export const Title = styled(motion.h1)`
  font-size: 3rem;
`;

export const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

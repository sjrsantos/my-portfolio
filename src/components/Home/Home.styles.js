import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const CarouselWrapper = styled.div`
  width: 80%; /* Adjust the width as needed */
  margin: 1rem 0;

  .slick-slide {
    transition: transform 0.5s ease;
    opacity: 0.4;
    transform: scale(0.5);
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  .slick-center {
    opacity: 1;
    transform: scale(1);
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CarouselImage = styled.img`
  width: 200px; /* Set a fixed width */
  height: 200px; /* Set a fixed height */
  object-fit: cover; /* Ensure the image covers the area */
  border-radius: 20px; /* Optional: add some styling to the images */

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

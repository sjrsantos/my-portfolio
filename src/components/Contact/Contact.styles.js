import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    font-size: 1.5rem;
    color: #007bff;
    text-decoration: none;

    &:hover {
      color: #0056b3;
    }

    svg {
      margin-left: 0.5rem;
    }
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%; /* Adjust width to fit smaller screens */
  max-width: 500px;
  margin: auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0.4rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0.4rem;
  }
`;

export const Button = styled.button`
  padding: 0.75rem;
  margin: 1rem 0;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0.6rem;
  }
`;

export const SuccessMessage = styled.p`
  color: green;
  margin-top: 1rem;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const FormErrors = styled.div`
  color: red;
  margin-top: 1rem;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

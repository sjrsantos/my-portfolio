import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%; /* Adjust to fit smaller screens */
  max-width: 500px;
  margin: auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
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

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin: 0.5rem 0;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 0.875rem;
  margin: 0.5rem 0;
`;

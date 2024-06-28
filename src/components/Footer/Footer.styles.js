import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 1rem 0;
  background-color: #333;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0;
  }
`;

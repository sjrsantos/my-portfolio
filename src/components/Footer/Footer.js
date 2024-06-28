import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterWrapper = styled.footer`
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

const SocialLinks = styled.div`
  margin-bottom: 1rem;

  a {
    color: white;
    margin: 0 0.5rem;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

const ContactInfo = styled.p`
  margin: 0.5rem 0;
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
`;

const Footer = () => (
  <FooterWrapper>
    <SocialLinks>
      <a
        href="https://github.com/sjrsantos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/silvio-dos-santos-j%C3%BAnior-18704b57/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="mailto:silvio-sjunior@hotmail.com">
        <FaEnvelope />
      </a>
    </SocialLinks>
    <ContactInfo>Contact: silvio-sjunior@hotmail.com</ContactInfo>
    <Copyright>© 2024 Silvio dos Santos Junior. All rights reserved.</Copyright>
  </FooterWrapper>
);

export default Footer;

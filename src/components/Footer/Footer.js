import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

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

const ContactInfo = styled.div`
  margin: 1rem 0;
`;

const Copyright = styled.p`
  margin: 1rem 0;
  font-size: 0.875rem;
  color: #ccc;
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
    <ContactInfo>
      <p>Contact: silvio-sjunior@hotmail.com</p>
    </ContactInfo>
    <Copyright>
      &copy; {new Date().getFullYear()} Silvio dos Santos Junior. All rights
      reserved.
    </Copyright>
  </FooterWrapper>
);

export default Footer;

// src/components/Contact/Contact.js
import React from "react";
import { ContactWrapper } from "./Contact.styles";

const Contact = () => (
  <ContactWrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1>Contact</h1>
    <p>Get in touch using the following email: silvio-sjunior@hotmail.com</p>
    <p>My LinkedIn profile: https://github.com/sjrsantos</p>
  </ContactWrapper>
);

export default Contact;

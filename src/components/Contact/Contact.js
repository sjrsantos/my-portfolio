import React from "react";
import { ContactWrapper } from "./Contact.styles";
import Form from "../Form/Form";

const Contact = () => (
  <ContactWrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1>Contact</h1>
    <p>
      Check my{" "}
      <b>
        <a
          href="https://www.linkedin.com/in/silvio-dos-santos-j%C3%BAnior-18704b57/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </b>{" "}
      profile.
    </p>
    <p>
      Check my{" "}
      <b>
        <a
          href="https://github.com/sjrsantos"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </b>{" "}
      profile.
    </p>
    <h2>Use the following Form to send me a message.</h2>
    <Form />
    <h2>Contact directly</h2>
    <p>
      Get in touch using the following email: <b>silvio-sjunior@hotmail.com</b>
    </p>
  </ContactWrapper>
);

export default Contact;

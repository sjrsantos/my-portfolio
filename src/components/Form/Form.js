import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FormWrapper, Input, TextArea, Button } from "./Form.styles";
import { IoIosSend } from "react-icons/io";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zf61gx6",
        "template_926q5ij",
        formData,
        "ywKzTbPKd3ATp9vbv"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextArea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit">
        Send <IoIosSend />
      </Button>
    </FormWrapper>
  );
};

export default Form;

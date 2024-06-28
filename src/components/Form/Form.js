import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FormWrapper,
  Input,
  TextArea,
  Button,
  ErrorMessage,
  SuccessMessage,
} from "./Form.styles";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    let errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters long";
    } else if (/[^a-zA-Z\s]/.test(formData.name.trim())) {
      errors.name = "Name can only contain letters and spaces";
    }

    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    } else if (
      /temp-mail|10minutemail|mailinator|guerrillamail/.test(formData.email)
    ) {
      errors.email = "Disposable email addresses are not allowed";
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
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
            setSuccessMessage("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
          },
          (error) => {
            console.log(error.text);
            setSuccessMessage("");
            setErrors({ submit: "An error occurred, please try again." });
          }
        );
    }
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
      {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      <TextArea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      <Button type="submit">Send</Button>
      {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </FormWrapper>
  );
};

export default Form;
